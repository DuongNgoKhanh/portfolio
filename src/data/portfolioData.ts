export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  period: string;
  role: string;
  organization: string;
  summary: string;
  impactMetrics: string[];
  techStack: string[];
  architecture: {
    steps: { title: string; description: string }[];
  };
  keyFeatures: string[];
  codeOrQuerySnippet?: {
    language: string;
    caption: string;
    code: string;
  };
}

export const PERSONAL_INFO = {
  name: "Ngo Khanh Duong",
  title: "AI & Automation Engineer",
  tagline: "Engineering Autonomous Pipelines, Serverless APIs & Resilient Production Architectures",
  email: "ngokhanhduong64@gmail.com",
  phone: "+84824105939",
  location: "Ho Chi Minh City, Vietnam",
  linkedin: "https://www.linkedin.com/in/duong2003",
  github: "https://github.com/DuongNgoKhanh",
  backendRepo: "https://github.com/BloomMediaDev/backend-extension.git",
  frontendRepo: "https://github.com/DuongNgoKhanh/LKP.git",
  education: {
    degree: "Bachelor of Information Security",
    school: "University of Information Technology (UIT - VNUHCM)",
    period: "2021 – 06/2026",
    gpa: "8.12 / 10",
  },
  certifications: [
    "TOEIC Listening & Reading: 840",
    "SQL (Basic) Certificate",
    "Fortinet Certified Fundamentals in Cybersecurity (FCF)",
    "Fortinet NSE 3 Certified in Cybersecurity",
    "TryHackMe Pre Security Learning Path (2026)",
  ],
};

export const IMPACT_METRICS = [
  { value: "590+", label: "Production Workflows", desc: "Orchestrated across 26 business domains" },
  { value: "35+", label: "Multi-channel Stores", desc: "Shopify, Etsy & WooCommerce synchronized" },
  { value: "135+", label: "POD Product Specs", desc: "Dynamic sizing, canvas & variant mapping" },
  { value: "~30m", label: "Automated Cloud TTL", desc: "Ephemeral Vercel Blob storage optimization" },
  { value: "100%", label: "Idempotent Webhooks", desc: "Zero duplicate orders & audit logging" },
];

export const CORE_PILLARS = [
  {
    title: "Workflow Automation & Orchestration",
    icon: "Workflow",
    description: "Architecting modular n8n systems with controller-router-executor patterns, rate-limit batching, asynchronous queue polling, and centralized error recovery.",
    highlights: ["590+ production workflows", "Multi-tenant routing", "Sub-workflow modularity"],
  },
  {
    title: "Serverless & Image Engineering",
    icon: "Cpu",
    description: "Developing Node.js/TypeScript REST APIs on Vercel with streaming multipart ingestion, Sharp morphological segmentation, and ephemeral cloud storage.",
    highlights: ["Vercel Serverless Functions", "Sharp canvas composition", "Vercel Blob TTL lifecycle"],
  },
  {
    title: "Applied AI & Context Grounding",
    icon: "Brain",
    description: "Grounding LLM agents in production PostgreSQL databases to eliminate hallucinations, paired with Gemini Vision for multimodal copy generation.",
    highlights: ["LangChain postgresTool", "Structured JSON Schema validation", "Vision-to-copy pipelines"],
  },
  {
    title: "Relational Schemas & Security Architecture",
    icon: "ShieldCheck",
    description: "Designing 3NF schemas, CTEs, LATERAL joins, idempotent webhook ingestion, transactional outbox queues, and internal JWT/RBAC security gateways.",
    highlights: ["PostgreSQL / Supabase JSONB", "State-machine audit trails", "JWT & RBAC Gateways"],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fsa-ecommerce",
    title: "FSA Multi-Store E-Commerce Fulfillment Engine",
    category: "Workflow Automation & Distributed Ops",
    period: "04/2025 – 09/2026",
    role: "Automation Engineer",
    organization: "Bloom Media",
    summary: "Production-grade automated order processing, customer verification, supplier fulfillment dispatch, and real-time status synchronization serving 35+ storefronts.",
    impactMetrics: [
      "Zero duplicate orders via compound idempotency keys",
      "Automated verification pipeline (PayPal, Smarty, Verifalia)",
      "Real-time event audit trails via state-machine triggers",
    ],
    techStack: [
      "n8n", "Supabase", "PostgreSQL", "SQL CTEs & JSONB",
      "Shopify Admin API", "WooCommerce REST API", "Etsy API",
      "PayPal API", "Smarty API", "17Track API", "Trello API"
    ],
    architecture: {
      steps: [
        { title: "Multi-Storefront Ingestion", description: "Webhooks and polling endpoints capture incoming orders across 35+ Shopify, WooCommerce, and Etsy storefronts." },
        { title: "Idempotency & Deduplication", description: "Enforces unique compound constraints (store_id + external_order_id) in PostgreSQL to discard duplicate webhooks." },
        { title: "Verification Pipeline", description: "Orchestrates parallel verification: PayPal payment validation, Smarty address standardization, and Verifalia email checks." },
        { title: "Supplier Dispatch & Tracking", description: "Prepares production assets, notifies suppliers, triggers Trello design cards, and syncs 17Track tracking numbers back to storefronts." }
      ]
    },
    keyFeatures: [
      "Optimized SQL CTEs & LATERAL unnest to transform multi-tenant orders without intermediate Node overhead.",
      "Trigger-based status audit logging (`order_status_history`) for complete state traceability.",
      "Resilient retry mechanisms for external shipping and supplier APIs."
    ],
    codeOrQuerySnippet: {
      language: "sql",
      caption: "Parameterized PostgreSQL Query with LATERAL JSONB Unnesting & Aggregation",
      code: `-- Aggregating multi-tenant order details with line item JSONB expansion
WITH active_store_orders AS (
  SELECT o.id, o.external_order_id, o.store_id, o.created_at, o.payment_status
  FROM orders o
  WHERE o.store_id = $1 AND o.fulfillment_status = 'pending_verification'
)
SELECT 
  aso.id AS order_id,
  aso.external_order_id,
  json_agg(
    jsonb_build_object(
      'sku', items.sku,
      'quantity', (items.val->>'quantity')::int,
      'custom_specs', items.val->'specs'
    )
  ) AS processed_line_items
FROM active_store_orders aso
CROSS JOIN LATERAL jsonb_array_elements(aso.line_items) AS items(val)
GROUP BY aso.id, aso.external_order_id;`
    }
  },
  {
    id: "serverless-image-api",
    title: "Serverless Image Processing API & Backend Extension",
    category: "Cloud Backend & Image Processing",
    period: "05/2026 – 09/2026",
    role: "Backend & Automation Engineer",
    organization: "Bloom Media",
    summary: "Serverless REST API deployed on Vercel handling multipart image transformations, morphological alpha/grayscale masking, precision cropping, and ephemeral cloud storage with automated TTL cleanup.",
    impactMetrics: [
      "Up to 300s execution budget for complex canvas operations",
      "Strict 4.5MB payload validation & stream parsing via Formidable v3",
      "Automated ~30-min TTL lifecycle on Vercel Blob to minimize storage costs",
    ],
    techStack: [
      "TypeScript", "Node.js", "@vercel/node", "Sharp",
      "Formidable v3", "Vercel Blob (@vercel/blob)", "REST APIs", "Vercel CI/CD"
    ],
    architecture: {
      steps: [
        { title: "Streaming Ingestion", description: "Disables default body parsing to stream multipart/form-data directly into memory via Formidable v3." },
        { title: "Morphological Segmentation", description: "Sharp processor applies grayscale thresholding and alpha masking to isolate printable artwork." },
        { title: "Multi-Panel Canvas Assembly", description: "Calculates precise bounding box coordinates to compose multi-part Print-on-Demand canvases (main panel, side panel, handle strip)." },
        { title: "Ephemeral Blob Storage & Cleanup", description: "Persists output to Vercel Blob under unique UUID job prefixes with automated ~30-minute retention sweep." }
      ]
    },
    keyFeatures: [
      "Decoupled microservice architecture serving as backend extension for upstream n8n workflows.",
      "Custom domain error hierarchy (`CropperError`, `MaskError`, `IMAGE_TOO_LARGE`).",
      "Automated integration test suites executed with `npm run test:api`."
    ],
    codeOrQuerySnippet: {
      language: "typescript",
      caption: "Sharp Multi-Panel Composition with Dynamic Preset Overrides",
      code: `// Multi-panel canvas assembly using Sharp
export async function composePanels(
  baseBuffer: Buffer,
  preset: 'main_panel' | 'side_panel' | 'handle_strip',
  dimensions: { width: number; height: number }
): Promise<Buffer> {
  const mask = await sharp(baseBuffer)
    .resize(dimensions.width, dimensions.height, { fit: 'cover' })
    .toColorspace('b-w')
    .threshold(128)
    .toBuffer();

  return sharp(baseBuffer)
    .composite([{ input: mask, blend: 'dest-in' }])
    .webp({ quality: 90 })
    .toBuffer();
}`
    }
  },
  {
    id: "grounded-ai-publisher",
    title: "Automated News Crawling, Grounded AI Rewriting & WordPress Publishing",
    category: "AI Engineering & Content Automation",
    period: "05/2025 – 09/2026",
    role: "AI & Automation Engineer",
    organization: "Bloom Media",
    summary: "End-to-end automated pipeline aggregating multi-source sports news, grounding AI generation on active NFL and sports rosters in PostgreSQL, drafting SEO articles, creating AI captions, and publishing programmatically to WordPress.",
    impactMetrics: [
      "Zero AI hallucinations via PostgreSQL stored procedure tool grounding",
      "Automated WebP media compression & SEO alt-text via Gemini Vision",
      "End-to-end publishing pipeline from RSS to live WordPress REST API",
    ],
    techStack: [
      "n8n LangChain Nodes", "OpenAI GPT-4o", "Google Gemini API",
      "PostgreSQL Stored Procedures (postgresTool)", "WordPress REST API",
      "SerpApi", "RSSHub XML", "Custom JS DOM Parsing"
    ],
    architecture: {
      steps: [
        { title: "Multi-Source Feed Ingestion", description: "Scheduled crawlers ingest sports feeds (AP News, Bleacher Report, NFL.com) with rate-limit batching." },
        { title: "DOM & Table Extraction", description: "Custom JS algorithms transform nested HTML tables into structured JSON objects with type casting." },
        { title: "Database Tool Grounding", description: "LangChain Agent calls postgresTool (search_players_by_names) to ground generated content in verified player statistics." },
        { title: "Multimodal Media & Publishing", description: "Gemini Vision generates context captions; images convert to WebP and publish directly via WordPress REST API." }
      ]
    },
    keyFeatures: [
      "Custom PostgreSQL stored procedures (`search_players_by_names`, `search_clubs_by_names`) exposed directly as callable agent tools.",
      "Strict JSON Schema validation enforced on LLM output prior to WordPress CMS persistence.",
      "SerpApi rank-tracking integration monitoring Desktop and Mobile keyword visibility tiers."
    ]
  },
  {
    id: "localis-ai",
    title: "Localis-AI (LKP) – Geospatial Travel Web Platform",
    category: "Frontend Engineering & Geospatial UI",
    period: "07/2026 – 09/2026",
    role: "Frontend Engineer (Personal Project)",
    organization: "Personal Project",
    summary: "Travel planning web platform integrating conversational itinerary generation, geospatial MapLibre vector routing, local merchant voucher discovery, and responsive UI design.",
    impactMetrics: [
      "3-column split-view architecture synchronizing AI chat, timeline & map",
      "Smooth layout transitions (25% sidebar collapse) powered by Framer Motion",
      "Interactive vector tiles and custom location markers with MapLibre GL",
    ],
    techStack: [
      "React 18", "TypeScript", "Vite", "Tailwind CSS",
      "Framer Motion", "MapLibre GL", "Lucide React", "SPA Architecture"
    ],
    architecture: {
      steps: [
        { title: "Conversational Planning", description: "Interactive AI drawer collects user travel preferences, budget parameters, and party size." },
        { title: "Dynamic Timeline Schedule", description: "Daily itinerary view computes total budget calculations and activity time allocations." },
        { title: "Vector Geospatial Sync", description: "MapLibre GL renders OpenFreeMap vector tiles with synchronized route geometries and custom place pins." },
        { title: "Merchant Discovery Hub", description: "Business dashboard interfaces for merchants to manage promotional vouchers and analytics." }
      ]
    },
    keyFeatures: [
      "Custom responsive design token system and fluid typography built with Tailwind CSS.",
      "Collapsible drawer navigation with fluid physics-based animations via Framer Motion.",
      "Multi-criteria filtering and interactive schedule manipulation."
    ]
  },
  {
    id: "security-gateway",
    title: "Workflow Security Gateway, JWT Auth & RBAC Architecture",
    category: "Security Infrastructure & Identity",
    period: "07/2025 – 09/2026",
    role: "Automation & Security Engineer",
    organization: "Bloom Media",
    summary: "Internal n8n API security gateway enforcing JWT authentication, token lifecycle management, and department-level access control across Admin, Support, and Design teams.",
    impactMetrics: [
      "End-to-end token lifecycle management (sign, verify, refresh) inside n8n",
      "Department-level privilege separation (Admin, Fulfillment, Designer)",
      "Bcrypt password hashing sub-workflows with zero credential leaks",
    ],
    techStack: [
      "n8n Crypto Node", "JSON Web Tokens (JWT)", "Role-Based Access Control (RBAC)",
      "Bcrypt Hashing", "Sub-workflows", "REST Security"
    ],
    architecture: {
      steps: [
        { title: "Token Issuance", description: "Secure sub-workflow signs JWT tokens with configurable lifetimes and department claims." },
        { title: "Gateway Interception", description: "Dedicated gateway sub-workflow validates signature integrity and expiration timestamps." },
        { title: "Department Guard", description: "auth.department.guard intercepts internal API requests, strictly enforcing RBAC boundaries." },
        { title: "Transactional Outbox", description: "Support workflows use row-locking and exponential backoff queues to prevent duplicate dispatch." }
      ]
    },
    keyFeatures: [
      "Modular micro-workflow design enabling plug-and-play authentication across hundreds of endpoints.",
      "Bcrypt password hashing sub-workflows guaranteeing secure credential verification.",
      "Audit logging for unauthorized access attempts and token refresh anomalies."
    ]
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Workflow Automation & Orchestration",
    skills: ["n8n (Advanced)", "Webhooks", "Schedule Triggers", "Sub-workflows", "Code Nodes (JS/TS)", "Rate-Limit Batching", "Error Trigger & Recovery", "590+ Production Workflows"]
  },
  {
    category: "Backend & Serverless APIs",
    skills: ["TypeScript", "Node.js", "Vercel Serverless Functions", "Sharp Image Engine", "Formidable v3 Multipart", "Vercel Blob Storage", "TTL Cleanup Sweeps", "RESTful Architecture"]
  },
  {
    category: "LLM, AI & Multimodal Integration",
    skills: ["OpenAI API (GPT-4o)", "Google Gemini Vision", "LangChain Agent Tools (postgresTool)", "Postgres Chat Memory", "Structured JSON Schema Validation", "ComfyUI API (Google Colab)", "SerpApi"]
  },
  {
    category: "Database & SQL Engineering",
    skills: ["PostgreSQL", "Supabase", "Complex SQL (CTEs, LATERAL Joins, JSONB)", "Stored Procedures & Functions", "Idempotency Architecture", "Transactional Outbox Pattern", "MS SQL Server", "MongoDB"]
  },
  {
    category: "Frontend Engineering",
    skills: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "MapLibre GL (Geospatial)", "Lucide Icons", "Responsive UI & Dark Mode"]
  },
  {
    category: "Security & Infrastructure",
    skills: ["JWT Authentication", "Role-Based Access Control (RBAC)", "Bcrypt Hashing", "Zabbix Monitoring", "Linux (Ubuntu, Kali)", "C# .NET 8 (Sockets)", "Fortinet FCF & NSE 3"]
  }
];
