const posts = [
  {
    slug: "generative-ai-aws",
    title: "Generative AI on AWS: Foundation Models, Services, and Real Business Value",
    category: "AWS + GenAI",
    date: "March 2026",
    readTime: "8 min read",
    excerpt:
      "A practical breakdown of foundation models, Amazon Bedrock, SageMaker, Trainium, Inferentia, and where generative AI creates measurable business value.",
    content: `
      <h2>What is Generative AI?</h2>
      <p>Generative AI refers to systems that can create new content such as text, images, code, audio, and synthetic data. Unlike traditional AI that mainly classifies or predicts, generative AI produces new outputs by learning patterns from very large datasets.</p>
      <p>On AWS, this becomes especially powerful because model access, training workflows, infrastructure scaling, deployment, and monitoring can all be handled within one ecosystem.</p>

      <h2>Premium AI Architecture Diagram</h2>
      <p>This architecture shows a cleaner GenAI application flow on AWS: users interact with an application layer, requests move through orchestration and retrieval, and the application uses a foundation model supported by enterprise data and knowledge sources.</p>

      <div class="diagram-shell" style="padding:28px;background:linear-gradient(180deg,#eef4fb 0%,#f8fafc 100%);">
        <svg viewBox="0 0 1200 560" style="width:100%;min-width:1000px;height:auto;display:block;">
          
          <!-- Definitions -->
          <defs>
            <filter id="shadowSoft" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.08"/>
            </filter>

            <linearGradient id="boxFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#f8fafc"/>
            </linearGradient>

            <linearGradient id="awsFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fff7ed"/>
              <stop offset="100%" stop-color="#ffedd5"/>
            </linearGradient>

            <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="#94a3b8"></path>
            </marker>
          </defs>

          <!-- Main canvas -->
          <rect x="18" y="18" rx="30" ry="30" width="1164" height="524" fill="#eaf1f8" stroke="#d7e2ee"/>

          <!-- Title -->
          <text x="600" y="62" text-anchor="middle" font-size="24" font-weight="700" fill="#0f172a">
            Generative AI Application Architecture on AWS
          </text>
          <text x="600" y="90" text-anchor="middle" font-size="13" fill="#475569">
            Retrieval-augmented orchestration with Bedrock, enterprise data, and AWS-managed infrastructure
          </text>

          <!-- Top row -->
          <!-- Users -->
          <g filter="url(#shadowSoft)">
            <rect x="70" y="170" rx="24" ry="24" width="180" height="92" fill="url(#boxFill)" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="115" cy="202" r="16" fill="#eff6ff" stroke="#bfdbfe"/>
            <path d="M108 205 q7-16 14 0" fill="none" stroke="#2563eb" stroke-width="2"/>
            <circle cx="115" cy="197" r="4" fill="#2563eb"/>
            <text x="160" y="204" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Users</text>
            <text x="160" y="228" text-anchor="middle" font-size="12" fill="#475569">Web · Mobile · Internal Teams</text>
          </g>

          <!-- App Layer -->
          <g filter="url(#shadowSoft)">
            <rect x="310" y="170" rx="24" ry="24" width="210" height="92" fill="url(#boxFill)" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="336" y="188" rx="10" ry="10" width="32" height="24" fill="#ecfeff" stroke="#a5f3fc"/>
            <rect x="342" y="194" rx="4" ry="4" width="20" height="12" fill="#0891b2"/>
            <text x="420" y="204" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Application Layer</text>
            <text x="420" y="228" text-anchor="middle" font-size="12" fill="#475569">Frontend · API · Auth · Business Logic</text>
          </g>

          <!-- Orchestration -->
          <g filter="url(#shadowSoft)">
            <rect x="580" y="170" rx="24" ry="24" width="270" height="92" fill="url(#boxFill)" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="614" cy="200" r="15" fill="#fff7ed" stroke="#fdba74"/>
            <path d="M606 200 h16 M614 192 v16" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
            <text x="715" y="202" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Prompt / Orchestration</text>
            <text x="715" y="228" text-anchor="middle" font-size="12" fill="#475569">Prompt Routing · Guardrails · RAG · Tools</text>
          </g>

          <!-- FM -->
          <g filter="url(#shadowSoft)">
            <rect x="910" y="170" rx="24" ry="24" width="220" height="92" fill="url(#boxFill)" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="938" y="186" rx="10" ry="10" width="36" height="28" fill="#f5f3ff" stroke="#ddd6fe"/>
            <path d="M946 208 L954 194 L962 208 L970 194" stroke="#7c3aed" stroke-width="2" fill="none"/>
            <text x="1020" y="202" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Foundation Model</text>
            <text x="1020" y="228" text-anchor="middle" font-size="12" fill="#475569">Amazon Bedrock · FM APIs</text>
          </g>

          <!-- Arrows top row -->
          <line x1="250" y1="216" x2="310" y2="216" stroke="#94a3b8" stroke-width="4" marker-end="url(#arrowHead)"/>
          <line x1="520" y1="216" x2="580" y2="216" stroke="#94a3b8" stroke-width="4" marker-end="url(#arrowHead)"/>
          <line x1="850" y1="216" x2="910" y2="216" stroke="#94a3b8" stroke-width="4" marker-end="url(#arrowHead)"/>

          <!-- Lower row -->
          <!-- Operational data -->
          <g filter="url(#shadowSoft)">
            <rect x="260" y="350" rx="24" ry="24" width="260" height="100" fill="url(#boxFill)" stroke="#cbd5e1" stroke-width="2"/>
            <text x="390" y="386" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Operational Data</text>
            <text x="390" y="412" text-anchor="middle" font-size="12" fill="#475569">Amazon S3 · RDS · Logs · Files · App Data</text>

            <!-- AWS badge -->
            <rect x="350" y="424" rx="14" ry="14" width="80" height="24" fill="url(#awsFill)" stroke="#fdba74"/>
            <text x="390" y="440" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">AWS DATA</text>
          </g>

          <!-- Knowledge base -->
          <g filter="url(#shadowSoft)">
            <rect x="610" y="350" rx="24" ry="24" width="310" height="100" fill="url(#boxFill)" stroke="#cbd5e1" stroke-width="2"/>
            <text x="765" y="384" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Knowledge Base / Vector Store</text>
            <text x="765" y="410" text-anchor="middle" font-size="12" fill="#475569">Embeddings · Documents · Retrieval · Semantic Search</text>

            <!-- AWS badge -->
            <rect x="724" y="424" rx="14" ry="14" width="82" height="24" fill="url(#awsFill)" stroke="#fdba74"/>
            <text x="765" y="440" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">AWS RAG</text>
          </g>

          <!-- Supporting infra row -->
          <g filter="url(#shadowSoft)">
            <rect x="120" y="470" rx="18" ry="18" width="180" height="42" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="210" y="496" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Amazon API Gateway / Lambda</text>
          </g>

          <g filter="url(#shadowSoft)">
            <rect x="340" y="470" rx="18" ry="18" width="170" height="42" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="425" y="496" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Amazon SageMaker</text>
          </g>

          <g filter="url(#shadowSoft)">
            <rect x="550" y="470" rx="18" ry="18" width="170" height="42" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="635" y="496" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">AWS Trainium</text>
          </g>

          <g filter="url(#shadowSoft)">
            <rect x="760" y="470" rx="18" ry="18" width="170" height="42" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="845" y="496" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">AWS Inferentia</text>
          </g>

          <g filter="url(#shadowSoft)">
            <rect x="970" y="470" rx="18" ry="18" width="120" height="42" fill="#ffffff" stroke="#cbd5e1"/>
            <text x="1030" y="496" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">CloudWatch</text>
          </g>

          <!-- Down arrows -->
          <line x1="420" y1="262" x2="420" y2="350" stroke="#94a3b8" stroke-width="4" marker-end="url(#arrowHead)"/>
          <line x1="715" y1="262" x2="715" y2="350" stroke="#94a3b8" stroke-width="4" marker-end="url(#arrowHead)"/>

          <!-- Side connectors -->
          <path d="M520 400 C560 400, 575 400, 610 400" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 6"/>

        </svg>
      </div>

      <h2>AWS Services Used in This Pattern</h2>
      <p>These are common AWS components that fit naturally into a production-grade generative AI system.</p>

      <div class="aws-grid">
        <div class="card aws-item">
          <div class="aws-label">AWS</div>
          <h4>Amazon Bedrock</h4>
          <p>Managed access to foundation models, orchestration patterns, and rapid GenAI application delivery.</p>
        </div>
        <div class="card aws-item">
          <div class="aws-label">AWS</div>
          <h4>Amazon SageMaker</h4>
          <p>Training, experimentation, notebooks, pipelines, and custom machine learning workflows.</p>
        </div>
        <div class="card aws-item">
          <div class="aws-label">AWS</div>
          <h4>AWS Trainium</h4>
          <p>Purpose-built training acceleration for large deep learning workloads at lower cost.</p>
        </div>
        <div class="card aws-item">
          <div class="aws-label">AWS</div>
          <h4>AWS Inferentia</h4>
          <p>Optimised inference hardware for low-latency, high-throughput production deployment.</p>
        </div>
      </div>

      <h2>Code Examples</h2>
      <p>Short, readable code examples make the article more credible and far more useful to hiring managers.</p>

      <div class="code-block">
        <div class="code-head">
          <div>
            <div class="code-head-title">Python example: Invoke Amazon Bedrock</div>
            <div class="code-head-sub">python</div>
          </div>
          <div class="lights">
            <span class="light" style="background:#f87171"></span>
            <span class="light" style="background:#fbbf24"></span>
            <span class="light" style="background:#4ade80"></span>
          </div>
        </div>
        <pre><code><span class="kw">import</span> boto3

<span class="var">client</span> = boto3.client(<span class="str">"bedrock-runtime"</span>, region_name=<span class="str">"us-east-1"</span>)

<span class="var">prompt</span> = <span class="str">"Summarise the business value of generative AI on AWS."</span>

<span class="var">response</span> = client.invoke_model(
    modelId=<span class="str">"amazon.titan-text-express-v1"</span>,
    body=<span class="str">'{"inputText": "' + prompt + '"}'</span>
)

<span class="kw">print</span>(response)</code></pre>
      </div>

      <div class="code-block">
        <div class="code-head">
          <div>
            <div class="code-head-title">Python example: Train with SageMaker</div>
            <div class="code-head-sub">python</div>
          </div>
          <div class="lights">
            <span class="light" style="background:#f87171"></span>
            <span class="light" style="background:#fbbf24"></span>
            <span class="light" style="background:#4ade80"></span>
          </div>
        </div>
        <pre><code><span class="kw">import</span> sagemaker
<span class="kw">from</span> sagemaker.sklearn.estimator <span class="kw">import</span> SKLearn

<span class="var">session</span> = sagemaker.Session()
role = <span class="str">"arn:aws:iam::123456789012:role/SageMakerExecutionRole"</span>

<span class="var">estimator</span> = SKLearn(
    entry_point=<span class="str">"train.py"</span>,
    role=role,
    instance_type=<span class="str">"ml.m5.large"</span>,
    framework_version=<span class="str">"1.2-1"</span>,
    py_version=<span class="str">"py3"</span>,
)

estimator.fit({<span class="str">"train"</span>: <span class="str">"s3://my-bucket/training-data/"</span>})</code></pre>
      </div>
    `,
  },
  {
    slug: "bedrock-vs-sagemaker",
    title: "Amazon Bedrock vs Amazon SageMaker for GenAI",
    category: "Architecture",
    date: "March 2026",
    readTime: "5 min read",
    excerpt:
      "When to choose Bedrock for faster delivery and when SageMaker is the better fit for full ML control, custom training, and end-to-end pipelines.",
    content: `
      <h2>Bedrock vs SageMaker</h2>
      <p>Use <strong>Amazon Bedrock</strong> when you want fast access to foundation models through a managed API, simpler application integration, and lower infrastructure overhead.</p>
      <p>Use <strong>Amazon SageMaker</strong> when you need deeper control over experimentation, custom training, notebooks, pipelines, deployment workflows, and MLOps.</p>

      <h3>Choose Bedrock when...</h3>
      <ul>
        <li>You want quick GenAI prototyping</li>
        <li>You need managed access to foundation models</li>
        <li>You want less operational overhead</li>
        <li>You are building chat, summarisation, agent, or RAG apps</li>
      </ul>

      <h3>Choose SageMaker when...</h3>
      <ul>
        <li>You need custom ML training</li>
        <li>You want notebook-based experimentation</li>
        <li>You require training pipelines and deployment control</li>
        <li>You need a full end-to-end ML platform</li>
      </ul>

      <h2>Practical guidance</h2>
      <p>For many business teams, Bedrock is the fastest route to getting a generative AI application into production. SageMaker becomes the stronger choice when you need deeper customisation and tighter control over the full machine learning lifecycle.</p>
    `,
  },
  {
    slug: "genai-supply-chain",
    title: "Where Generative AI Fits in Supply Chain Analytics",
    category: "Supply Chain",
    date: "March 2026",
    readTime: "6 min read",
    excerpt:
      "From demand forecasting explanations to supplier summaries and inventory decision support, GenAI can augment supply chain analytics rather than replace it.",
    content: `
      <h2>Generative AI in Supply Chain</h2>
      <p>Generative AI in supply chain is most useful when paired with structured analytics. The value is not random text generation. It is decision support layered on top of operational data and business logic.</p>
      <ul>
        <li>Summarising forecast drivers in plain English</li>
        <li>Explaining stock-out risk to non-technical stakeholders</li>
        <li>Generating supplier performance summaries</li>
        <li>Turning dashboards into narrative insights</li>
        <li>Helping analysts query datasets using natural language</li>
      </ul>

      <h2>Where it helps most</h2>
      <p>Generative AI improves the usability of analytics, but it does not replace forecasting logic, inventory controls, or sound data engineering. It adds interpretation, accessibility, and communication power on top of operational systems.</p>

      <h2>Best approach</h2>
      <p>The strongest implementations combine data lakes, BI dashboards, forecasting models, and a generative layer that explains, summarises, and recommends next steps for planners or operations teams.</p>
    `,
  },
];

const listEl = document.getElementById("post-list");
const categoryEl = document.getElementById("article-category");
const titleEl = document.getElementById("article-title");
const metaEl = document.getElementById("article-meta");
const contentEl = document.getElementById("article-content");

function renderPostList(activeSlug) {
  listEl.innerHTML = posts
    .map(
      (post) => `
        <div class="card post-card ${post.slug === activeSlug ? "active" : ""}" data-slug="${post.slug}">
          <div class="post-category">${post.category}</div>
          <h4>${post.title}</h4>
          <div class="post-meta">${post.date} · ${post.readTime}</div>
          <div class="post-excerpt">${post.excerpt}</div>
        </div>
      `
    )
    .join("");

  listEl.querySelectorAll(".post-card").forEach((card) => {
    card.addEventListener("click", () => {
      const slug = card.getAttribute("data-slug");
      renderArticle(slug);
    });
  });
}

function renderArticle(slug) {
  const post = posts.find((p) => p.slug === slug) || posts[0];
  categoryEl.textContent = post.category;
  titleEl.textContent = post.title;
  metaEl.textContent = `${post.date} · ${post.readTime}`;
  contentEl.innerHTML = post.content;
  renderPostList(post.slug);
  window.history.replaceState(null, "", `#${post.slug}`);
}

const slugFromHash = window.location.hash.replace("#", "");
const initialSlug = posts.some((p) => p.slug === slugFromHash)
  ? slugFromHash
  : posts[0].slug;

renderArticle(initialSlug);
