const architectureDiagram = `
  <div class="diagram-shell">
    <svg viewBox="0 0 1560 560" style="width:100%;min-width:1280px;height:auto;">
      <defs>
        <filter id="shadowSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.08"></feDropShadow>
        </filter>

        <linearGradient id="boxFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"></stop>
          <stop offset="100%" stop-color="#fbfdff"></stop>
        </linearGradient>

        <linearGradient id="awsFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff7ed"></stop>
          <stop offset="100%" stop-color="#ffedd5"></stop>
        </linearGradient>

        <marker id="arrowHead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#8ea0b8"></path>
        </marker>
      </defs>

      <rect x="14" y="14" rx="28" ry="28" width="1542" height="532" fill="#edf3f8" stroke="#d7e2ee"></rect>

      <text x="780" y="52" text-anchor="middle" font-size="24" font-weight="700" fill="#0f172a">
        Generative AI Application Architecture on AWS
      </text>
      <text x="780" y="80" text-anchor="middle" font-size="14" fill="#52637a">
        Retrieval-augmented orchestration with Bedrock, enterprise data, and AWS-managed infrastructure
      </text>

      <!-- Top row: all boxes width 320 -->
      <!-- Users -->
      <g filter="url(#shadowSoft)">
        <rect x="70" y="140" rx="22" ry="22" width="320" height="96" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"></rect>
        <circle cx="115" cy="178" r="18" fill="#eef6ff" stroke="#bfd8ff"></circle>
        <circle cx="115" cy="172" r="4" fill="#2563eb"></circle>
        <path d="M107 187 q8-14 16 0" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round"></path>
        <text x="150" y="174" font-size="18" font-weight="700" fill="#0f172a">Users</text>
        <text x="150" y="202" font-size="12" fill="#52637a">Web · Mobile · Internal Teams</text>
      </g>

      <!-- Application Layer -->
      <g filter="url(#shadowSoft)">
        <rect x="470" y="140" rx="22" ry="22" width="320" height="96" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"></rect>
        <rect x="505" y="160" rx="10" ry="10" width="36" height="28" fill="#ecfeff" stroke="#a5f3fc"></rect>
        <rect x="515" y="167" rx="4" ry="4" width="16" height="14" fill="#0891b2"></rect>
        <text x="555" y="174" font-size="18" font-weight="700" fill="#0f172a">Application Layer</text>
        <text x="555" y="202" font-size="12" fill="#52637a">Frontend · API · Auth · Business Logic</text>
      </g>

      <!-- Prompt / Orchestration -->
      <g filter="url(#shadowSoft)">
        <rect x="870" y="140" rx="22" ry="22" width="320" height="96" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"></rect>
        <circle cx="915" cy="176" r="17" fill="#fff7ed" stroke="#fdba74"></circle>
        <path d="M907 176 h16 M915 168 v16" stroke="#ea580c" stroke-width="2" stroke-linecap="round"></path>
        <text x="941" y="174" font-size="18" font-weight="700" fill="#0f172a">Prompt / Orchestration</text>
        <text x="941" y="202" font-size="12" fill="#52637a">Prompt Routing · Guardrails · RAG · Tools</text>
      </g>

      <!-- Foundation Model -->
      <g filter="url(#shadowSoft)">
        <rect x="1270" y="140" rx="22" ry="22" width="320" height="96" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"></rect>
        <rect x="1305" y="159" rx="10" ry="10" width="38" height="30" fill="#f5f3ff" stroke="#ddd6fe"></rect>
        <path d="M1313 182 L1320 166 L1327 182 L1334 166" stroke="#7c3aed" stroke-width="2" fill="none"></path>
        <text x="1355" y="174" font-size="18" font-weight="700" fill="#0f172a">Foundation Model</text>
        <text x="1355" y="202" font-size="12" fill="#52637a">Amazon Bedrock · FM APIs</text>
      </g>

      <!-- Even top arrows -->
      <line x1="390" y1="188" x2="470" y2="188" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"></line>
      <line x1="790" y1="188" x2="870" y2="188" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"></line>
      <line x1="1190" y1="188" x2="1270" y2="188" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"></line>

      <!-- Lower row -->
      <!-- Operational Data -->
      <g filter="url(#shadowSoft)">
        <rect x="470" y="310" rx="22" ry="22" width="320" height="110" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"></rect>
        <text x="630" y="350" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Operational Data</text>
        <text x="630" y="378" text-anchor="middle" font-size="12" fill="#52637a">Amazon S3 · RDS · Logs · Files · App Data</text>
        <rect x="588" y="388" rx="14" ry="14" width="84" height="26" fill="url(#awsFill)" stroke="#f2a14a"></rect>
        <text x="630" y="405" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">AWS DATA</text>
      </g>

      <!-- Knowledge Base / Vector Store -->
      <g filter="url(#shadowSoft)">
        <rect x="870" y="310" rx="22" ry="22" width="320" height="110" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"></rect>
        <text x="1030" y="348" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Knowledge Base / Vector Store</text>
        <text x="1030" y="376" text-anchor="middle" font-size="12" fill="#52637a">Embeddings · Documents · Retrieval · Semantic Search</text>
        <rect x="986" y="388" rx="14" ry="14" width="88" height="26" fill="url(#awsFill)" stroke="#f2a14a"></rect>
        <text x="1030" y="405" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">AWS RAG</text>
      </g>

      <!-- Even vertical arrows -->
      <line x1="630" y1="236" x2="630" y2="310" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"></line>
      <line x1="1030" y1="236" x2="1030" y2="310" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"></line>

      <!-- Lower connector -->
      <path d="M790 365 C820 365, 840 365, 870 365" fill="none" stroke="#c6d3e3" stroke-width="2" stroke-dasharray="6 6"></path>

      <!-- Supporting services -->
      <g filter="url(#shadowSoft)">
        <rect x="180" y="450" rx="22" ry="22" width="1200" height="72" fill="#f5f9fc" stroke="#d5e1ec"></rect>
      </g>
      <text x="780" y="472" text-anchor="middle" font-size="12" font-weight="700" letter-spacing="1.5" fill="#64748b">
        SUPPORTING AWS SERVICES
      </text>

      <g filter="url(#shadowSoft)">
        <rect x="210" y="485" rx="16" ry="16" width="200" height="30" fill="#ffffff" stroke="#c7d4e2"></rect>
        <text x="310" y="505" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">API Gateway / Lambda</text>
      </g>

      <g filter="url(#shadowSoft)">
        <rect x="450" y="485" rx="16" ry="16" width="190" height="30" fill="#ffffff" stroke="#c7d4e2"></rect>
        <text x="545" y="505" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Amazon SageMaker</text>
      </g>

      <g filter="url(#shadowSoft)">
        <rect x="680" y="485" rx="16" ry="16" width="180" height="30" fill="#ffffff" stroke="#c7d4e2"></rect>
        <text x="770" y="505" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">AWS Trainium</text>
      </g>

      <g filter="url(#shadowSoft)">
        <rect x="900" y="485" rx="16" ry="16" width="180" height="30" fill="#ffffff" stroke="#c7d4e2"></rect>
        <text x="990" y="505" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">AWS Inferentia</text>
      </g>

      <g filter="url(#shadowSoft)">
        <rect x="1120" y="485" rx="16" ry="16" width="160" height="30" fill="#ffffff" stroke="#c7d4e2"></rect>
        <text x="1200" y="505" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">CloudWatch</text>
      </g>
    </svg>
  </div>
`;

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

      <h2>Architecture Diagram</h2>
      <p>This diagram shows a practical generative AI application flow on AWS, combining orchestration, retrieval, foundation model access, operational data, and supporting services.</p>

      ${architectureDiagram}

      <h2>AWS Services Used in This Pattern</h2>
      <p>These are common AWS components that fit naturally into a production-grade generative AI system.</p>

      <div class="aws-grid">
        <div class="aws-item">
          <div class="aws-label">AWS</div>
          <h4>Amazon Bedrock</h4>
          <p>Managed access to foundation models and rapid GenAI application delivery.</p>
        </div>
        <div class="aws-item">
          <div class="aws-label">AWS</div>
          <h4>Amazon SageMaker</h4>
          <p>Training, experimentation, notebooks, and custom machine learning workflows.</p>
        </div>
        <div class="aws-item">
          <div class="aws-label">AWS</div>
          <h4>AWS Trainium</h4>
          <p>Purpose-built training acceleration for large deep learning workloads.</p>
        </div>
        <div class="aws-item">
          <div class="aws-label">AWS</div>
          <h4>AWS Inferentia</h4>
          <p>Optimised inference hardware for production deployment.</p>
        </div>
      </div>

      <h2>Code Examples</h2>
      <p>Short, readable code examples make the article more credible and more useful to hiring managers.</p>

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
      "When to choose Bedrock for faster delivery and when SageMaker is better for full ML control and custom training.",
    content: `
      <h2>Bedrock vs SageMaker</h2>
      <p>Use <strong>Amazon Bedrock</strong> when you want fast access to foundation models through a managed API, simpler integration, and lower infrastructure overhead.</p>
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
      "From forecast explanations to supplier summaries and inventory decision support, GenAI can augment supply chain analytics.",
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
        <div class="post-card ${post.slug === activeSlug ? "active" : ""}" data-slug="${post.slug}">
          <div class="post-category">${post.category}</div>
          <h3>${post.title}</h3>
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

function initBlog() {
  if (!listEl || !categoryEl || !titleEl || !metaEl || !contentEl) return;

  const slugFromHash = window.location.hash.replace("#", "");
  const initialSlug = posts.some((p) => p.slug === slugFromHash)
    ? slugFromHash
    : posts[0].slug;

  renderArticle(initialSlug);
}

document.addEventListener("DOMContentLoaded", initBlog);
