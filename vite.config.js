import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { gzipSync } from "node:zlib";
import { relative } from "node:path";

function performanceReportPlugin() {
  return {
    name: "performance-report",
    generateBundle(_options, bundle) {
      const chunks = Object.values(bundle)
        .filter(asset => asset.type === "chunk")
        .map(asset => {
          const rawBytes = Buffer.byteLength(asset.code);
          const gzipBytes = gzipSync(asset.code).length;
          return {
            file: asset.fileName,
            type: "js",
            rawBytes,
            gzipBytes,
            modules: Object.keys(asset.modules || {}).length,
            dynamicEntry: !!asset.isDynamicEntry,
            entry: !!asset.isEntry
          };
        })
        .sort((a, b) => b.rawBytes - a.rawBytes);

      const assets = Object.values(bundle)
        .filter(asset => asset.type === "asset")
        .map(asset => {
          const source = typeof asset.source === "string" ? asset.source : Buffer.from(asset.source);
          const rawBytes = Buffer.byteLength(source);
          return {
            file: asset.fileName,
            type: "asset",
            rawBytes,
            gzipBytes: gzipSync(source).length
          };
        })
        .sort((a, b) => b.rawBytes - a.rawBytes);

      const totalJsBytes = chunks.reduce((sum, item) => sum + item.rawBytes, 0);
      const totalJsGzipBytes = chunks.reduce((sum, item) => sum + item.gzipBytes, 0);

      this.emitFile({
        type: "asset",
        fileName: "performance-report.json",
        source: JSON.stringify({
          generatedAt: new Date().toISOString(),
          summary: {
            jsChunks: chunks.length,
            totalJsBytes,
            totalJsGzipBytes,
            largestChunk: chunks[0] || null
          },
          chunks,
          assets
        }, null, 2)
      });
    }
  };
}

export default defineConfig({
  base: "/Backend-Interview-Hub/",
  plugins: [react(), performanceReportPlugin()]
});
