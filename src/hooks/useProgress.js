import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem("backend-theme") !== "light");
  useEffect(() => localStorage.setItem("backend-theme", dark ? "dark" : "light"), [dark]);
  return [dark, setDark];
}
