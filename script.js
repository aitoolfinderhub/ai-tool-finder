const SUPABASE_URL = "https://aekoqkedglamqobxxiey.supabase.co";
const SUPABASE_KEY = "sb_publishable_BdHgiKZpNyEG6v8tdWcKsQ_f2Jcghva";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const aiTools = [

    {
        name: "Canva",
        category: ["video", "image", "presentation", "ads"],
        purposes: [
            "Instagram Reel",
            "Advertisement",
            "AI Art",
            "Social Media Posts",
            "Business Presentation",
            "Marketing Presentation",
            "Social Media Ad"
        ],
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "Easy-to-use AI design platform for graphics, presentations, social media content and videos.",
        bestFor: "Beginner-friendly ad creatives and social media designs",
        rating: 4.8,
        website: "https://www.canva.com/"
    },

    {
        name: "InVideo AI",
        category: ["video", "ads"],
        purposes: [
            "YouTube Video",
            "Instagram Reel",
            "Advertisement",
            "Faceless Video",
            "Video Advertisement"
        ],
        price: "Paid + Free Plan",
        priceType: "freemium",
        difficulty: "Beginner",
        description: "Create complete videos from text prompts using AI.",
        rating: 4.7,
        website: "https://invideo.io/"
    },

    {
        name: "Runway",
        category: ["video", "image"],
        purposes: [
            "Advertisement",
            "Animation",
            "AI Art",
            "Photorealistic Images"
        ],
        price: "Paid + Free",
        priceType: "freemium",
        difficulty: "Intermediate",
        description: "Powerful AI tools for generating and editing videos and creative visuals.",
        rating: 4.7,
        website: "https://runwayml.com/"
    },

    {
        name: "ChatGPT",
        category: ["writing", "coding", "study", "ads"],
        purposes: [
            "Blog Articles",
            "Social Media Content",
            "Marketing Copy",
            "Emails",
            "Stories",
            "Write Code",
            "Debug Code",
            "Learn Programming",
            "Study & Notes",
            "Research",
            "Exam Preparation",
            "Social Media Ad"
        ],
        price: "Free + Paid",
        priceType: "freemium",
        difficulty: "Beginner",
        description: "AI assistant for writing, brainstorming, coding, research and learning.",
        rating: 4.9,
        website: "https://chatgpt.com/"
    },

    {
        name: "Claude",
        category: ["writing", "coding", "study"],
        purposes: [
            "Blog Articles",
            "Marketing Copy",
            "Emails",
            "Write Code",
            "Debug Code",
            "Learn Programming",
            "Study & Notes",
            "Research"
        ],
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI assistant known for writing, reasoning, coding and analyzing information.",
        rating: 4.8,
        website: "https://claude.ai/"
    },

    {
        name: "Midjourney",
        category: ["image"],
        purposes: [
            "AI Art",
            "Product Images",
            "Photorealistic Images"
        ],
        price: "Paid",
        priceType: "paid",
        difficulty: "Intermediate",
        description: "Advanced AI image generation platform for highly creative visuals.",
        rating: 4.8,
        website: "https://www.midjourney.com/"
    },

    {
        name: "Gamma",
        category: ["presentation", "website"],
        purposes: [
            "Business Presentation",
            "School Project",
            "Pitch Deck",
            "Educational Slides",
            "Marketing Presentation",
            "Business Website",
            "Portfolio"
        ],
        price: "Free + Paid",
        priceType: "freemium",
        difficulty: "Beginner",
        description: "Create presentations, documents and simple websites using AI.",
        rating: 4.7,
        website: "https://gamma.app/"
    },

    {
        name: "Cursor",
        category: ["coding"],
        purposes: [
            "Write Code",
            "Debug Code",
            "Build a Website",
            "Build an App"
        ],
        price: "Free + Paid",
        priceType: "freemium",
        difficulty: "Intermediate",
        description: "AI-powered code editor designed to help developers build software faster.",
        rating: 4.8,
        website: "https://cursor.com/"
    },

    {
    name: "Perplexity",
    category: ["study", "writing"],
    purposes: [
        "Research",
        "Study & Notes",
        "Math",
        "Learn a New Skill",
        "Blog Articles",
        "Exam Preparation"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI search and research assistant for finding and understanding information.",
    rating: 4.7,
    website: "https://www.perplexity.ai/"
    },  

    {
        name: "Framer AI",
        category: ["website"],
        purposes: [
            "Business Website",
            "Portfolio",
            "Landing Page"
        ],
        price: "Free + Paid",
        priceType: "freemium",
        difficulty: "Beginner",
        description: "AI-powered website builder for creating modern websites quickly.",
        rating: 4.6,
        website: "https://www.framer.com/"
    },

    {
    name: "AdCreative.ai",
    category: ["ads"],
    purposes: [
        "Social Media Ad",
        "Product Advertisement",
        "Google Ad",
        "Facebook / Instagram Ad"
    ],
    price: "Paid + Free Trial",
    priceType: "trial",
    difficulty: "Beginner",
    description: "AI platform designed to generate and optimize advertising creatives for digital campaigns.",
    rating: 4.7,
    website: "https://www.adcreative.ai/"
},

{
    name: "Jasper",
    category: ["ads", "writing"],
    purposes: [
        "Social Media Ad",
        "Product Advertisement",
        "Google Ad",
        "Facebook / Instagram Ad",
        "Marketing Copy"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Beginner",
    description: "AI marketing platform for creating advertising copy, campaign content and marketing materials.",
    rating: 4.6,
    website: "https://www.jasper.ai/"
},

{
    name: "Creatify",
    category: ["ads", "video"],
    purposes: [
        "Video Advertisement",
        "Product Advertisement",
        "Social Media Ad",
        "Facebook / Instagram Ad"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI tool for creating short-form product advertising videos from product information or links.",
    rating: 4.7,
    website: "https://creatify.ai/"
},

{
    name: "Predis.ai",
    category: ["ads"],
    purposes: [
        "Social Media Ad",
        "Product Advertisement",
        "Facebook / Instagram Ad"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI social media marketing platform for generating posts, creatives and advertising content.",
    rating: 4.6,
    website: "https://predis.ai/"
},

{
    name: "Canva",
    category: ["video", "image", "presentation", "ads"],
    purposes: [
    "Instagram Reel",
    "Advertisement",
    "AI Art",
    "Social Media Posts",
    "Business Presentation",
    "Marketing Presentation",
    "Social Media Ad",
    "Product Advertisement",
    "Facebook / Instagram Ad"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Create social media graphics, ad creatives, promotional videos and marketing designs.",
    rating: 4.8,
    website: "https://www.canva.com/"
},
{
    name: "Shopify",
    category: ["website"],
    purposes: [
        "E-commerce Website",
        "Business Website"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Beginner",
    description: "Complete e-commerce platform for creating an online store, managing products and accepting payments.",
    bestFor: "Building and running a complete online store",
    rating: 4.8,
    website: "https://www.shopify.com/"
},
{
    name: "Wix",
    category: ["website"],
    purposes: [
        "E-commerce Website",
        "Business Website",
        "Portfolio",
        "Landing Page"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Website builder with AI-powered tools for creating business websites and online stores.",
    bestFor: "Beginners who want an easy website and online store builder",
    rating: 4.7,
    website: "https://www.wix.com/"
},
{
    name: "Hostinger Website Builder",
    category: ["website"],
    purposes: [
        "E-commerce Website",
        "Business Website",
        "Landing Page"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Beginner",
    description: "AI-powered website builder with tools for creating business websites and online stores.",
    bestFor: "Affordable AI-powered websites and small online stores",
    rating: 4.6,
    website: "https://www.hostinger.com/"
},
{
    name: "Durable",
    category: ["website"],
    purposes: [
        "Business Website",
        "E-commerce Website"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Beginner",
    description: "AI website builder designed to generate a business website quickly.",
    bestFor: "Quickly creating a simple business website",
    rating: 4.5,
    website: "https://durable.co/"
},
{
    name: "Lovable",
    category: ["website", "coding"],
    purposes: [
        "Web App",
        "Build an App",
        "Build a Website"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI-powered platform for building web applications from natural language descriptions.",
    bestFor: "Beginners who want to build web apps without extensive coding",
    rating: 4.8,
    website: "https://lovable.dev/"
},

{
    name: "Bolt.new",
    category: ["website", "coding"],
    purposes: [
        "Web App",
        "Build an App",
        "Build a Website"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "AI-powered development platform for creating full-stack web applications from prompts.",
    bestFor: "Building functional web applications with AI",
    rating: 4.7,
    website: "https://bolt.new/"
},
{
    name: "Replit",
    category: ["website", "coding"],
    purposes: [
        "Web App",
        "Build an App",
        "Build a Website",
        "Write Code"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "Online development platform with AI tools for building, coding and deploying applications.",
    bestFor: "Building and deploying web apps with AI assistance",
    rating: 4.7,
    website: "https://replit.com/"
},
{
    name: "HeyGen",
    category: ["video", "ads"],
    purposes: [
        "YouTube Video",
        "Advertisement",
        "Video Advertisement"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI video platform for creating avatar videos, presentations and marketing content.",
    bestFor: "AI avatar and presenter-style videos",
    rating: 4.7,
    website: "https://www.heygen.com/"
},

{
    name: "Synthesia",
    category: ["video"],
    purposes: [
        "YouTube Video",
        "Advertisement",
        "Animation"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Beginner",
    description: "AI video platform for creating professional videos with AI avatars and voiceovers.",
    bestFor: "Professional presenter and training videos",
    rating: 4.7,
    website: "https://www.synthesia.io/"
},

{
    name: "Pictory",
    category: ["video"],
    purposes: [
        "YouTube Video",
        "Faceless Video",
        "Instagram Reel"
    ],
    price: "Paid + Free Trial",
    priceType: "trial",
    difficulty: "Beginner",
    description: "AI video creation platform for turning scripts, articles and ideas into videos.",
    bestFor: "Faceless videos and repurposing content",
    rating: 4.6,
    website: "https://pictory.ai/"
},

{
    name: "VEED",
    category: ["video", "ads"],
    purposes: [
        "YouTube Video",
        "Instagram Reel",
        "Advertisement",
        "Faceless Video",
        "Video Advertisement"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Online AI video editor for creating social videos, advertisements and content.",
    bestFor: "Quick social media videos and editing",
    rating: 4.6,
    website: "https://www.veed.io/"
},

{
    name: "Descript",
    category: ["video", "writing"],
    purposes: [
        "YouTube Video",
        "Instagram Reel",
        "Faceless Video"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "AI-powered video and audio editor that lets you edit content using text.",
    bestFor: "Editing videos and podcasts using text",
    rating: 4.6,
    website: "https://www.descript.com/"
},
{
    name: "Adobe Firefly",
    category: ["video", "image"],
    purposes: [
        "Animation",
        "AI Art",
        "Photorealistic Images"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "Adobe's generative AI platform for creating and editing images, video and creative content.",
    bestFor: "AI-generated creative visuals and video effects",
    rating: 4.7,
    website: "https://firefly.adobe.com/"
},

{
    name: "Pika",
    category: ["video"],
    purposes: [
        "Animation",
        "Instagram Reel",
        "Advertisement"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI video generation platform for creating and transforming short creative videos.",
    bestFor: "Short AI animations and creative video clips",
    rating: 4.6,
    website: "https://pika.art/"
},

{
    name: "Kling AI",
    category: ["video", "image"],
    purposes: [
        "Animation",
        "Advertisement",
        "Photorealistic Images"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "Generative AI platform for creating realistic videos and visual content from prompts.",
    bestFor: "Realistic AI video generation and animation",
    rating: 4.7,
    website: "https://klingai.com/"
},
{
    name: "Adobe Firefly",
    category: ["image", "video"],
    purposes: [
        "AI Art",
        "Product Images",
        "Social Media Posts",
        "Photorealistic Images",
        "Logos & Designs"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Generative AI tools for creating and editing images and creative designs.",
    bestFor: "Creative image generation and professional design workflows",
    rating: 4.7,
    website: "https://firefly.adobe.com/"
},

{
    name: "Leonardo AI",
    category: ["image"],
    purposes: [
        "AI Art",
        "Product Images",
        "Photorealistic Images",
        "Logos & Designs"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "AI image generation platform for creating detailed artwork, designs and visual assets.",
    bestFor: "High-quality AI artwork and creative assets",
    rating: 4.7,
    website: "https://leonardo.ai/"
},

{
    name: "Ideogram",
    category: ["image"],
    purposes: [
        "AI Art",
        "Social Media Posts",
        "Logos & Designs",
        "Product Images"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI image generator known for creating images with strong typography and text rendering.",
    bestFor: "Posters, logos, graphics and images containing text",
    rating: 4.7,
    website: "https://ideogram.ai/"
},

{
    name: "DALL-E",
    category: ["image"],
    purposes: [
        "AI Art",
        "Product Images",
        "Social Media Posts",
        "Photorealistic Images"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Beginner",
    description: "AI image generation technology for creating images from natural language descriptions.",
    bestFor: "Generating custom images from detailed prompts",
    rating: 4.6,
    website: "https://openai.com/"
},

{
    name: "Recraft",
    category: ["image"],
    purposes: [
        "AI Art",
        "Logos & Designs",
        "Product Images",
        "Social Media Posts"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "AI design platform for generating editable graphics, illustrations, icons and brand assets.",
    bestFor: "Professional graphic design and vector-style assets",
    rating: 4.7,
    website: "https://www.recraft.ai/"
},

{
    name: "Playground AI",
    category: ["image"],
    purposes: [
        "AI Art",
        "Social Media Posts",
        "Product Images",
        "Photorealistic Images"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI image creation platform for generating and editing creative visuals.",
    bestFor: "Easy AI image generation and editing",
    rating: 4.5,
    website: "https://playground.com/"
},

{
    name: "Flux",
    category: ["image"],
    purposes: [
        "AI Art",
        "Photorealistic Images",
        "Product Images"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "Advanced image generation models designed for high-quality and realistic visual creation.",
    bestFor: "Detailed and photorealistic AI images",
    rating: 4.7,
    website: "https://blackforestlabs.ai/"
},

{
    name: "Ideate AI",
    category: ["image"],
    purposes: [
        "Product Images",
        "Social Media Posts",
        "AI Art"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI-powered creative tool for generating visual concepts and marketing imagery.",
    bestFor: "Quick visual concepts and marketing creatives",
    rating: 4.4,
    website: "https://ideate.ai/"
},
{
    name: "Jasper",
    category: ["writing", "ads"],
    purposes: [
        "Blog Articles",
        "Social Media Content",
        "Marketing Copy",
        "Emails",
        "Stories"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Beginner",
    description: "AI marketing platform designed for creating marketing and business content.",
    bestFor: "Marketing content and business copy",
    rating: 4.6,
    website: "https://www.jasper.ai/"
},

{
    name: "Copy.ai",
    category: ["writing", "ads"],
    purposes: [
        "Blog Articles",
        "Social Media Content",
        "Marketing Copy",
        "Emails"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI platform for creating marketing copy, business content and sales materials.",
    bestFor: "Marketing copy and sales content",
    rating: 4.6,
    website: "https://www.copy.ai/"
},

{
    name: "Writesonic",
    category: ["writing"],
    purposes: [
        "Blog Articles",
        "Social Media Content",
        "Marketing Copy",
        "Emails"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI writing platform for articles, marketing content and business communication.",
    bestFor: "SEO articles and marketing content",
    rating: 4.5,
    website: "https://writesonic.com/"
},

{
    name: "Grammarly",
    category: ["writing"],
    purposes: [
        "Blog Articles",
        "Social Media Content",
        "Emails"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI writing assistant for improving grammar, clarity, tone and communication.",
    bestFor: "Improving and polishing written content",
    rating: 4.7,
    website: "https://www.grammarly.com/"
},

{
    name: "QuillBot",
    category: ["writing", "study"],
    purposes: [
        "Blog Articles",
        "Social Media Content",
        "Emails",
        "Study & Notes"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI writing assistant for paraphrasing, rewriting, summarizing and improving text.",
    bestFor: "Rewriting, paraphrasing and summarizing text",
    rating: 4.6,
    website: "https://quillbot.com/"
},

{
    name: "Sudowrite",
    category: ["writing"],
    purposes: [
        "Stories",
        "Blog Articles"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Intermediate",
    description: "AI writing tool designed specifically for creative writers and storytelling.",
    bestFor: "Creative writing and fiction",
    rating: 4.6,
    website: "https://www.sudowrite.com/"
},

{
    name: "Rytr",
    category: ["writing", "ads"],
    purposes: [
        "Blog Articles",
        "Social Media Content",
        "Marketing Copy",
        "Emails",
        "Stories"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI writing assistant for creating marketing, social media and general content.",
    bestFor: "Affordable everyday AI writing",
    rating: 4.5,
    website: "https://rytr.me/"
},

{
    name: "Notion AI",
    category: ["writing", "study"],
    purposes: [
        "Blog Articles",
        "Social Media Content",
        "Emails",
        "Study & Notes",
        "Research"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Beginner",
    description: "AI assistant integrated into Notion for writing, summarizing, organizing and working with information.",
    bestFor: "Writing and organizing information inside Notion",
    rating: 4.6,
    website: "https://www.notion.so/product/ai"
},
{
    name: "Beautiful.ai",
    category: ["presentation"],
    purposes: [
        "Business Presentation",
        "Pitch Deck",
        "Educational Slides",
        "Marketing Presentation"
    ],
    price: "Paid + Free Trial",
    priceType: "trial",
    difficulty: "Beginner",
    description: "AI-powered presentation platform that automatically creates polished and professional slides.",
    bestFor: "Professional business presentations",
    rating: 4.6,
    website: "https://www.beautiful.ai/"
},

{
    name: "Tome",
    category: ["presentation"],
    purposes: [
        "Business Presentation",
        "Pitch Deck",
        "Educational Slides",
        "Marketing Presentation"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI presentation tool for creating visually engaging presentations and stories.",
    bestFor: "Quick AI-generated presentations and pitch decks",
    rating: 4.5,
    website: "https://tome.app/"
},

{
    name: "SlidesAI",
    category: ["presentation"],
    purposes: [
        "Business Presentation",
        "School Project",
        "Educational Slides",
        "Marketing Presentation"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI tool that turns text into presentations and works with presentation workflows.",
    bestFor: "Turning notes and text into slides",
    rating: 4.5,
    website: "https://www.slidesai.io/"
},

{
    name: "Plus AI",
    category: ["presentation"],
    purposes: [
        "Business Presentation",
        "School Project",
        "Pitch Deck",
        "Educational Slides"
    ],
    price: "Paid + Free Trial",
    priceType: "trial",
    difficulty: "Beginner",
    description: "AI presentation assistant designed to create and edit slides using natural language.",
    bestFor: "Creating presentations directly inside Google Slides",
    rating: 4.5,
    website: "https://www.plusdocs.com/"
},

{
    name: "Prezi AI",
    category: ["presentation"],
    purposes: [
        "Business Presentation",
        "School Project",
        "Educational Slides",
        "Marketing Presentation"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Presentation platform with AI features for creating dynamic and engaging presentations.",
    bestFor: "Interactive and visually engaging presentations",
    rating: 4.5,
    website: "https://prezi.com/"
},
{
    name: "GitHub Copilot",
    category: ["coding"],
    purposes: [
        "Write Code",
        "Debug Code",
        "Learn Programming",
        "Build an App"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI coding assistant that helps developers write, understand and debug code.",
    bestFor: "Everyday AI assistance while programming",
    rating: 4.7,
    website: "https://github.com/features/copilot"
},

{
    name: "Windsurf",
    category: ["coding"],
    purposes: [
        "Write Code",
        "Debug Code",
        "Build a Website",
        "Build an App"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "AI-powered development environment designed to help developers build software with AI assistance.",
    bestFor: "AI-assisted software development",
    rating: 4.7,
    website: "https://windsurf.com/"
},

{
    name: "Replit",
    category: ["coding", "website"],
    purposes: [
        "Write Code",
        "Debug Code",
        "Build a Website",
        "Build an App",
        "Learn Programming"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Online coding and development platform with AI tools for building and deploying applications.",
    bestFor: "Learning and building projects directly in the browser",
    rating: 4.7,
    website: "https://replit.com/"
},

{
    name: "Lovable",
    category: ["coding", "website"],
    purposes: [
        "Build a Website",
        "Build an App",
        "Write Code"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI-powered platform for building web applications from natural language prompts.",
    bestFor: "Building web apps without extensive coding",
    rating: 4.8,
    website: "https://lovable.dev/"
},

{
    name: "Bolt.new",
    category: ["coding", "website"],
    purposes: [
        "Build a Website",
        "Build an App",
        "Write Code",
        "Debug Code"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "AI-powered development environment for creating full-stack web applications from prompts.",
    bestFor: "Rapidly building functional web applications",
    rating: 4.7,
    website: "https://bolt.new/"
},

{
    name: "v0",
    category: ["coding", "website"],
    purposes: [
        "Build a Website",
        "Build an App",
        "Write Code"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "AI-powered development tool for generating user interfaces and application code.",
    bestFor: "Creating modern web interfaces with AI",
    rating: 4.7,
    website: "https://v0.dev/"
},

{
    name: "Tabnine",
    category: ["coding"],
    purposes: [
        "Write Code",
        "Debug Code",
        "Learn Programming"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI coding assistant that provides code completion and development assistance.",
    bestFor: "AI-powered code completion",
    rating: 4.5,
    website: "https://www.tabnine.com/"
},

{
    name: "Amazon Q Developer",
    category: ["coding"],
    purposes: [
        "Write Code",
        "Debug Code",
        "Learn Programming",
        "Build an App"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "AI-powered coding assistant from AWS for software development and cloud workflows.",
    bestFor: "Developers working with AWS and software projects",
    rating: 4.5,
    website: "https://aws.amazon.com/q/developer/"
},
{
    name: "Wolfram Alpha",
    category: ["study"],
    purposes: [
        "Math",
        "Research",
        "Study & Notes",
        "Exam Preparation"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Intermediate",
    description: "Computational knowledge engine for solving mathematical problems and exploring technical topics.",
    bestFor: "Mathematical calculations and step-by-step problem solving",
    rating: 4.8,
    website: "https://www.wolframalpha.com/"
},

{
    name: "Photomath",
    category: ["study"],
    purposes: [
        "Math",
        "Exam Preparation",
        "Study & Notes"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Math learning tool that helps students solve problems and understand mathematical steps.",
    bestFor: "Learning and solving school-level mathematics",
    rating: 4.7,
    website: "https://photomath.com/"
},

{
    name: "NotebookLM",
    category: ["study"],
    purposes: [
        "Study & Notes",
        "Research",
        "Exam Preparation",
        "Learn a New Skill"
    ],
    price: "Free",
    priceType: "free",
    difficulty: "Beginner",
    description: "AI research and study assistant that helps users understand information from their own sources.",
    bestFor: "Studying and understanding your own notes and documents",
    rating: 4.7,
    website: "https://notebooklm.google.com/"
},

{
    name: "Quizlet",
    category: ["study"],
    purposes: [
        "Study & Notes",
        "Exam Preparation",
        "Learn a New Skill"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Learning platform with flashcards, practice activities and AI-powered study features.",
    bestFor: "Flashcards, revision and exam preparation",
    rating: 4.6,
    website: "https://quizlet.com/"
},

{
    name: "Khan Academy",
    category: ["study"],
    purposes: [
        "Math",
        "Exam Preparation",
        "Learn a New Skill",
        "Study & Notes"
    ],
    price: "Free",
    priceType: "free",
    difficulty: "Beginner",
    description: "Free educational platform offering lessons and practice across mathematics, science and other subjects.",
    bestFor: "Free structured learning and mathematics practice",
    rating: 4.8,
    website: "https://www.khanacademy.org/"
},

{
    name: "Google Gemini",
    category: ["study", "writing"],
    purposes: [
        "Math",
        "Study & Notes",
        "Research",
        "Exam Preparation",
        "Learn a New Skill"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI assistant that can help explain concepts, analyze information and support learning.",
    bestFor: "General-purpose AI study assistance",
    rating: 4.7,
    website: "https://gemini.google.com/"
},

{
    name: "Symbolab",
    category: ["study"],
    purposes: [
        "Math",
        "Exam Preparation",
        "Study & Notes"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Online mathematics solver providing step-by-step solutions and explanations.",
    bestFor: "Step-by-step mathematics solutions",
    rating: 4.7,
    website: "https://www.symbolab.com/"
},

{
    name: "Socratic",
    category: ["study"],
    purposes: [
        "Math",
        "Exam Preparation",
        "Study & Notes"
    ],
    price: "Free",
    priceType: "free",
    difficulty: "Beginner",
    description: "Learning app that helps students understand school subjects through explanations and educational resources.",
    bestFor: "Quick help with school and homework questions",
    rating: 4.5,
    website: "https://socratic.org/"
},
{
    name: "AdCreative.ai",
    category: ["ads"],
    purposes: [
        "Social Media Ad",
        "Product Advertisement",
        "Google Ad",
        "Facebook / Instagram Ad"
    ],
    price: "Paid + Free Trial",
    priceType: "trial",
    difficulty: "Beginner",
    description: "AI advertising platform for generating ad creatives, copy and marketing assets.",
    bestFor: "Creating and testing digital advertising creatives",
    rating: 4.7,
    website: "https://www.adcreative.ai/"
},

{
    name: "Creatify",
    category: ["ads", "video"],
    purposes: [
        "Video Advertisement",
        "Product Advertisement",
        "Social Media Ad",
        "Facebook / Instagram Ad"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI platform for creating short-form product advertising videos from product information.",
    bestFor: "Creating AI product advertisement videos",
    rating: 4.7,
    website: "https://creatify.ai/"
},

{
    name: "Predis.ai",
    category: ["ads"],
    purposes: [
        "Social Media Ad",
        "Product Advertisement",
        "Facebook / Instagram Ad"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI social media marketing platform for creating posts, creatives and advertising content.",
    bestFor: "Social media advertising and content creation",
    rating: 4.6,
    website: "https://predis.ai/"
},

{
    name: "Jasper",
    category: ["ads", "writing"],
    purposes: [
        "Social Media Ad",
        "Product Advertisement",
        "Google Ad",
        "Facebook / Instagram Ad"
    ],
    price: "Paid",
    priceType: "paid",
    difficulty: "Beginner",
    description: "AI marketing platform for creating advertising copy and campaign content.",
    bestFor: "Writing advertising copy and marketing campaigns",
    rating: 4.6,
    website: "https://www.jasper.ai/"
},

{
    name: "Copy.ai",
    category: ["ads", "writing"],
    purposes: [
        "Social Media Ad",
        "Product Advertisement",
        "Google Ad",
        "Facebook / Instagram Ad"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI marketing platform for creating sales copy, advertising content and campaign materials.",
    bestFor: "Ad copy and marketing content",
    rating: 4.6,
    website: "https://www.copy.ai/"
},

{
    name: "Canva",
    category: ["ads", "image", "video"],
    purposes: [
        "Video Advertisement",
        "Social Media Ad",
        "Product Advertisement",
        "Facebook / Instagram Ad",
        "Google Ad"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "Design platform for creating social media ads, promotional graphics and advertising videos.",
    bestFor: "Beginner-friendly visual ad creation",
    rating: 4.8,
    website: "https://www.canva.com/"
},

{
    name: "Meta AI Creative Tools",
    category: ["ads"],
    purposes: [
        "Social Media Ad",
        "Facebook / Instagram Ad",
        "Product Advertisement"
    ],
    price: "Free",
    priceType: "free",
    difficulty: "Intermediate",
    description: "AI-powered creative tools from Meta for creating and optimizing advertising content.",
    bestFor: "Advertising on Facebook and Instagram",
    rating: 4.5,
    website: "https://www.facebook.com/business/tools/ads-creative-tools"
},

{
    name: "Simplified",
    category: ["ads", "writing", "image"],
    purposes: [
        "Social Media Ad",
        "Product Advertisement",
        "Facebook / Instagram Ad",
        "Marketing Copy"
    ],
    price: "Free + Paid",
    priceType: "freemium",
    difficulty: "Beginner",
    description: "AI-powered marketing platform for creating copy, graphics, social content and advertising materials.",
    bestFor: "All-in-one social media marketing",
    rating: 4.5,
    website: "https://simplified.com/"
},
    // =========================================
    // 🎬 VIDEO TOOLS
    // =========================================

    {
        name: "HeyGen",
        category: ["video", "ads"],
        purposes: [
            "YouTube Video",
            "Advertisement",
            "Video Advertisement",
            "Faceless Video",
            "Animation"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI video platform for avatars, presenters, text-to-video and marketing videos.",
        rating: 4.8,
        bestFor: "AI avatar and marketing videos",
        website: "https://www.heygen.com/"
    },

    {
        name: "Synthesia",
        category: ["video", "ads"],
        purposes: [
            "YouTube Video",
            "Advertisement",
            "Video Advertisement",
            "Faceless Video"
        ],
        priceType: "paid",
        price: "Paid",
        difficulty: "Beginner",
        description: "Create professional AI presenter and avatar videos from text.",
        rating: 4.7,
        bestFor: "Business and presenter videos",
        website: "https://www.synthesia.io/"
    },

    {
        name: "Pika",
        category: ["video"],
        purposes: [
            "Animation",
            "Instagram Reel",
            "Advertisement"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI video generation and creative effects platform.",
        rating: 4.6,
        bestFor: "Creative short AI videos",
        website: "https://pika.art/"
    },

    {
        name: "Kling AI",
        category: ["video"],
        purposes: [
            "YouTube Video",
            "Instagram Reel",
            "Advertisement",
            "Animation"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI video generation platform for cinematic and realistic video creation.",
        rating: 4.7,
        bestFor: "Cinematic AI video",
        website: "https://klingai.com/"
    },

    {
        name: "Luma Dream Machine",
        category: ["video"],
        purposes: [
            "Animation",
            "Advertisement",
            "Instagram Reel"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI platform for generating creative videos from text and images.",
        rating: 4.6,
        bestFor: "Creative AI video generation",
        website: "https://lumalabs.ai/"
    },

    {
        name: "VEED",
        category: ["video", "ads"],
        purposes: [
            "YouTube Video",
            "Instagram Reel",
            "Advertisement",
            "Video Advertisement"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "Online video editor with AI-powered creation, captions and editing tools.",
        rating: 4.6,
        bestFor: "Easy online video editing",
        website: "https://www.veed.io/"
    },

    {
        name: "Descript",
        category: ["video", "writing"],
        purposes: [
            "YouTube Video",
            "Podcast",
            "Social Media Content"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI-powered video and audio editor that lets you edit media like a document.",
        rating: 4.6,
        bestFor: "Podcasts and video editing",
        website: "https://www.descript.com/"
    },

    {
        name: "CapCut",
        category: ["video", "ads"],
        purposes: [
            "Instagram Reel",
            "YouTube Video",
            "Advertisement",
            "Video Advertisement"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "Popular video editor with AI-powered effects, captions and creative tools.",
        rating: 4.7,
        bestFor: "Short-form social videos",
        website: "https://www.capcut.com/"
    },

    {
        name: "OpusClip",
        category: ["video"],
        purposes: [
            "Instagram Reel",
            "YouTube Video",
            "Faceless Video"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI tool that turns long videos into short social media clips.",
        rating: 4.6,
        bestFor: "Turning long videos into shorts",
        website: "https://www.opus.pro/"
    },


    // =========================================
    // 🎨 IMAGE TOOLS
    // =========================================

    {
        name: "Adobe Firefly",
        category: ["image", "ads"],
        purposes: [
            "AI Art",
            "Product Images",
            "Social Media Posts",
            "Photorealistic Images"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "Adobe's generative AI platform for creating and editing images and designs.",
        rating: 4.7,
        bestFor: "Professional AI design",
        website: "https://firefly.adobe.com/"
    },

    {
        name: "Ideogram",
        category: ["image"],
        purposes: [
            "AI Art",
            "Social Media Posts",
            "Logos & Designs",
            "Product Images"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI image generator known for strong typography and graphic design.",
        rating: 4.7,
        bestFor: "Images containing text",
        website: "https://ideogram.ai/"
    },

    {
        name: "Leonardo AI",
        category: ["image"],
        purposes: [
            "AI Art",
            "Product Images",
            "Photorealistic Images",
            "Social Media Posts"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "Creative AI platform for generating and editing high-quality visuals.",
        rating: 4.7,
        bestFor: "Creative image generation",
        website: "https://leonardo.ai/"
    },

    {
        name: "Recraft",
        category: ["image"],
        purposes: [
            "AI Art",
            "Logos & Designs",
            "Social Media Posts",
            "Product Images"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI design platform for generating images, vectors and brand graphics.",
        rating: 4.6,
        bestFor: "Graphic design and vectors",
        website: "https://www.recraft.ai/"
    },

    {
        name: "Playground AI",
        category: ["image"],
        purposes: [
            "AI Art",
            "Social Media Posts",
            "Product Images",
            "Photorealistic Images"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI image creation and editing platform for creative projects.",
        rating: 4.5,
        bestFor: "Beginner-friendly image creation",
        website: "https://playground.com/"
    },

    {
        name: "Microsoft Designer",
        category: ["image", "ads"],
        purposes: [
            "Social Media Posts",
            "AI Art",
            "Logos & Designs",
            "Product Images",
            "Social Media Ad"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI-powered graphic design tool for social posts, images and marketing graphics.",
        rating: 4.5,
        bestFor: "Quick social media designs",
        website: "https://designer.microsoft.com/"
    },


    // =========================================
    // 🌐 WEBSITE TOOLS
    // =========================================

    {
        name: "Wix AI",
        category: ["website"],
        purposes: [
            "Business Website",
            "Portfolio",
            "Landing Page",
            "E-commerce Website"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI-powered website builder for creating business websites and online stores.",
        rating: 4.7,
        bestFor: "Beginners building websites",
        website: "https://www.wix.com/"
    },

    {
        name: "Durable",
        category: ["website"],
        purposes: [
            "Business Website",
            "Landing Page"
        ],
        priceType: "paid",
        price: "Paid",
        difficulty: "Beginner",
        description: "AI website builder designed to generate business websites quickly.",
        rating: 4.5,
        bestFor: "Fast business websites",
        website: "https://durable.co/"
    },

    {
        name: "10Web",
        category: ["website"],
        purposes: [
            "Business Website",
            "E-commerce Website",
            "Landing Page"
        ],
        priceType: "paid",
        price: "Paid",
        difficulty: "Beginner",
        description: "AI-powered WordPress website builder and hosting platform.",
        rating: 4.5,
        bestFor: "AI-powered WordPress sites",
        website: "https://10web.io/"
    },

    {
        name: "Lovable",
        category: ["website", "coding"],
        purposes: [
            "Business Website",
            "Web App",
            "Landing Page",
            "Build an App"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI-powered platform for creating web applications using natural language.",
        rating: 4.7,
        bestFor: "Building apps with AI",
        website: "https://lovable.dev/"
    },

    {
        name: "Bolt",
        category: ["website", "coding"],
        purposes: [
            "Build a Website",
            "Build an App",
            "Web App",
            "Landing Page"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI development platform for building websites and applications from prompts.",
        rating: 4.6,
        bestFor: "Prompt-based app development",
        website: "https://bolt.new/"
    },

    {
        name: "v0",
        category: ["website", "coding"],
        purposes: [
            "Build a Website",
            "Build an App",
            "Web App",
            "Landing Page"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI-powered development platform for generating web interfaces and applications.",
        rating: 4.7,
        bestFor: "Generating modern web interfaces",
        website: "https://v0.dev/"
    },


    // =========================================
    // ✍️ WRITING
    // =========================================

    {
        name: "Copy.ai",
        category: ["writing", "ads"],
        purposes: [
            "Blog Articles",
            "Marketing Copy",
            "Social Media Content",
            "Social Media Ad"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI platform focused on marketing content, copywriting and business workflows.",
        rating: 4.6,
        bestFor: "Marketing copy",
        website: "https://www.copy.ai/"
    },

    {
        name: "Writesonic",
        category: ["writing", "ads"],
        purposes: [
            "Blog Articles",
            "Marketing Copy",
            "Social Media Content",
            "Research"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI writing and marketing platform for articles, content and campaigns.",
        rating: 4.6,
        bestFor: "AI marketing content",
        website: "https://writesonic.com/"
    },

    {
        name: "Rytr",
        category: ["writing"],
        purposes: [
            "Blog Articles",
            "Marketing Copy",
            "Emails",
            "Social Media Content"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "Simple AI writing assistant for creating marketing and everyday content.",
        rating: 4.5,
        bestFor: "Simple AI copywriting",
        website: "https://rytr.me/"
    },

    {
        name: "Grammarly",
        category: ["writing", "study"],
        purposes: [
            "Blog Articles",
            "Emails",
            "Marketing Copy",
            "Study & Notes"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI writing assistant for grammar, clarity, rewriting and communication.",
        rating: 4.7,
        bestFor: "Improving written communication",
        website: "https://www.grammarly.com/"
    },

    {
        name: "QuillBot",
        category: ["writing", "study"],
        purposes: [
            "Blog Articles",
            "Study & Notes",
            "Research"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI writing tool for paraphrasing, summarizing and improving text.",
        rating: 4.6,
        bestFor: "Paraphrasing and summarizing",
        website: "https://quillbot.com/"
    },

    {
        name: "Notion AI",
        category: ["writing", "study"],
        purposes: [
            "Study & Notes",
            "Research",
            "Blog Articles",
            "Social Media Content"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI productivity assistant built into Notion for writing, notes and organization.",
        rating: 4.6,
        bestFor: "AI-powered notes and productivity",
        website: "https://www.notion.so/product/ai"
    },


    // =========================================
    // 💻 CODING
    // =========================================

    {
        name: "GitHub Copilot",
        category: ["coding"],
        purposes: [
            "Write Code",
            "Debug Code",
            "Learn Programming",
            "Build an App"
        ],
        priceType: "paid",
        price: "Paid + Free options",
        difficulty: "Intermediate",
        description: "AI coding assistant integrated into popular development environments.",
        rating: 4.8,
        bestFor: "Everyday coding assistance",
        website: "https://github.com/features/copilot"
    },

    {
        name: "Windsurf",
        category: ["coding"],
        purposes: [
            "Write Code",
            "Debug Code",
            "Build a Website",
            "Build an App"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI-powered coding environment designed for agentic software development.",
        rating: 4.7,
        bestFor: "AI-assisted software development",
        website: "https://windsurf.com/"
    },

    {
        name: "Replit",
        category: ["coding", "website"],
        purposes: [
            "Write Code",
            "Build a Website",
            "Build an App",
            "Learn Programming"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "Online development platform with AI assistance for building and deploying software.",
        rating: 4.6,
        bestFor: "Building apps in the browser",
        website: "https://replit.com/"
    },

    {
        name: "Tabnine",
        category: ["coding"],
        purposes: [
            "Write Code",
            "Debug Code",
            "Learn Programming"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI coding assistant providing code completion and development assistance.",
        rating: 4.5,
        bestFor: "AI code completion",
        website: "https://www.tabnine.com/"
    },

    {
        name: "Amazon Q Developer",
        category: ["coding"],
        purposes: [
            "Write Code",
            "Debug Code",
            "Build an App",
            "Learn Programming"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI assistant for software development and AWS-related coding workflows.",
        rating: 4.5,
        bestFor: "AWS and software development",
        website: "https://aws.amazon.com/q/developer/"
    },


    // =========================================
    // 📚 STUDY / RESEARCH
    // =========================================

    {
        name: "NotebookLM",
        category: ["study", "writing"],
        purposes: [
            "Study & Notes",
            "Research",
            "Exam Preparation",
            "Learn a New Skill"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI research and study assistant that works with your own source material.",
        rating: 4.8,
        bestFor: "Studying from your own documents",
        website: "https://notebooklm.google.com/"
    },

    {
        name: "Google Gemini",
        category: ["study", "writing", "coding"],
        purposes: [
            "Study & Notes",
            "Research",
            "Math",
            "Exam Preparation",
            "Learn a New Skill",
            "Write Code"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "General-purpose AI assistant for research, learning, writing and coding.",
        rating: 4.8,
        bestFor: "General AI assistance and study",
        website: "https://gemini.google.com/"
    },

    {
        name: "WolframAlpha",
        category: ["study"],
        purposes: [
            "Math",
            "Research",
            "Exam Preparation"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "Computational knowledge engine especially useful for mathematics and science.",
        rating: 4.7,
        bestFor: "Math and scientific calculations",
        website: "https://www.wolframalpha.com/"
    },

    {
        name: "Quizlet",
        category: ["study"],
        purposes: [
            "Study & Notes",
            "Exam Preparation",
            "Learn a New Skill"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "Learning platform with AI-powered study and flashcard features.",
        rating: 4.6,
        bestFor: "Flashcards and exam preparation",
        website: "https://quizlet.com/"
    },

    {
        name: "Elicit",
        category: ["study"],
        purposes: [
            "Research",
            "Study & Notes",
            "Learn a New Skill"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Intermediate",
        description: "AI research assistant designed to help find and analyze academic papers.",
        rating: 4.6,
        bestFor: "Academic research",
        website: "https://elicit.com/"
    },

    {
        name: "Consensus",
        category: ["study"],
        purposes: [
            "Research",
            "Study & Notes",
            "Learn a New Skill"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI research search engine focused on evidence from scientific papers.",
        rating: 4.6,
        bestFor: "Research backed by scientific papers",
        website: "https://consensus.app/"
    },


    // =========================================
    // 📊 PRESENTATIONS
    // =========================================

    {
        name: "Beautiful.ai",
        category: ["presentation"],
        purposes: [
            "Business Presentation",
            "School Project",
            "Pitch Deck",
            "Marketing Presentation"
        ],
        priceType: "paid",
        price: "Paid",
        difficulty: "Beginner",
        description: "AI presentation platform with automated slide design.",
        rating: 4.6,
        bestFor: "Professional presentations",
        website: "https://www.beautiful.ai/"
    },

    {
        name: "Tome",
        category: ["presentation"],
        purposes: [
            "Business Presentation",
            "Pitch Deck",
            "Marketing Presentation"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI-powered storytelling and presentation platform.",
        rating: 4.5,
        bestFor: "AI-generated pitch decks",
        website: "https://tome.app/"
    },

    {
        name: "SlidesAI",
        category: ["presentation"],
        purposes: [
            "School Project",
            "Educational Slides",
            "Business Presentation"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI tool for turning text into presentation slides.",
        rating: 4.5,
        bestFor: "Quick presentation generation",
        website: "https://www.slidesai.io/"
    },

    {
        name: "Pitch",
        category: ["presentation"],
        purposes: [
            "Business Presentation",
            "Pitch Deck",
            "Marketing Presentation"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "Collaborative presentation platform with AI-powered creation features.",
        rating: 4.5,
        bestFor: "Business and team presentations",
        website: "https://pitch.com/"
    },


    // =========================================
    // 📢 ADS / MARKETING
    // =========================================

    {
        name: "Ocoya",
        category: ["ads", "writing"],
        purposes: [
            "Social Media Ad",
            "Facebook / Instagram Ad",
            "Social Media Content",
            "Product Advertisement"
        ],
        priceType: "paid",
        price: "Paid",
        difficulty: "Beginner",
        description: "AI social media marketing platform for creating, scheduling and managing content.",
        rating: 4.5,
        bestFor: "Social media marketing",
        website: "https://www.ocoya.com/"
    },

    {
        name: "Copy.ai",
        category: ["ads", "writing"],
        purposes: [
            "Social Media Ad",
            "Product Advertisement",
            "Google Ad",
            "Facebook / Instagram Ad"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI marketing platform for creating advertising and campaign copy.",
        rating: 4.6,
        bestFor: "Marketing copy and campaigns",
        website: "https://www.copy.ai/"
    },

    {
        name: "AdCreative.ai",
        category: ["ads"],
        purposes: [
            "Social Media Ad",
            "Product Advertisement",
            "Google Ad",
            "Facebook / Instagram Ad"
        ],
        priceType: "trial",
        price: "Paid + Free Trial",
        difficulty: "Beginner",
        description: "AI platform for generating advertising creatives and campaign assets.",
        rating: 4.7,
        bestFor: "Performance ad creatives",
        website: "https://www.adcreative.ai/"
    },

    {
        name: "Predis.ai",
        category: ["ads"],
        purposes: [
            "Social Media Ad",
            "Product Advertisement",
            "Facebook / Instagram Ad"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI marketing platform for social media posts, creatives and advertising content.",
        rating: 4.6,
        bestFor: "Social media advertising",
        website: "https://predis.ai/"
    },

    {
        name: "Creatify",
        category: ["ads", "video"],
        purposes: [
            "Video Advertisement",
            "Product Advertisement",
            "Social Media Ad",
            "Facebook / Instagram Ad"
        ],
        priceType: "freemium",
        price: "Free + Paid",
        difficulty: "Beginner",
        description: "AI platform for creating product advertising videos from product information.",
        rating: 4.7,
        bestFor: "Product ad videos",
        website: "https://creatify.ai/"
    },


];

/* =========================================
   ⭐ USER RATING SYSTEM
========================================= */

/* =========================================
   ⭐ LOAD SAVED USER RATINGS
========================================= */


const categoryData = {

    video: {
        title: "What type of video do you want to create?",
        options: [
            "YouTube Video",
            "Instagram Reel",
            "Advertisement",
            "Faceless Video",
            "Animation"
        ]
    },

    image: {
        title: "What do you want to create?",
        options: [
            "AI Art",
            "Product Images",
            "Social Media Posts",
            "Photorealistic Images",
            "Logos & Designs"
        ]
    },

    website: {
        title: "What type of website do you want to create?",
        options: [
            "Business Website",
            "Portfolio",
            "Landing Page",
            "E-commerce Website",
            "Web App"
        ]
    },

    writing: {
        title: "What do you want AI to write?",
        options: [
            "Blog Articles",
            "Social Media Content",
            "Marketing Copy",
            "Emails",
            "Stories"
        ]
    },

    presentation: {
        title: "What type of presentation do you need?",
        options: [
            "Business Presentation",
            "School Project",
            "Pitch Deck",
            "Educational Slides",
            "Marketing Presentation"
        ]
    },

    coding: {
        title: "What do you want help with?",
        options: [
            "Build a Website",
            "Write Code",
            "Debug Code",
            "Learn Programming",
            "Build an App"
        ]
    },

    study: {
        title: "What do you want help with?",
        options: [
            "Study & Notes",
            "Research",
            "Math",
            "Exam Preparation",
            "Learn a New Skill"
        ]
    },

    ads: {
        title: "What type of advertisement do you want to create?",
        options: [
            "Video Advertisement",
            "Social Media Ad",
            "Product Advertisement",
            "Google Ad",
            "Facebook / Instagram Ad"
        ]
    }

};


let selectedCategory = "";
let selectedPurpose = "";
let selectedExperience = "";

function startFinder() {

    document.querySelector(".categories").scrollIntoView({
        behavior: "smooth"
    });

}


function selectCategory(category) {

    selectedCategory = category;

    const data = categoryData[category];

    document.querySelector(".categories").innerHTML = `

        <div class="finder-box">

            <h2>${data.title}</h2>

            <div class="option-grid">

                ${data.options.map(option => `
                    
                    <button
                        class="option-button"
                        onclick="selectPurpose('${option}')">
                        
                        ${option}

                    </button>

                `).join("")}

            </div>

        </div>

    `;

    document.querySelector(".categories").scrollIntoView({
        behavior: "smooth"
    });

}


function selectPurpose(purpose) {

    selectedPurpose = purpose;

    document.querySelector(".categories").innerHTML = `

        <div class="finder-box">

            <h2>What's your experience level?</h2>

            <div class="option-grid">

                <button class="option-button"
                    onclick="showBudget('Beginner')">
                    🟢 Beginner
                </button>

                <button class="option-button"
                    onclick="showBudget('Intermediate')">
                    🟡 Intermediate
                </button>

                <button class="option-button"
                    onclick="showBudget('Advanced')">
                    🔴 Advanced
                </button>

            </div>

        </div>

    `;

}


function showBudget(experience) {

    selectedExperience = experience;

    document.querySelector(".categories").innerHTML = `

        <div class="finder-box">

            <h2>What's your monthly budget?</h2>

            <p class="finder-subtitle">
                Don't worry — we'll also show free options.
            </p>

            <div class="option-grid">

                <button class="option-button"
                    onclick="showResults('Free')">
                    🆓 Free
                </button>

                <button class="option-button"
                    onclick="showResults('Under $10')">
                    💵 Under $10
                </button>

                <button class="option-button"
                    onclick="showResults('$10 - $30')">
                    💳 $10 - $30
                </button>

                <button class="option-button"
                    onclick="showResults('$30+')">
                    💎 $30+
                </button>

            </div>

        </div>

    `;

}

function showResults(budget) {

    window.currentBudget = budget;

    const matchingTools = aiTools.filter(tool => {

        return tool.category.includes(selectedCategory) &&
               tool.purposes.includes(selectedPurpose);

    });


   const scoredTools = matchingTools.map(tool => {

    let score = 0;


    // 🎯 TASK MATCH
    score += 40;


    // ⭐ TOOL QUALITY
    score += (tool.rating / 5) * 15;

    // 🧑‍💻 EXPERIENCE MATCH

if (selectedExperience === tool.difficulty) {

    score += 20;

}

else if (
    selectedExperience === "Beginner" &&
    tool.difficulty === "Intermediate"
) {

    score += 12;

}

else if (
    selectedExperience === "Intermediate" &&
    tool.difficulty === "Beginner"
) {

    score += 15;

}

else if (
    selectedExperience === "Advanced" &&
    tool.difficulty === "Intermediate"
) {

    score += 15;

}

else {

    score += 5;

}


    // 💰 BUDGET MATCH

    if (budget === "Most Affordable") {

        if (tool.priceType === "free") {
            score += 35;
        }

        else if (tool.priceType === "freemium") {
            score += 30;
        }

        else if (tool.priceType === "trial") {
            score += 20;
        }

        else {
            score += 0;
        }

    }

    else if (budget === "Most Reasonable") {

        if (tool.priceType === "free") {
            score += 35;
        }

        else if (tool.priceType === "freemium") {
            score += 32;
        }

        else if (tool.priceType === "trial") {
            score += 25;
        }

        else {
            score += 15;
        }

    }

    else if (budget === "Pro") {

        if (
            tool.priceType === "free" ||
            tool.priceType === "freemium"
        ) {
            score += 30;
        }

        else if (tool.priceType === "trial") {
            score += 25;
        }

        else {
            score += 35;
        }

    }

    else if (budget === "Premium") {

        if (tool.priceType === "paid") {
            score += 35;
        }

        else if (tool.priceType === "freemium") {
            score += 30;
        }

        else if (tool.priceType === "trial") {
            score += 25;
        }

        else {
            score += 25;
        }

    }


    // 📊 FINAL MATCH SCORE

    return {
        ...tool,
        matchScore: Math.min(
            Math.round((score / 130) * 100),
            100
        )
    };

});


    const results = scoredTools
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 5);


    let toolsHTML = "";


    if (results.length === 0) {

        toolsHTML = `
            <div class="no-results">

                <h3>😕 No exact match found</h3>

                <p>
                    We couldn't find a tool matching all your requirements.
                    Try another option.
                </p>

            </div>
        `;

    }


    else {

        results.forEach((tool, index) => {

            const medals = [
                "🥇",
                "🥈",
                "🥉",
                "4️⃣",
                "5️⃣"
            ];
            let recommendationLabel = "";

if (index === 0) {

    recommendationLabel = `
        <span class="recommendation-badge">
            🏆 Best Overall
        </span>
    `;

}

else if (
    tool.priceType === "free" ||
    tool.priceType === "freemium"
) {

    recommendationLabel = `
        <span class="recommendation-badge">
            💰 Great Value
        </span>
    `;

}


            toolsHTML += `

                <div class="tool-card">

                    <div class="tool-rank">

                        ${medals[index]}

                    </div>


                    <div class="tool-information">

                        <div class="tool-title-row">

                           <h3>
                               ${tool.name}
                           </h3>

                           ${recommendationLabel}

                           <span class="match-score">
                           ${tool.matchScore}% Match
                           </span>

                        </div>

                        <div class="tool-rating">

    ⭐ ${tool.userRating.toFixed(1)}/5

    <span class="rating-count">

        ${tool.ratingCount} ${
            tool.ratingCount === 1 ? "rating" : "ratings"
        }

    </span>

</div>
                          
                         <div class="user-rating">

    <p>Rate this tool:</p>

    <div class="stars">

        ${[1, 2, 3, 4, 5].map(star => `

            <button
                class="star-button ${tool.userRating >= star ? "active" : ""}"
                onclick="rateTool('${tool.name}', ${star})">

                ★

            </button>

        `).join("")}

    </div>

</div>


                        <p>

                              ${tool.description}

                        </p>

                        <div class="tool-best-for">

    🎯 <strong>Best for:</strong>
    ${tool.bestFor || "General AI use"}

</div>

<div class="tool-match-reason">

    ✅ Recommended because it matches your
    <strong>${selectedPurpose}</strong> requirement.

</div>

                        <div class="tool-details">

                            <span>
                                💰 ${tool.price}
                            </span>

                            <span>
                                🎯 ${tool.difficulty}
                            </span>

                        </div>


                        <a
                            href="${tool.website}"
                            target="_blank"
                            class="try-button">

                            Try ${tool.name} →

                        </a>

                    </div>

                </div>

            `;

        });

    }


    document.querySelector(".categories").innerHTML = `

        <div class="results-box">

            <div class="results-icon">

                🎯

            </div>


            <h2>

                Your Best AI Tools

            </h2>


            <p>

                We matched tools based on:

                <strong>
                    ${selectedPurpose}
                </strong>

                ·

                <strong>
                    ${selectedExperience}
                </strong>

                ·

                <strong>
                    ${budget}
                </strong>

            </p>


            ${toolsHTML}


            <button
                class="restart-button"
                onclick="location.reload()">

                🔄 Start Again

            </button>

        </div>

    `;

}
function searchTools() {

    const searchInput = document.getElementById("toolSearch");

    const searchText = searchInput.value.toLowerCase().trim();


    if (searchText === "") {

        alert("Please tell us what you want to create or do.");

        return;

    }


    // ==========================================
    // SMART CATEGORY KEYWORDS
    // ==========================================

    const intentKeywords = {

        video: [
            "video",
            "videos",
            "youtube",
            "reel",
            "reels",
            "short",
            "shorts",
            "film",
            "animation",
            "faceless",
            "video editing"
        ],


        image: [
            "image",
            "images",
            "picture",
            "pictures",
            "photo",
            "photos",
            "art",
            "artwork",
            "illustration",
            "drawing",
            "design"
        ],


        website: [
            "website",
            "websites",
            "webpage",
            "web page",
            "site",
            "online store",
            "ecommerce",
            "e-commerce",
            "shop",
            "store",
            "landing page",
            "portfolio"
        ],


        writing: [
            "write",
            "writing",
            "blog",
            "article",
            "articles",
            "content",
            "copywriting",
            "copy",
            "email",
            "emails",
            "story",
            "stories"
        ],


        presentation: [
            "presentation",
            "presentations",
            "slides",
            "slide",
            "ppt",
            "powerpoint",
            "pitch deck",
            "school project"
        ],


        coding: [
            "code",
            "coding",
            "programming",
            "program",
            "developer",
            "debug",
            "debugging",
            "app",
            "application",
            "software",
            "html",
            "css",
            "javascript",
            "python"
        ],


        study: [
            "study",
            "studying",
            "learn",
            "learning",
            "math",
            "mathematics",
            "physics",
            "chemistry",
            "exam",
            "exams",
            "homework",
            "research",
            "notes",
            "education"
        ],


        ads: [
            "ad",
            "ads",
            "advertisement",
            "advertisements",
            "advertising",
            "marketing",
            "campaign",
            "facebook ad",
            "instagram ad",
            "google ad",
            "product ad",
            "promotional"
        ]

    };


    // ==========================================
    // DETECT CATEGORY
    // ==========================================

    let detectedCategories = [];


    for (const category in intentKeywords) {

        const keywords = intentKeywords[category];


        const found = keywords.some(keyword =>
            searchText.includes(keyword)
        );


        if (found) {

            detectedCategories.push(category);

        }

    }


    // ==========================================
    // DETECT BUDGET
    // ==========================================

    let detectedBudget = null;


    if (
        searchText.includes("free") ||
        searchText.includes("no cost") ||
        searchText.includes("without paying") ||
        searchText.includes("zero cost")
    ) {

        detectedBudget = "Free";

    }


    else if (
        searchText.includes("under $10") ||
        searchText.includes("less than $10") ||
        searchText.includes("below $10")
    ) {

        detectedBudget = "Under $10";

    }


    else if (
        searchText.includes("$10") ||
        searchText.includes("$20") ||
        searchText.includes("$30") ||
        searchText.includes("10 to 30")
    ) {

        detectedBudget = "$10 - $30";

    }


    else if (
        searchText.includes("$30+") ||
        searchText.includes("over $30") ||
        searchText.includes("more than $30") ||
        searchText.includes("premium")
    ) {

        detectedBudget = "$30+";

    }


    // ==========================================
    // SCORE EVERY TOOL
    // ==========================================

    const scoredTools = aiTools.map(tool => {

        let score = 0;


        const toolText = (

            tool.name + " " +
            tool.description + " " +
            (tool.bestFor || "") + " " +
            tool.category.join(" ") + " " +
            tool.purposes.join(" ")

        ).toLowerCase();


        // CATEGORY MATCH

        detectedCategories.forEach(category => {

            if (tool.category.includes(category)) {

                score += 40;

            }

        });


        // KEYWORD MATCH

        Object.values(intentKeywords)
            .flat()
            .forEach(keyword => {

                if (
                    searchText.includes(keyword) &&
                    toolText.includes(keyword)
                ) {

                    score += 10;

                }

            });


        // PURPOSE MATCH

        tool.purposes.forEach(purpose => {

            const purposeWords = purpose
                .toLowerCase()
                .split(/\s+/);


            purposeWords.forEach(word => {

                if (
                    word.length > 2 &&
                    searchText.includes(word)
                ) {

                    score += 15;

                }

            });

        });


        // ==========================================
        // BUDGET MATCH
        // ==========================================

        if (detectedBudget === "Free") {

            if (tool.priceType === "free") {

                score += 40;

            }

            else if (tool.priceType === "freemium") {

                score += 30;

            }

            else if (tool.priceType === "trial") {

                score += 15;

            }

        }


        else if (detectedBudget === "Under $10") {

            if (tool.priceType === "free") {

                score += 40;

            }

            else if (tool.priceType === "freemium") {

                score += 35;

            }

            else if (tool.priceType === "trial") {

                score += 25;

            }

            else {

                score += 10;

            }

        }


        else if (detectedBudget === "$10 - $30") {

            if (
                tool.priceType === "free" ||
                tool.priceType === "freemium"
            ) {

                score += 25;

            }

            else if (tool.priceType === "trial") {

                score += 20;

            }

            else {

                score += 35;

            }

        }


        else if (detectedBudget === "$30+") {

            if (tool.priceType === "paid") {

                score += 40;

            }

            else if (tool.priceType === "freemium") {

                score += 30;

            }

            else if (tool.priceType === "trial") {

                score += 20;

            }

        }


        // ==========================================
        // RATING BONUS
        // ==========================================

        score += (tool.rating / 5) * 10;


        return {

            ...tool,

            searchScore: score

        };

    });


    // ==========================================
    // SORT RESULTS
    // ==========================================

    const results = scoredTools

        .filter(tool => tool.searchScore > 10)

        .sort((a, b) => b.searchScore - a.searchScore)

        .slice(0, 5);


    showSearchResults(results, searchText);

}
function showSearchResults(results, searchText) {

    let toolsHTML = "";


    if (results.length === 0) {

        toolsHTML = `

            <div class="no-results">

                <h3>😕 No matching tools found</h3>

                <p>
                    We couldn't find a tool for
                    "<strong>${searchText}</strong>".
                </p>

                <p>
                    Try something like:
                    <br>
                    "make YouTube videos"
                    <br>
                    "create AI images"
                    <br>
                    "build a website"
                    <br>
                    "study math"
                    <br>
                    "create advertisements"
                </p>

            </div>

        `;

    }


    else {

        results.forEach((tool, index) => {

            const medals = [
                "🥇",
                "🥈",
                "🥉",
                "4️⃣",
                "5️⃣"
            ];


            toolsHTML += `

                <div class="tool-card">

                    <div class="tool-rank">

                        ${medals[index]}

                    </div>


                    <div class="tool-information">


                        <div class="tool-title-row">

                            <h3>
                                ${tool.name}
                            </h3>


                            <span class="match-score">

                                ⭐ ${tool.rating}/5

                            </span>

                        </div>


                        <p>

                            ${tool.description}

                        </p>


                        <div class="tool-best-for">

                            🎯 <strong>Best for:</strong>

                            ${tool.bestFor || "General AI use"}

                        </div>


                        <div class="tool-details">

                            <span>

                                💰 ${tool.price}

                            </span>


                            <span>

                                🎯 ${tool.difficulty}

                            </span>

                        </div>


                        <a
                            href="${tool.website}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="try-button"
                        >

                            Try ${tool.name} →

                        </a>


                    </div>

                </div>

            `;

        });

    }


    document.querySelector(".categories").innerHTML = `

        <div class="results-box">

            <div class="results-icon">

                🔍

            </div>


            <h2>

                AI Tools For You

            </h2>


            <p>

                Results for:

                <strong>
                    "${searchText}"
                </strong>

            </p>


            ${toolsHTML}


            <button
                class="restart-button"
                onclick="location.reload()"
            >

                🔄 Start Again

            </button>


        </div>

    `;


    document
        .querySelector(".categories")
        .scrollIntoView({
            behavior: "smooth"
        });

}
/* =========================================
   ⭐ RATE A TOOL
========================================= */

async function rateTool(toolName, selectedRating) {

    const tool = aiTools.find(
        item => item.name === toolName
    );

    if (!tool) {
        console.error("Tool not found!");
        return;
    }


    // ⭐ Prevent this browser from rating the same tool twice

    const ratingKey = "rated_" + toolName;

    if (localStorage.getItem(ratingKey)) {

        return;

    }


    try {

        // ⭐ Save the rating to Supabase

        const { error } = await supabaseClient
            .from("ratings")
            .insert({

                tool_name: toolName,
                rating: selectedRating

            });


        if (error) {

            console.error(
                "Rating could not be saved:",
                error
            );

            alert("Could not save your rating. Please try again.");

            return;

        }


        // ⭐ Remember that THIS browser has rated this tool

        localStorage.setItem(
            ratingKey,
            "true"
        );


        // ⭐ Reload all ratings from Supabase

        await loadRatings();


        // ⭐ Refresh the results

        showResults(window.currentBudget);


    } catch (error) {

        console.error(
            "Rating error:",
            error
        );

        alert(
            "Something went wrong while saving your rating."
        );

    }

}

async function loadRatings() {

    const { data, error } = await supabaseClient
        .from("ratings")
        .select("tool_name, rating");


    if (error) {

        console.error(
            "Could not load ratings:",
            error
        );

        return;

    }


    // Reset ratings

    aiTools.forEach(tool => {

        tool.userRating = 0;
        tool.ratingCount = 0;

    });


    // Calculate average rating for each tool

    data.forEach(row => {

        const tool = aiTools.find(
            item => item.name === row.tool_name
        );


        if (!tool) {
            return;
        }


        if (!tool._ratings) {

            tool._ratings = [];

        }


        tool._ratings.push(
            row.rating
        );

    });


    // Calculate averages

    aiTools.forEach(tool => {

        if (
            tool._ratings &&
            tool._ratings.length > 0
        ) {

            const total =
                tool._ratings.reduce(
                    (sum, rating) =>
                        sum + rating,
                    0
                );


            tool.userRating =
                total /
                tool._ratings.length;


            tool.ratingCount =
                tool._ratings.length;

        }

        else {

            tool.userRating = 0;
            tool.ratingCount = 0;

        }

    });

}
loadRatings();
