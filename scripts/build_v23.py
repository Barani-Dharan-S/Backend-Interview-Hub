from pathlib import Path
import json, zipfile, shutil, re
root=Path('/mnt/data/v23')
# topics and tailored mechanisms
items=[
('Distributed Systems','Request path and critical path','How to decompose a full-stack request into synchronous and asynchronous hops','gateway -> service -> DB; async event after commit'),
('Distributed Systems','Latency budget','How end-to-end latency is composed across dependent services','T_total ~= gateway + service + DB + network + queue'),
('Distributed Systems','Tail latency','Why p99 can degrade while averages look healthy','a slow dependency amplifies tail behavior'),
('Distributed Systems','Partial failure','Why distributed calls fail independently rather than atomically','service A may succeed while B times out'),
('Distributed Systems','Timeout budgets','How deadlines should propagate through a call chain','request deadline -> child timeout < remaining budget'),
('Distributed Systems','Retry amplification','How retries multiply load during an incident','R = initial * product(retry fanout)'),
('Distributed Systems','Circuit breaker state','How closed/open/half-open states protect a dependency','failure threshold -> open -> probe -> close'),
('Distributed Systems','Bulkheads','How isolating resources limits blast radius','separate pools/queues for critical workloads'),
('Distributed Systems','Backpressure','How producers slow when consumers cannot keep up','bounded queue + admission control'),
('Distributed Systems','Idempotency','How repeated requests become safe','idempotency key -> durable result'),
('Distributed Systems','At-least-once processing','Why duplicates are normal in reliable event systems','ack after processing can still replay on crash'),
('Distributed Systems','Exactly-once claims','What exactly-once can and cannot guarantee','processing semantics are scoped, side effects still matter'),
('Distributed Systems','Consistency models','How strong, eventual and causal consistency differ','read/write visibility across replicas'),
('Distributed Systems','CAP reasoning','How partition tolerance changes consistency/availability choices','during partition choose which guarantee to weaken'),
('Distributed Systems','Quorum reads and writes','How overlapping quorums improve replica consistency','R + W > N'),
('Distributed Systems','Leader election','Why systems need one coordinator for serialized decisions','lease/term prevents split brain'),
('Distributed Systems','Split brain','How two leaders can corrupt distributed state','fencing token or quorum prevents stale leader writes'),
('Distributed Systems','Clock and ordering','Why wall clocks cannot safely order distributed events','logical clocks and IDs provide ordering context'),
('Distributed Systems','Distributed transactions','Why 2PC trades availability and operational simplicity','prepare/commit coordinator state'),
('Distributed Systems','Saga pattern','How long workflows coordinate without one global transaction','local transactions + compensating actions'),
('Distributed Systems','Outbox pattern','How database state and emitted events stay aligned','write row + outbox in one local transaction'),
('Distributed Systems','Inbox/deduplication','How consumers make duplicate delivery harmless','event ID stored with business processing'),
('Distributed Systems','Exactly-once business effect','How to make side effects idempotent','unique key/state transition guards'),
('Distributed Systems','Cache-aside','How applications populate and invalidate caches','read cache -> miss -> DB -> cache'),
('Distributed Systems','Cache stampede','Why simultaneous expiry can overload a dependency','single-flight/jitter/refresh-ahead'),
('Distributed Systems','Hot keys','Why one cache key can become a bottleneck','replication/sharding/request coalescing'),
('Distributed Systems','Rate limiting','How token bucket controls admission','tokens refill at fixed rate'),
('Distributed Systems','Load shedding','Why rejecting work can preserve availability','drop low-priority requests before saturation'),
('Distributed Systems','Queue semantics','How queue visibility and acknowledgement affect recovery','visibility timeout / ack / redelivery'),
('Distributed Systems','Message ordering','Why partitions constrain ordering guarantees','ordering is usually per partition/key'),
('Production Reasoning','SLOs and error budgets','How reliability targets become release decisions','budget burn informs pause/rollback'),
('Production Reasoning','Golden signals','How latency, traffic, errors and saturation narrow diagnosis','symptom -> signal -> hypothesis'),
('Production Reasoning','RED vs USE','When request-centric and resource-centric metrics complement each other','Rate Errors Duration vs Utilization Saturation Errors'),
('Production Reasoning','Correlation IDs','How one request is traced across logs','propagate ID at every boundary'),
('Production Reasoning','Distributed tracing','How spans expose critical-path latency','parent/child spans show dependency timing'),
('Production Reasoning','Root cause vs trigger','Why the first visible failure is not always the cause','trigger caused by latent capacity/config defect'),
('Production Reasoning','Blast radius','How to reason about which users and paths are affected','dependency graph + traffic segmentation'),
('Production Reasoning','Rollback safety','Why rollback can fail when schema changed','application and schema compatibility must overlap'),
('Production Reasoning','Graceful degradation','How systems preserve core functions under dependency failure','fallback/read-only/async path'),
('Production Reasoning','Capacity planning','How traffic, concurrency and service time interact','Little’s Law: L = λW'),
('Production Reasoning','Connection pools','Why increasing a pool can worsen DB saturation','concurrency shifts pressure downstream'),
('Production Reasoning','Queue depth as signal','How backlog reveals consumer capacity mismatch','arrival rate > service rate grows queue'),
('Production Reasoning','Incident timeline','How to build an evidence-backed causal timeline','deploy -> metric change -> symptom -> mitigation'),
('Production Reasoning','Change correlation','How deployment correlation becomes a hypothesis not proof','compare versions and independent evidence'),
('Production Reasoning','Canary analysis','How to decide whether a small release is safe','compare error/latency/business signals'),
('Production Reasoning','Feature flags','How flags separate deployment from release','code deployed, behavior controlled at runtime'),
('Production Reasoning','Dependency mapping','How a service map reveals shared failure domains','critical dependency graph'),
('Production Reasoning','Runbook design','How runbooks turn symptoms into safe actions','prechecks -> commands -> stop conditions'),
('Production Reasoning','Recovery verification','Why “green” metrics do not prove recovery','validate user journey and invariants'),
('Production Reasoning','Post-incident prevention','How fixes target causes rather than symptoms','corrective + preventive controls'),
('Production Reasoning','Failure mode analysis','How to enumerate failure modes before production','failure -> impact -> detection -> mitigation'),
('Production Reasoning','Dependency timeouts','Why every network dependency needs an explicit deadline','avoid indefinite thread/resource occupancy'),
('Production Reasoning','Retryable vs non-retryable errors','How to classify failures before retrying','retry only transient and safe operations'),
('Production Reasoning','Concurrency limits','How bounded concurrency protects downstream systems','semaphore limits in-flight work'),
('Production Reasoning','Load test interpretation','Why throughput plateaus and latency explodes','find saturation point, not maximum requests'),
('Production Reasoning','Memory leak diagnosis','How retained objects create progressive pressure','heap trend + allocation profile'),
('Production Reasoning','CPU saturation diagnosis','How to distinguish app CPU from downstream waiting','thread dumps + CPU profiles + metrics'),
('Production Reasoning','Database saturation','How DB CPU/IO/locks affect application latency','query plan + wait events + pool metrics'),
('Production Reasoning','Lock contention','How concurrent writers serialize unexpectedly','inspect blocking sessions and transaction duration'),
('Production Reasoning','Deployment health','How readiness differs from process liveness','ready means traffic-safe; live means process should continue'),
('Production Reasoning','Zero-downtime deployment','How old and new versions coexist','backward-compatible contract during rollout'),
('Production Reasoning','Schema evolution','How expand-and-contract avoids incompatible deployments','add -> dual read/write if needed -> migrate -> remove'),
('Production Reasoning','Disaster recovery','How RTO/RPO shape architecture','recovery time and tolerated data loss'),
('Production Reasoning','Backup verification','Why a backup without restore testing is weak evidence','restore rehearsal validates recoverability'),
('Production Reasoning','Security failure reasoning','How authn/authz, secrets and network controls fail differently','identify trust boundary first'),
('Production Reasoning','Supply-chain failure','How compromised dependencies/images reach production','pin, scan, provenance, least privilege'),
('Production Reasoning','Cost vs reliability','How architecture choices trade spend for resilience','identify business-critical reliability requirement'),
('Production Reasoning','Architecture decision records','How to preserve why a design was chosen','context -> decision -> trade-offs'),
('Production Reasoning','Production reasoning loop','How to reason from symptom to safe action','observe -> hypothesize -> test -> mitigate -> verify'),
]
lessons=[]
for i,(topic,title,how,code) in enumerate(items,1):
    lessons.append({
      'id':f'ds-{i:03d}','level':'L3','topic':topic,'title':title,
      'what':f'{title} is a mechanism used to make a distributed or production system predictable under real constraints. The key is to understand the invariant it protects and the failure it is designed to contain.',
      'how':how+'. Start with the system boundary, identify the resource or invariant at risk, then trace the state transitions that occur when load or failure changes.',
      'code':code,
      'realWorld':f'In a production full-stack system, {title.lower()} should be considered in terms of user impact, dependency behavior, observability and recovery—not as an isolated configuration setting.',
      'delivery':f'I would explain {title.lower()} by first stating the problem, then the internal mechanism, the main trade-off, and finally how I would observe and troubleshoot it in production.',
      'followups':[f'What is the main failure mode of {title.lower()}?',f'How would you troubleshoot {title.lower()} in production?'],
      'followupAnswers':[f'The main failure mode is violating the invariant the mechanism is meant to protect—for example allowing unbounded work, duplicate side effects, inconsistent state or dependency saturation. I would state that invariant explicitly before choosing the implementation.',f'I would start with evidence at the affected boundary: request latency, error rate, saturation, traces, queue depth, database waits or deployment metadata as appropriate. Then I would test the highest-probability hypothesis with the smallest safe change and verify recovery.'],
      'traps':['Treating the mechanism as a magic configuration instead of understanding its invariant.','Fixing the symptom while increasing pressure on another dependency.']
    })
# labs
lab_specs=[
('Trace a slow checkout','p99 checkout latency increased after a new downstream call.','Build a critical-path timeline from gateway to DB and identify the latency budget consumer.'),
('Survive a payment retry storm','A dependency times out and callers retry aggressively.','Quantify retry amplification and design deadlines, backoff, jitter and a circuit breaker.'),
('Make an event consumer idempotent','The same order event is delivered twice.','Use a durable event ID/inbox or business uniqueness guard so the second delivery is harmless.'),
('Design an order Saga','Order, payment and inventory are separate services.','Define local transactions, events and compensating actions without a global database transaction.'),
('Implement an outbox flow','Order creation sometimes succeeds but its Kafka event is missing.','Place the event in an outbox in the same DB transaction and publish asynchronously.'),
('Diagnose Kafka backlog','Consumer lag grows while producer traffic is stable.','Compare arrival and processing rates, partition assignment and consumer saturation.'),
('Diagnose DB pool exhaustion','Requests wait for connections and p99 spikes.','Correlate pool pending/active metrics with transaction duration, query latency and DB capacity.'),
('Debug a Kubernetes 502','Ingress returns 502 while Pods appear Running.','Trace ingress -> Service -> endpoints -> Pod readiness and application listener.'),
('Perform a safe schema rollout','A new release requires a column that old Pods do not know about.','Use expand-and-contract so old and new versions can coexist during rollout.'),
('Design graceful degradation','Recommendation service is down but checkout must remain available.','Separate critical from optional paths and define safe fallback behavior.'),
('Analyze a canary','Canary has similar average latency but worse p99 and conversion.','Use tail and business metrics to decide pause, promote or rollback.'),
('Build an incident timeline','Errors started minutes after a deployment, but DB saturation appeared later.','Correlate independent evidence and distinguish trigger from root cause.'),
('Reason about capacity','Traffic doubled and latency increased nonlinearly.','Apply Little’s Law and identify the first saturated resource.'),
('Design rate limiting','A public endpoint is exhausting application threads.','Choose token bucket limits, identity dimensions and a safe rejection policy.'),
('Recover from partial failure','Service A commits before Service B times out.','Define retry/idempotency/compensation behavior for the workflow.'),
('Validate disaster recovery','A backup job reports success but restore has never been tested.','Perform a restore rehearsal and measure actual RTO/RPO.'),
('Trace cross-stack authentication','React receives 401 after a backend deployment.','Follow token issuance, browser storage/headers, gateway and Spring Security validation.'),
('Prove immutable deployment','Production behavior differs from staging despite the same commit.','Compare artifact/image digests and deployment manifests rather than source branches.'),
('Write a production runbook','An on-call engineer sees elevated latency with no obvious root cause.','Create evidence-first checks, stop conditions, mitigations and verification steps.'),
('Explain the system under a new constraint','Traffic becomes 10x while consistency requirements tighten.','Re-derive the architecture from constraints and explain the changed trade-offs.')]
labs=[]
for i,(title,situation,goal) in enumerate(lab_specs,1):
    labs.append({'id':f'dslab-{i:03d}','level':'L3','topic':'Distributed Systems & Production','title':title,'situation':situation,'goal':goal,
      'steps':['State the symptom and invariant at risk.','Map the request/data/dependency path.','Collect direct evidence before changing configuration.','Apply the smallest safe mitigation.','Verify the original symptom and the protected invariant.'],
      'commands':['curl -i <endpoint>','kubectl get pods,svc,endpoints','kubectl describe <resource>','check application metrics/logs/traces'],
      'delivery':'I would first establish the failing boundary with evidence, then explain the mechanism causing the symptom, apply the smallest safe correction and verify that the original user-facing behavior has recovered.',
      'followups':['What evidence would prove your hypothesis?','What would you change if the first fix did not work?'],
      'followupAnswers':['I would choose a direct signal from the owning boundary: trace timing, SQL plan/waits, broker lag, Kubernetes events, pool metrics or IAM decisions. The evidence must distinguish competing hypotheses.','I would keep the hypothesis tree explicit, test the next highest-probability cause and avoid stacking unrelated changes. Each change should have an expected measurable effect.'],
      'traps':['Jumping to the most familiar technology as the root cause.','Declaring recovery without validating the original user journey and system invariant.']})
Path(root/'src/data/distributedSystemsLessons.js').write_text('export const distributedSystemsLessons = '+json.dumps(lessons,indent=2)+';\n')
Path(root/'src/data/distributedSystemsLabs.js').write_text('export const distributedSystemsLabs = '+json.dumps(labs,indent=2)+';\n')
# page
page='''import React,{useMemo,useState} from "react";\nimport {distributedSystemsLessons} from "../data/distributedSystemsLessons";\nimport {distributedSystemsLabs} from "../data/distributedSystemsLabs";\nfunction Card({item,open,onToggle,lab}){const f=item.followups||[];return <article className="lesson-card scenario-card"><button className="lesson-head" onClick={onToggle}><span className="q-number">{item.id.split("-").pop()}</span><span className="lesson-title"><strong>{item.title}</strong><span className="meta"><i className="level">{item.level}</i><i>{lab?"Production Lab":item.topic}</i></span></span><span className="chevron">{open?"⌃":"⌄"}</span></button>{open&&<div className="lesson-body scenario-body"><div className="explain-section"><div className="section-kicker">WHAT IS THE PROBLEM?</div><p>{lab?item.situation:item.what}</p></div><div className="explain-section"><div className="section-kicker">SYSTEM MECHANISM</div><p>{lab?item.goal:item.how}</p></div><div className="explain-section"><div className="section-kicker">TRACE / IMPLEMENTATION</div>{lab?<><ol className="mistake-list" style={{marginBottom:10}}>{item.steps.map((s,i)=><li key={i}>{s}</li>)}</ol><pre>{item.commands.join("\\n")}</pre></>:<pre>{item.code}</pre>}</div>{!lab&&<div className="explain-section"><div className="section-kicker">PRODUCTION PERSPECTIVE</div><p>{item.realWorld}</p></div>}<div className="explain-section interview-script"><span className="script-label">INTERVIEW DELIVERY</span><p>{item.delivery}</p></div><div className="explain-section"><div className="section-kicker">EXPECTED FOLLOW-UPS</div><div className="followup-list">{f.map((q,i)=><details className="followup-item" key={i}><summary>{q}</summary><div className="followup-answer"><strong>ANSWER</strong><p>{item.followupAnswers?.[i]}</p></div></details>)}</div></div><div className="explain-section mistake-section"><div className="section-kicker">COMMON TRAPS</div><ul className="mistake-list">{item.traps.map((t,i)=><li key={i}>{t}</li>)}</ul></div></div>}</article>}\nexport default function DistributedSystemsLearning(){const [tab,setTab]=useState("lessons"),[level,setLevel]=useState("all"),[query,setQuery]=useState(""),[open,setOpen]=useState({});const source=tab==="lessons"?distributedSystemsLessons:distributedSystemsLabs;const filtered=useMemo(()=>source.filter(x=>(level==="all"||x.level===level)&&JSON.stringify(x).toLowerCase().includes(query.toLowerCase())),[source,level,query]);const expandAll=()=>setOpen(Object.fromEntries(filtered.map(x=>[x.id,true])));return <section className="learning-page"><div className="learning-hero scenario-hero"><span className="pill">V23 · DISTRIBUTED SYSTEMS & PRODUCTION REASONING</span><h2>Reason about the system.<br/><em>Predict the failure.</em></h2><p>Connect React, Spring Boot, databases, Kafka, Kubernetes, cloud and delivery into one mental model. Learn to reason from symptoms to mechanisms, trade-offs and safe recovery.</p><div className="learning-flow"><span>Observe</span><b>→</b><span>Model</span><b>→</b><span>Trace</span><b>→</b><span>Hypothesize</span><b>→</b><span>Mitigate</span><b>→</b><span>Verify</span></div></div><div className="learning-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search retries, Saga, outbox, Kafka, SLO, capacity, caching, Kubernetes..."/></div><div className="filters">{["all","L3"].map(x=><button key={x} className={level===x?"filter active":"filter"} onClick={()=>setLevel(x)}>{x==="all"?"All levels":x}</button>)}</div></div><div className="subtopic-row"><button className={tab==="lessons"?"subtopic active":"subtopic"} onClick={()=>{setTab("lessons");setOpen({})}}>🌐 Distributed Reasoning <small>{distributedSystemsLessons.length}</small></button><button className={tab==="labs"?"subtopic active":"subtopic"} onClick={()=>{setTab("labs");setOpen({})}}>🚨 Production Scenarios <small>{distributedSystemsLabs.length}</small></button></div><div className="result-row"><span><b>{tab==="lessons"?"Distributed Systems":"Production Scenarios"}</b> · {filtered.length} items</span><button onClick={expandAll}>Expand all</button><button onClick={()=>setOpen({})}>Collapse all</button></div><section className="lesson-list">{filtered.map(x=><Card key={x.id} item={x} lab={tab==="labs"} open={!!open[x.id]} onToggle={()=>setOpen(p=>({...p,[x.id]:!p[x.id]}))}/>)}</section></section>}\n'''
Path(root/'src/pages/DistributedSystemsLearning.jsx').write_text(page)
# patch App
p=root/'src/App.jsx'; s=p.read_text(); s=s.replace('import InternalWorkingsLearning from "./pages/InternalWorkingsLearning";','import InternalWorkingsLearning from "./pages/InternalWorkingsLearning";\nimport DistributedSystemsLearning from "./pages/DistributedSystemsLearning";'); s=s.replace(': view === "internal" ? <InternalWorkingsLearning /> : <Questions', ': view === "internal" ? <InternalWorkingsLearning /> : view === "distributed" ? <DistributedSystemsLearning /> : <Questions'); p.write_text(s)
# patch sidebar imports + nav
p=root/'src/components/Sidebar.jsx'; s=p.read_text(); s=s.replace('import { internalWorkingsLabs } from "../data/internalWorkingsLabs";','import { internalWorkingsLabs } from "../data/internalWorkingsLabs";\nimport { distributedSystemsLessons } from "../data/distributedSystemsLessons";\nimport { distributedSystemsLabs } from "../data/distributedSystemsLabs";'); marker='''          <div className="side-label section-label advanced-label">INTERNAL WORKINGS</div>'''; nav='''          <div className="side-label section-label advanced-label">DISTRIBUTED SYSTEMS</div>\n          <nav className="topic-nav">\n            <button className={view === "distributed" ? "nav-item active" : "nav-item"} onClick={() => go("distributed")}>\n              <span>🌐</span><label>Distributed Systems</label><small>{distributedSystemsLessons.length + distributedSystemsLabs.length}</small>\n            </button>\n          </nav>\n\n'''; s=s.replace(marker,nav+marker); p.write_text(s)
# header
p=root/'src/components/Header.jsx'; s=p.read_text(); s=s.replace('import { internalWorkingsLabs } from "../data/internalWorkingsLabs";','import { internalWorkingsLabs } from "../data/internalWorkingsLabs";\nimport { distributedSystemsLessons } from "../data/distributedSystemsLessons";\nimport { distributedSystemsLabs } from "../data/distributedSystemsLabs";'); s=s.replace('const internal = view === "internal";','const internal = view === "internal";\n  const distributed = view === "distributed";'); s=s.replace(': internal ? "Internal Workings & System Behavior" : "Backend Interview Preparation";',': internal ? "Internal Workings & System Behavior" : distributed ? "Distributed Systems & Production Reasoning" : "Backend Interview Preparation";'); s=s.replace(': internal\n                              ? "JVM · Spring · Hibernate · PostgreSQL · Kafka · React · Docker · Kubernetes · CI/CD · AWS · Runtime behavior"',': internal\n                              ? "JVM · Spring · Hibernate · PostgreSQL · Kafka · React · Docker · Kubernetes · CI/CD · AWS · Runtime behavior"\n                            : distributed\n                              ? "Distributed systems · Resilience · Consistency · Kafka · Caching · SLOs · Capacity · Incident reasoning"'); s=s.replace(': internal ? `${internalWorkingsLessons.length + internalWorkingsLabs.length} INTERNAL ITEMS` : `${questions.length} QUESTIONS`',': internal ? `${internalWorkingsLessons.length + internalWorkingsLabs.length} INTERNAL ITEMS` : distributed ? `${distributedSystemsLessons.length + distributedSystemsLabs.length} DISTRIBUTED ITEMS` : `${questions.length} QUESTIONS`'); s=s.replace(': internal ? "runtime@system-behavior:~" : "backend@interview:~"',': internal ? "runtime@system-behavior:~" : distributed ? "architecture@distributed-systems:~" : "backend@interview:~"'); p.write_text(s)
# version + notes
pkg=json.loads((root/'package.json').read_text()); pkg['version']='23.0.0'; (root/'package.json').write_text(json.dumps(pkg,indent=2)+'\n')
(root/'V23_0_NOTES.md').write_text('''# V23.0 — Distributed Systems & Production Reasoning\n\n## Content\n- 70 distributed systems and production reasoning lessons\n- 20 production reasoning labs\n- 90 new learning items\n- L3 depth only\n- No scores, quizzes, evaluations or gamification\n\n## Learning model\nObserve → Model → Trace → Hypothesize → Mitigate → Verify\n\n## Goal\nConnect the existing React + Spring Boot + PostgreSQL + Kafka + Docker + Kubernetes + CI/CD + Cloud knowledge into one system mental model. Learn to reason from symptoms to mechanisms, trade-offs, safe mitigations and verified recovery.\n''')
# stats
stats={'version':'23.0.0','lessons':len(lessons),'labs':len(labs),'total':len(lessons)+len(labs)}; (root/'V23_STATS.json').write_text(json.dumps(stats,indent=2))
# zip excluding temp scripts maybe include source only and docs; preserve package-lock absent
out=Path('/mnt/data/v23/backend-interview-hub-v23.0-distributed-systems.zip')
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED) as z:
  for f in root.rglob('*'):
    if f.is_file() and f != out and '__pycache__' not in f.parts:
      z.write(f,f.relative_to(root))
print(stats, out, out.stat().st_size)
