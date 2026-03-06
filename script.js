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

      <h2>AI Architecture Diagram</h2>
      <p>A simple reference architecture for a generative AI application on AWS usually includes a user-facing app, prompt orchestration, model access, retrieval, operational storage, and monitoring.</p>
      <div class="diagram-shell">
        <svg viewBox="0 0 920 340" style="width:100%;min-width:760px;height:auto;">
          <rect x="30" y="130" rx="18" ry="18" width="130" height="70" fill="white" stroke="#cbd5e1" stroke-width="2"></rect>
          <text x="95" y="158" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">Users</text>
          <text x="95" y="178" text-anchor="middle" font-size="12" fill="#475569">Web / Mobile / Internal</text>

          <line x1="160" y1="165" x2="250" y2="165" stroke="#94a3b8" stroke-width="3"></line>
          <polygon points="250,165 240,159 240,171" fill="#94a3b8"></polygon>

          <rect x="250" y="130" rx="18" ry="18" width="150" height="70" fill="white" stroke="#cbd5e1" stroke-width="2"></rect>
          <text x="325" y="158" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">App Layer</text>
          <text x="325" y="178" text-anchor="middle" font-size="12" fill="#475569">Frontend + API</text>

          <line x1="400" y1="165" x2="490" y2="165" stroke="#94a3b8" stroke-width="3"></line>
          <polygon points="490,165 480,159 480,171" fill="#94a3b8"></polygon>

          <rect x="490" y="130" rx="18" ry="18" width="220" height="70" fill="white" stroke="#cbd5e1" stroke-width="2"></rect>
          <text x="575" y="158" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">Prompt / Orchestration</text>
          <text x="575" y="178" text-anchor="middle" font-size="12" fill="#475569">Routing, Guardrails, RAG</text>

          <line x1="660" y1="165" x2="750" y2="165" stroke="#94a3b8" stroke-width="3"></line>
          <polygon points="750,165 740,159 740,171" fill="#94a3b8"></polygon>

          <rect x="750" y="130" rx="18" ry="18" width="160" height="70" fill="white" stroke="#cbd5e1" stroke-width="2"></rect>
          <text x="820" y="158" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">Foundation Model</text>
          <text x="820" y="178" text-anchor="middle" font-size="12" fill="#475569">Bedrock / Custom Model</text>

          <line x1="575" y1="200" x2="575" y2="255" stroke="#94a3b8" stroke-width="3"></line>
          <polygon points="575,255 569,245 581,245" fill="#94a3b8"></polygon>

          <rect x="485" y="255" rx="18" ry="18" width="250" height="60" fill="white" stroke="#cbd5e1" stroke-width="2"></rect>
          <text x="575" y="279" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">Knowledge Base / Vector Store</text>
          <text x="575" y="298" text-anchor="middle" font-size="12" fill="#475569">Docs, embeddings, retrieval</text>

          <line x1="325" y1="200" x2="325" y2="255" stroke="#94a3b8" stroke-width="3"></line>
          <polygon points="325,255 319,245 331,245" fill="#94a3b8"></polygon>

          <rect x="225" y="255" rx="18" ry="18" width="200" height="60" fill="white" stroke="#cbd5e1" stroke-width="2"></rect>
          <text x="325" y="279" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">Operational Data</text>
          <text x="325" y="298" text-anchor="middle" font-size="12" fill="#475569">S3, databases, logs, files</text>
        </svg>
      </div>

      <h2>AWS Service Diagram</h2>
      <p>Different AWS services fit different parts of the generative AI lifecycle. Bedrock accelerates model consumption, SageMaker supports full ML workflows, while Trainium and Inferentia help with training and inference economics.</p>
      <div class="aws-grid">
        <div class="card aws-item"><div class="aws-label">AWS</div><h4>Amazon Bedrock</h4><p>Managed access to foundation models, agents, and generative AI APIs.</p></div>
        <div class="card aws-item"><div class="aws-label">AWS</div><h4>Amazon SageMaker</h4><p>Build, train, deploy, and manage custom ML workflows and model lifecycle processes.</p></div>
        <div class="card aws-item"><div class="aws-label">AWS</div><h4>AWS Trainium</h4><p>Purpose-built accelerator for large-scale model training with better cost efficiency.</p></div>
        <div class="card aws-item"><div class="aws-label">AWS</div><h4>AWS Inferentia</h4><p>Optimised accelerator for low-cost, high-throughput, low-latency inference workloads.</p></div>
      </div>

      <h2>Code Examples</h2>
      <p>Good portfolio content should not stop at theory. Short, readable code examples make the article more credible and more useful to recruiters and hiring managers.</p>

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
            <div class="code-head-title">Python example: Train a model with SageMaker</div>
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
      <p>Use <strong>Amazon Bedrock</strong> when you want fast access to foundation models through a managed API, simpler application integration, and less infrastructure overhead.</p>
      <p>Use <strong>Amazon SageMaker</strong> when you need deeper control over experimentation, data preparation, model training, custom containers, notebooks, pipelines, and MLOps.</p>
      <h3>Choose Bedrock when...</h3>
      <ul>
        <li>You want quick GenAI prototyping</li>
        <li>You need managed access to foundation models</li>
        <li>You want lower operational overhead</li>
        <li>You are building chat, summarisation, or RAG-style apps</li>
      </ul>
      <h3>Choose SageMaker when...</h3>
      <ul>
        <li>You need custom ML training</li>
        <li>You want notebook-based development</li>
        <li>You require training pipelines and deployment control</li>
        <li>You need an end-to-end machine learning workflow</li>
      </ul>
      <h2>Practical guidance</h2>
      <p>For most business teams, Bedrock is the fastest route to shipping a generative AI application. For data science teams with strong ML maturity, SageMaker becomes more attractive when experimentation depth and custom training matter more than speed alone.</p>
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
      <p>Generative AI in supply chain is most useful when paired with structured analytics. The real value is not random text generation. It is decision support layered on top of operational data.</p>
      <ul>
        <li>Summarising forecast drivers in plain English</li>
        <li>Explaining stock-out risk to non-technical stakeholders</li>
        <li>Generating supplier performance summaries</li>
        <li>Turning dashboards into narrative insights</li>
        <li>Helping analysts query datasets using natural language</li>
      </ul>
      <h2>Where it helps most</h2>
      <p>Generative AI can improve the usability of analytics, but it does not replace forecasting logic, inventory controls, or sound data engineering. It adds interpretation, faster access, and communication power on top of existing operational systems.</p>
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
