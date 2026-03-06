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
      <p>This version fixes the spacing, icon collisions, arrow weight, lower-band grouping, and visual balance so the architecture reads more like a polished cloud design and less like a cramped blog sketch.</p>

      <div class="diagram-shell" style="padding:28px;background:linear-gradient(180deg,#eef3f8 0%,#f8fafc 100%);">
        <svg viewBox="0 0 1200 520" style="width:100%;min-width:1000px;height:auto;display:block;">

          <defs>
            <filter id="shadowSoft" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.08"/>
            </filter>

            <linearGradient id="boxFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#fbfdff"/>
            </linearGradient>

            <linearGradient id="awsFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#fff7ed"/>
              <stop offset="100%" stop-color="#ffedd5"/>
            </linearGradient>

            <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 z" fill="#8ea0b8"></path>
            </marker>
          </defs>

          <rect x="14" y="14" rx="30" ry="30" width="1172" height="492" fill="#edf3f8" stroke="#d7e2ee"/>

          <text x="600" y="48" text-anchor="middle" font-size="22" font-weight="700" fill="#0f172a">
            Generative AI Application Architecture on AWS
          </text>
          <text x="600" y="74" text-anchor="middle" font-size="13" fill="#52637a">
            Retrieval-augmented orchestration with Bedrock, enterprise data, and AWS-managed infrastructure
          </text>

          <!-- Users -->
          <g filter="url(#shadowSoft)">
            <rect x="56" y="124" rx="24" ry="24" width="190" height="92" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"/>
            <circle cx="104" cy="161" r="18" fill="#eef6ff" stroke="#bfd8ff"/>
            <circle cx="104" cy="155" r="4" fill="#2563eb"/>
            <path d="M96 170 q8-14 16 0" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
            <text x="140" y="157" font-size="18" font-weight="700" fill="#0f172a">Users</text>
            <text x="140" y="183" font-size="12" fill="#52637a">Web · Mobile · Internal Teams</text>
          </g>

          <!-- Application Layer -->
          <g filter="url(#shadowSoft)">
            <rect x="300" y="124" rx="24" ry="24" width="220" height="92" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"/>
            <rect x="330" y="144" rx="10" ry="10" width="36" height="28" fill="#ecfeff" stroke="#a5f3fc"/>
            <rect x="340" y="151" rx="4" ry="4" width="16" height="14" fill="#0891b2"/>
            <text x="380" y="157" font-size="18" font-weight="700" fill="#0f172a">Application Layer</text>
            <text x="380" y="183" font-size="12" fill="#52637a">Frontend · API · Auth · Business Logic</text>
          </g>

          <!-- Prompt / Orchestration -->
          <g filter="url(#shadowSoft)">
            <rect x="574" y="124" rx="24" ry="24" width="282" height="92" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"/>
            <circle cx="620" cy="160" r="17" fill="#fff7ed" stroke="#fdba74"/>
            <path d="M612 160 h16 M620 152 v16" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
            <text x="646" y="157" font-size="18" font-weight="700" fill="#0f172a">Prompt / Orchestration</text>
            <text x="646" y="183" font-size="12" fill="#52637a">Prompt Routing · Guardrails · RAG · Tools</text>
          </g>

          <!-- Foundation Model -->
          <g filter="url(#shadowSoft)">
            <rect x="910" y="124" rx="24" ry="24" width="232" height="92" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"/>
            <rect x="940" y="143" rx="10" ry="10" width="38" height="30" fill="#f5f3ff" stroke="#ddd6fe"/>
            <path d="M948 166 L955 150 L962 166 L969 150" stroke="#7c3aed" stroke-width="2" fill="none"/>
            <text x="990" y="157" font-size="18" font-weight="700" fill="#0f172a">Foundation Model</text>
            <text x="990" y="183" font-size="12" fill="#52637a">Amazon Bedrock · FM APIs</text>
          </g>

          <!-- Top arrows -->
          <line x1="246" y1="170" x2="300" y2="170" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"/>
          <line x1="520" y1="170" x2="574" y2="170" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"/>
          <line x1="856" y1="170" x2="910" y2="170" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"/>

          <!-- Lower row -->
          <g filter="url(#shadowSoft)">
            <rect x="250" y="286" rx="24" ry="24" width="280" height="102" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"/>
            <text x="390" y="326" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Operational Data</text>
            <text x="390" y="352" text-anchor="middle" font-size="12" fill="#52637a">Amazon S3 · RDS · Logs · Files · App Data</text>
            <rect x="348" y="358" rx="14" ry="14" width="84" height="26" fill="url(#awsFill)" stroke="#f2a14a"/>
            <text x="390" y="375" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">AWS DATA</text>
          </g>

          <g filter="url(#shadowSoft)">
            <rect x="620" y="286" rx="24" ry="24" width="300" height="102" fill="url(#boxFill)" stroke="#b8c6d8" stroke-width="2"/>
            <text x="770" y="324" text-anchor="middle" font-size="18" font-weight="700" fill="#0f172a">Knowledge Base / Vector Store</text>
            <text x="770" y="350" text-anchor="middle" font-size="12" fill="#52637a">Embeddings · Documents · Retrieval · Semantic Search</text>
            <rect x="726" y="358" rx="14" ry="14" width="88" height="26" fill="url(#awsFill)" stroke="#f2a14a"/>
            <text x="770" y="375" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">AWS RAG</text>
          </g>

          <line x1="420" y1="216" x2="420" y2="286" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"/>
          <line x1="715" y1="216" x2="715" y2="286" stroke="#8ea0b8" stroke-width="3" marker-end="url(#arrowHead)"/>

          <path d="M530 337 C565 337, 585 337, 620 337" fill="none" stroke="#c6d3e3" stroke-width="2" stroke-dasharray="6 6"/>

          <!-- Supporting services -->
          <g filter="url(#shadowSoft)">
            <rect x="86" y="420" rx="24" ry="24" width="1028" height="68" fill="#f5f9fc" stroke="#d5e1ec"/>
          </g>
          <text x="600" y="441" text-anchor="middle" font-size="12" font-weight="700" letter-spacing="1.5" fill="#64748b">
            SUPPORTING AWS SERVICES
          </text>

          <g filter="url(#shadowSoft)">
            <rect x="104" y="450" rx="18" ry="18" width="185" height="30" fill="#ffffff" stroke="#c7d4e2"/>
            <text x="196" y="470" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">API Gateway / Lambda</text>
          </g>

          <g filter="url(#shadowSoft)">
            <rect x="318" y="450" rx="18" ry="18" width="180" height="30" fill="#ffffff" stroke="#c7d4e2"/>
            <text x="408" y="470" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">Amazon SageMaker</text>
          </g>

          <g filter="url(#shadowSoft)">
            <rect x="528" y="450" rx="18" ry="18" width="170" height="30" fill="#ffffff" stroke="#c7d4e2"/>
            <text x="613" y="470" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">AWS Trainium</text>
          </g>

          <g filter="url(#shadowSoft)">
            <rect x="724" y="450" rx="18" ry="18" width="170" height="30" fill="#ffffff" stroke="#c7d4e2"/>
            <text x="809" y="470" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">AWS Inferentia</text>
          </g>

          <g filter="url(#shadowSoft)">
            <rect x="922" y="450" rx="18" ry="18" width="150" height="30" fill="#ffffff" stroke="#c7d4e2"/>
            <text x="997" y="470" text-anchor="middle" font-size="12" font-weight="700" fill="#334155">CloudWatch</text>
          </g>

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
  metaEl.textContent = \`\${post.date} · \${post.readTime}\`;
  contentEl.innerHTML = post.content;
  renderPostList(post.slug);
  window.history.replaceState(null, "", \`#\${post.slug}\`);
}

const slugFromHash = window.location.hash.replace("#", "");
const initialSlug = posts.some((p) => p.slug === slugFromHash)
  ? slugFromHash
  : posts[0].slug;

renderArticle(initialSlug);
