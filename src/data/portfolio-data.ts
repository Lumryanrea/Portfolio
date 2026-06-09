export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  detailImages?: string[];
  overview?: string;
  objectives?: string[];
  highlights?: string[];
  businessImpact?: string[];
  technicalSummary?: string[];
  outcome?: string;
  liveLink?: string;
}

export interface Certification {
  name: string;
  badge: string;
  organization: string;
}

export interface Skill {
  name: string;
  years: string;
}

export const portfolioData = {
  name: "OKANLAWON UMAR",
  title: "Data Analyst | Business Intelligence",
  profileImage: "/images/profile.jpg",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/lumryanrea/",
    email: "mailto:umarlanre04@gmail.com"
  },
  resumeLink: "https://drive.google.com/file/d/1NMFxYg2ptvTcmjIcB91hFYezZcwXvjLk/view?usp=drive_link",
  
  aboutMe: {
    intro: "Hi, I am Umar, a Business Intelligence Analyst focused on turning complexity into clarity.",
    paragraphs: [
      "I help businesses move from manual reporting to automated dashboards that connect directly to their data and deliver real-time insight. My work centers on revenue analysis, pricing influence, contribution to growth, and performance optimization.",
      "I build analytics systems that explain what is happening and why it matters."
    ]
  },
  
  techStack: {
    technologies: [
      { name: "SQL", icon: "database" },
      { name: "Excel", icon: "spreadsheet" },
      { name: "Power BI", icon: "barChart" },
      { name: "Python", icon: "code" }
    ],
    skills: [
      { name: "Data Modeling & Visual Storytelling", years: "1+ yrs" },
      { name: "Teaching & Technical Communication", years: "2+ yrs" },
      { name: "Business Intelligence Development", years: "1+ yrs" },
      { name: "Tech Ecosystem Knowledge", years: "3+ yrs" }
    ] as Skill[]
  },
  
  projects: [
    {
      id: "personal-finance-tracker",
      title: "PERSONAL FINANCE TRACKER",
      description: "An automated Excel-based personal finance tracking system designed to accurately capture income, expenses, savings, and monthly financial performance. This turns raw transactions into clear spending insights.",
      tech: ["Excel", "Power Query", "VBA"],
      image: "/images/finance-dashboard.png",
      detailImages: ["/images/finance-dashboard.png"],
      overview: "This project built an automated personal finance tracker in Excel, designed to eliminate manual data entry and provide real-time visibility into income, expenses, and savings performance. The goal was to make financial health as easy to read as a dashboard.",
      objectives: [
        "Automate financial data capture and calculations to eliminate manual errors",
        "Create clear visibility into spending patterns across categories",
        "Track savings rate and monthly financial health over time",
        "Build a reusable, low-maintenance system for ongoing personal use"
      ],
      highlights: [
        "Structured input tables with data validation and protected formula logic",
        "Automated calculations and summaries via Excel formulas and VBA macros",
        "Dynamic dashboard for tracking income vs. expense trends month-over-month",
        "Power Query used to clean and reshape raw transaction data automatically"
      ],
      businessImpact: [
        "Eliminated manual data entry errors through automated input validation",
        "Provided clear insights into spending categories and savings performance",
        "Reduced time spent on monthly financial review from hours to minutes",
        "Created a repeatable framework applicable to small business bookkeeping"
      ],
      technicalSummary: [
        "Tools: Excel, Power Query, VBA",
        "Architecture: Structured input tables feeding a summary layer and dynamic dashboard",
        "Automation: VBA macros handle data refresh and report generation",
        "Data Transformation: Power Query pipelines clean and reshape raw transaction exports"
      ],
      outcome: "The tracker demonstrated that powerful financial visibility doesn't require expensive tools. A well-structured Excel workbook with automation can deliver the same clarity as a dedicated finance app, while remaining fully customizable."
    },
    {
      id: "real-estate-analysis",
      title: "REAL ESTATE ANALYSIS",
      description: "A property and transaction analytics dashboard that uncovers pricing trends, market performance drivers, and segment comparisons. This gives stakeholders the clarity to make confident, data-backed decisions.",
      tech: ["Excel", "PowerPoint"],
      image: "/images/realestate-dashboard.png",
      detailImages: ["/images/realestate-dashboard.png", "/images/realestate-revenue.png", "/images/realestate-insights.png", "/images/realestate-assets.png"],
      overview: "This real estate analytics project transformed raw property and transaction data into an interactive dashboard, making it easy to identify what drives pricing, where the market is moving, and which segments outperform. It was designed for both analytical depth and stakeholder accessibility.",
      objectives: [
        "Identify key pricing trends and the factors that drive property value",
        "Support data-driven decision-making for buyers, sellers, and agents",
        "Enable quick-reference trend assessment without requiring technical skill",
        "Compare performance across property types, locations, and time periods"
      ],
      highlights: [
        "Data cleaning and structural organization to ensure reliable analysis",
        "Analytical dashboard views for pricing trends, volume tracking, and segment comparison",
        "Comparative analysis across property types and geographic segments",
        "KPI visuals designed for non-technical stakeholder consumption"
      ],
      businessImpact: [
        "Clarified the factors most strongly influencing property values in the dataset",
        "Enabled stakeholders to assess market trends at a glance without analyst support",
        "Reduced time-to-insight for pricing decisions through self-service dashboard design",
        "Provided a repeatable analytical framework for ongoing market monitoring"
      ],
      technicalSummary: [
        "Tools: Excel, Power BI",
        "Data Preparation: Cleaning, normalization, and feature structuring in Excel",
        "Visualization: Power BI dashboard with interactive filters by location, type, and period",
        "Design principle: Analyst-level depth surfaced through an executive-ready interface"
      ],
      outcome: "This project showed how structured data preparation combined with thoughtful dashboard design can turn messy property records into a clear decision-support tool. It bridges the gap between raw data and real business judgment.",
    },
    {
      id: "agricultural-production",
      title: "AGRICULTURAL PRODUCTION ANALYSIS",
      description: "A farm-level analytics project analyzing crop yield efficiency across different farming practices, soil types, irrigation methods, and seasons. This enables data-driven resource allocation and farm performance optimization.",
      tech: ["Excel"],
      image: "/images/agriculture-dashboard.png",
      detailImages: ["/images/agriculture-dashboard.png"],
      overview: "This project analyzed agricultural production data to understand farm performance, resource utilization, and yield efficiency across different crops, soil types, irrigation methods, and seasons. The goal was to transform raw farm-level data into actionable insights for decision-making.",
      objectives: [
        "Evaluate crop yield performance across multiple farms",
        "Analyze efficiency of key agricultural inputs (water, fertilizer, pesticide, land)",
        "Identify relationships between farming practices and productivity",
        "Compare irrigation methods, soil types, and seasonal effects",
        "Build a clear KPI-driven dashboard for decision support"
      ],
      highlights: [
        "KPI cards tracking total farms, total yield, water usage, average yield per farm, and yield per acre",
        "Crop performance comparison showing total vs. average yield across varieties",
        "Irrigation method efficiency analysis revealing performance gaps",
        "Soil type vs. yield distribution analysis",
        "Water usage vs. crop yield relationship through scatter analysis",
        "Farm efficiency ranking for prioritized intervention"
      ],
      businessImpact: [
        "Helps agricultural agencies identify high-performing and inefficient farms for targeted support",
        "Supports data-driven allocation of water and farming resources to maximize ROI",
        "Enables optimization of crop selection based on yield efficiency and local conditions",
        "Improves sustainability by highlighting resource-intensive practices that need optimization",
        "Provides actionable insights for policy adjustments and farm-level improvements"
      ],
      technicalSummary: [
        "Tools: Microsoft Excel",
        "Techniques: Pivot Tables, calculated fields, data aggregation",
        "Feature Engineering: Yield efficiency metrics (per acre, per unit water, per unit fertilizer, per unit pesticide)",
        "Analysis: Comparative performance analysis across categorical variables (irrigation, soil type, season)",
        "Data Modeling: Farm-level structured dataset with multiple input-output relationships"
      ],
      outcome: "The analysis identified farms achieving high yield with lower resource usage and revealed significant differences in efficiency across irrigation methods and soil types. Key finding: yield is driven more by efficiency than farm size alone. Delivered an interactive Excel dashboard for exploratory decision-making and resource optimization."
    },
    {
      id: "footwear-sales",
      title: "FOOTWEAR SALES ANALYSIS",
      description: "A commercial analytics project that transformed flat sports footwear sales data into a star schema model. This revealed that revenue is high-price-band driven and gave brands the intelligence to act on it.",
      tech: ["Power BI", "DAX", "Power Query", "Business Intelligence"],
      image: "/images/footwear-overview.png",
      detailImages: ["/images/footwear-overview.png", "/images/footwear-growth.png", "/images/footwear-Market.png", "/images/footwear-pricing.png"],
      liveLink: "https://app.powerbi.com/view?r=eyJrIjoiMDlkNzEyMWQtZDMxYi00ZWRhLWJhY2YtZDQ4YzRkZDBkNDc0IiwidCI6IjgzYTc4NThjLTlmMzktNGQ0Yi04MjY4LWEyZDkxMmRjNGM1OCJ9",
      overview: "This project analyzed global sports footwear sales across six major brands (Nike, Adidas, Puma, Reebok, ASICS, New Balance) from 2018-2026. The core challenge was transforming unstructured flat data into a proper star schema to enable reliable revenue attribution, year-on-year analysis, and pricing intelligence across markets.",
      objectives: [
        "Transform flat, unstructured sales data into a clean star schema data model",
        "Analyze revenue distribution across price bands, brands, and geographies",
        "Identify year-on-year growth drivers and brand-level performance drag",
        "Expose pricing and discount patterns to support strategic differentiation"
      ],
      highlights: [
        "Converted a single flat table into a star schema with dedicated fact and dimension tables",
        "Four interactive dashboard pages: Commercial Overview, Growth Analysis, Market & Customer Behavior, Pricing & Discount Strategy",
        "Key finding: premium price band drives the majority of revenue ($404K) despite lower unit volume",
        "Germany identified as top market at $182K revenue; Reebok as leading brand at $175K",
        "Revealed uniform 13% discount strategy across all brands. A missed differentiation opportunity"
      ],
      businessImpact: [
        "Identified revenue growth drivers by isolating volume vs. price dynamics",
        "Revealed market performance disparities: Germany leading, with clear regional gaps",
        "Exposed brand-specific growth drag: New Balance (-$28K) and Adidas (-$17K) pulling down 2026 performance",
        "Established that discount strategies are uniform across brands, highlighting an untapped lever for margin improvement"
      ],
      technicalSummary: [
        "Tools: Power BI, Power Query, DAX, Excel",
        "Data Model: Star schema with sales fact table connected to brand, product, geography, date, customer, and channel dimensions",
        "DAX: Year-on-year metrics, contribution-to-growth calculations, volume/price effect isolation",
        "Key Metrics: Total Revenue $997K (YoY -2.65%), ASP $121, Retail 51.7% vs Online 48.3%"
      ],
      outcome: "This project proves that the right data model is the foundation of meaningful analytics. By restructuring flat data into a proper schema, every insight became more reliable and the business logic became expressible in ways that flat tables simply cannot support."
    }
  ] as Project[],
  
  certifications: [
    {
      name: "ALX Africa | Data Analytics Certificate",
      badge: "/images/alx-badge.jpg",
      organization: "ALX Africa"
    }
  ] as Certification[],
  
  footer: {
    title: "Thanks!",
    message: "Thank you for taking the time to visit my portfolio!",
    cta: "Interested in discussing how I can contribute to your team? Let's connect!",
    copyright: "© Umar O. All rights reserved."
  }
};
