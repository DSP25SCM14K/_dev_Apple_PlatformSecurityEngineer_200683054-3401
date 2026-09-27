const experience = [
  {company:'Sprouts AI', role:'Software Engineer (Platform Security)', location:'Chicago, IL', dates:'Mar 2025 — Present', kind:'CURRENT', bullets:[
    'Made the secure path the easiest path for 12 microservices, as measured by an 80% cut in per-service security boilerplate, by building internal Go and Kotlin/Spring libraries that package OAuth2/OIDC token validation, JWT scoping, secrets access, and audit logging.',
    'Reduced critical Kubernetes misconfigurations 75% across a multi-cloud (AWS EKS, GCP GKE) platform by enforcing least-privilege RBAC, pod security standards, admission control with OPA Gatekeeper, and default-deny network policy.',
    'Achieved 100% signed and verified production images and shrank the vulnerability management loop from 21 to 5 days by adding Sigstore/Cosign image provenance, SBOM generation, and Trivy scanning to CI/CD supply chain security gates.',
    'Eliminated 100% of long-lived static credentials protecting PII for 1K+ daily users by rolling out workload identity and mutual TLS through an Istio service mesh with PKI-backed automatic certificate rotation.',
    'Identified and mitigated 30+ risks before launch by leading threat modeling (STRIDE) of new platform capabilities, including LLM agent tool-calling and third-party API integrations, and delivering architectural mitigations.',
    'Accelerated security tooling delivery 35% by working AI-forward with coding agents and LLM-based tooling for policy and test generation, while owning correctness through code review, policy unit tests, and staged rollouts.'
  ]},
  {company:'Resilience Inc', role:'Software Engineer (Application Security & Backend)', location:'Chicago, IL', dates:'Aug 2023 — Mar 2025', bullets:[
    'Cut new-service security onboarding from 2 weeks to 2 days for a 10K+ user platform by designing secure-by-default Java/Spring Boot and Spring Security service templates with OAuth2/OIDC SSO, JWT, and SAML federation.',
    'Reduced over-privileged accounts 60% by building an Identity and Access Management framework with role and attribute-based authorization, just-in-time access, and automated access reviews.',
    'Lowered high-severity findings 65% with zero drop in deploy frequency by embedding SAST, dependency scanning, and secret detection into GitHub Actions as developer-friendly guardrails rather than hard blockers.',
    'Passed SOC 2 audit with zero critical findings via AWS KMS envelope encryption at rest, TLS 1.3 in transit, and signed exports.',
    'Reduced container image CVEs 85% and page load time 30% by migrating services to Kubernetes (EKS) with hardened distroless images, non-root runtime, and Helm-managed network policy.',
    'Raised security design review coverage from 40% to 95% across 4 teams by influencing engineering culture through threat modeling workshops, secure coding documentation, and advocacy.'
  ]},
  {company:'Tata Steel', role:'Software Engineer (Platform Security & Infrastructure)', location:'', dates:'Apr 2018 — Aug 2023', bullets:[
    'Delivered 99.99% uptime and 40% faster API responses by architecting cloud-native Java/Spring and Go microservices on Kubernetes across Azure and AWS with multi-cloud security controls and zero-trust service isolation.',
    'Eliminated 100% of certificate-expiry outages across 50+ services by automating PKI and mTLS certificate lifecycles on Vault.',
    'Cut access incidents 50% and provisioning time 70% for 20K+ employees by delivering IAM with OAuth2/OIDC and SAML SSO.',
    'Cut mean time to remediate critical CVEs 60% by establishing a vulnerability management program with automated container and dependency scanning plus SLA-driven patching.',
    'Prevented 200+ cloud misconfigurations (public buckets, open ports) pre-deployment via Terraform policy-as-code guardrails.',
    'Reduced repeat incidents 45% by leading incident response for 15+ production security events and running blameless post-incident reviews with published runbooks for a 12-engineer team.'
  ]}
];

const projects = [
  {name:'Keystone', subtitle:'Transactional control-plane metadata store', description:'A Go metadata store with mTLS authentication, RBAC-scoped gRPC APIs, signed audit logs and encryption at rest.', tags:['Go','gRPC','mTLS','RBAC'], category:'security', url:'https://github.com/devthedevil/keystone', glyph:'⌘'},
  {name:'EXPOS', subtitle:'Experimental operating system', description:'An operating systems project exploring kernel fundamentals and low-level system behavior.', tags:['OS','C','Systems'], category:'systems', url:'https://github.com/devthedevil/EXPOS', glyph:'◩'},
  {name:'Character Device Driver', subtitle:'Linux kernel interface', description:'A character device driver project connecting kernel-level device operations with user-space access.', tags:['Linux','Kernel','C'], category:'systems', url:'https://github.com/devthedevil/Character-Device-Driver', glyph:'▤'},
  {name:'CME MDP 3.0 Feed Handler', subtitle:'Multicast market data', description:'A C++ multicast feed handler for CME MDP 3.0 market data messages.', tags:['C++','Multicast','Low latency'], category:'systems', url:'https://github.com/devthedevil/CME-Multicast-Market-Data-Feed-Handler-C-', glyph:'⌁'},
  {name:'Strata', subtitle:'C++ storage server', description:'A storage server project focused on data path and systems-level engineering.', tags:['C++','Storage','Systems'], category:'systems', url:'https://github.com/devthedevil/strata', glyph:'▥'},
  {name:'Oxide-HV', subtitle:'Rust hypervisor', description:'A Rust hypervisor project exploring isolation and virtualization foundations.', tags:['Rust','Hypervisor','Isolation'], category:'systems', url:'https://github.com/devthedevil/oxide-hv', demo:'https://oxide-hv.vercel.app/', glyph:'⬡'},
  {name:'16-Bit RISC Processor', subtitle:'Hardware architecture', description:'A 16-bit processor design built as a hands-on hardware lab project.', tags:['RISC','Digital design','CPU'], category:'systems', url:'https://github.com/devthedevil/Hardware-lab', glyph:'▦'},
  {name:'MetalCompositor', subtitle:'GPU composition on Apple platforms', description:'A Metal-based compositor exploring graphics pipelines and visual rendering.', tags:['Swift','Metal','Graphics'], category:'systems', url:'https://github.com/devthedevil/metal-compositor', glyph:'◉'},
  {name:'Real-time Stock Market Analysis', subtitle:'Streaming data pipeline', description:'A pipeline for collecting and analyzing market data in real time.', tags:['Streaming','Data','Cloud'], category:'platform', url:'https://github.com/devthedevil/Realtime-Stock-Market-Analysis', glyph:'⌁'},
  {name:'TradeSentinel', subtitle:'Market intelligence dashboard', description:'A live market analysis experience that brings signals and context into a focused trading workflow.', tags:['Analytics','Web app','Signals'], category:'platform', url:'https://github.com/devthedevil/tradesentinel', demo:'https://tradesentinel.vercel.app/', glyph:'◎'},
  {name:'Voting App', subtitle:'Kubernetes deployment', description:'A containerized voting application deployed using Kubernetes orchestration.', tags:['Kubernetes','Containers','Cloud'], category:'platform', url:'https://github.com/devthedevil/Kubernetes-K8', glyph:'▱'},
  {name:'MCP', subtitle:'Model Context Protocol', description:'An exploration of tool integration and context exchange for AI-enabled workflows.', tags:['MCP','Tools','Integration'], category:'platform', url:'https://github.com/devthedevil/MCP', glyph:'⟷'},
  {name:'AgentFlow', subtitle:'Agent orchestration', description:'An agentic workflow project using the OpenAI agent SDK and tool orchestration.', tags:['Agents','Orchestration','LLM'], category:'platform', url:'https://github.com/devthedevil/openAI-Agent-SDK', glyph:'⌘'},
  {name:'AskMyStore', subtitle:'LangGraph store assistant', description:'A conversational shopping assistant that orchestrates retrieval and actions across a store experience.', tags:['LangGraph','RAG','Agents'], category:'platform', url:'https://github.com/devthedevil/AskMyStore', demo:'https://ask-my-store.vercel.app/', glyph:'✳'},
  {name:'LangChain Chat with Search', subtitle:'Grounded conversational search', description:'A chat interface that brings web search context into a LangChain-powered assistant.', tags:['LangChain','Search','LLM'], category:'platform', url:'https://github.com/devthedevil/LangChain-Chat-with-Search', glyph:'⌕'},
  {name:'AeroInvoice', subtitle:'Invoice ingestion & quote extraction', description:'An AI-powered API for ingesting invoices and extracting structured quote data.', tags:['AI','API','Document parsing'], category:'platform', url:'https://github.com/devthedevil/aero-invoice-intelligence', glyph:'▤'},
  {name:'AgentEval', subtitle:'Swift agent evaluations', description:'Evaluation tooling for measuring agent behavior and output quality in Swift.', tags:['Swift','Evaluation','Agents'], category:'platform', url:'https://github.com/devthedevil/swift-agent-evals', glyph:'◌'},
  {name:'adserve', subtitle:'Advertising delivery system', description:'A service project focused on delivering and managing advertising workflows.', tags:['Backend','Serving','APIs'], category:'platform', url:'https://github.com/devthedevil/adserve', glyph:'▣'},
  {name:'Pitch Perfect', subtitle:'iOS audio experience', description:'An iOS app project built with Swift for playful voice recording and audio effects.', tags:['iOS','Swift','Audio'], category:'platform', url:'https://github.com/devthedevil/Pitch_Perfect', glyph:'♫'},
  {name:'Strangers', subtitle:'A social discovery experience', description:'A web app for connecting people through a simple, focused discovery flow.', tags:['React','Web app','Community'], category:'platform', url:'https://github.com/devthedevil/Strangers', demo:'https://strangers-react.vercel.app/', glyph:'◉'},
  {name:'HireLoop', subtitle:'Hiring workflow platform', description:'A hiring workflow project designed to make candidate and recruiter interactions clearer.', tags:['Product','Workflow','Web'], category:'platform', url:'https://github.com/devthedevil/hireloop', glyph:'⟳'},
  {name:'Tic Tac Toe', subtitle:'Android game', description:'An Android implementation of the classic game with a clean mobile interaction model.', tags:['Android','Kotlin','Mobile'], category:'platform', url:'https://github.com/devthedevil/TicTacToe-Game', glyph:'⊞'}
];

const experienceRoot = document.querySelector('#experience-list');
experienceRoot.innerHTML = experience.map((item, index) => `
  <article class="experience-item ${index === 0 ? 'expanded' : ''}">
    <button class="experience-toggle" aria-expanded="${index === 0 ? 'true' : 'false'}">
      <span class="experience-marker"><i></i><b>0${index + 1}</b></span>
      <span class="experience-main"><span class="experience-company">${item.company} ${item.kind ? `<small>${item.kind}</small>` : ''}</span><span class="experience-role">${item.role}${item.location ? ` · ${item.location}` : ''}</span></span>
      <span class="experience-dates">${item.dates}</span><span class="toggle-plus" aria-hidden="true">+</span>
    </button>
    <div class="experience-details"><ul>${item.bullets.map(bullet => `<li>${bullet}</li>`).join('')}</ul></div>
  </article>`).join('');

const projectRoot = document.querySelector('#project-grid');
const renderProjects = (filter = 'all') => {
  const shown = projects.filter(project => filter === 'all' || project.category === filter);
  projectRoot.innerHTML = shown.map((project, index) => `
    <article class="project-card" style="--card-order:${index}">
      <div class="project-top"><span class="project-glyph">${project.glyph}</span><span class="project-kind">${project.category.toUpperCase()}</span><span class="project-arrow">↗</span></div>
      <div class="project-name">${project.name}</div><div class="project-subtitle">${project.subtitle}</div>
      <p>${project.description}</p><div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <div class="project-links"><a href="${project.url}" target="_blank" rel="noreferrer">SourceCode <span>↗</span></a>${project.demo ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Technical Demo <span>↗</span></a>` : ''}</div>
    </article>`).join('');
  document.querySelector('#project-count').textContent = shown.length.toString().padStart(2, '0');
};
renderProjects();

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  renderProjects(button.dataset.filter);
  document.querySelectorAll('.project-card').forEach(element => revealObserver.observe(element));
}));

document.querySelectorAll('.experience-toggle').forEach(button => button.addEventListener('click', () => {
  const item = button.closest('.experience-item');
  const opened = item.classList.toggle('expanded');
  button.setAttribute('aria-expanded', String(opened));
}));

const phrases = ['Identity that travels with every workload', 'Software you can verify before it runs', 'Guardrails that preserve developer flow', 'Signals that help systems recover stronger'];
let phraseIndex = 0;
const rotatingText = document.querySelector('#rotating-text');
setInterval(() => {
  rotatingText.classList.add('fade-out');
  setTimeout(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    rotatingText.textContent = phrases[phraseIndex];
    rotatingText.classList.remove('fade-out');
  }, 280);
}, 3400);

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); }
}), {threshold: 0.12});
document.querySelectorAll('.principle-card,.architecture-panel,.experience-item,.impact-inner,.project-card,.credentials-card').forEach(element => revealObserver.observe(element));

const hero = document.querySelector('.hero');
hero.addEventListener('pointermove', event => {
  const bounds = hero.getBoundingClientRect();
  hero.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
  hero.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
});
