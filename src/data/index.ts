// src/data/index.ts
import { Code, BarChart3, Users } from "lucide-react";


// Local partner logos
import AFOSI from "@/assets/partners/afosi.png";
import EPTF from "@/assets/partners/eptf.png";
import GOODKENYA from "@/assets/partners/goodkenya.png";
import USAID from "@/assets/partners/usaid.png";
import RIDA from "@/assets/partners/rida.png";
import TEENSEED from "@/assets/partners/teenseed.png";
import WFD from "@/assets/partners/wfd.png";
import HIJABI from "@/assets/partners/hijabi.png";
import MAKEMESMILE from "@/assets/partners/makemesmile.png";


export const PartnersList = [
  { id: 1, name: "AFOSI", logo: AFOSI },
  { id: 2, name: "EPTF", logo: EPTF },
  { id: 3, name: "GOODKENYA", logo: GOODKENYA },
  { id: 4, name: "USAID", logo: USAID },
  { id: 5, name: "RIDA", logo: RIDA },
  { id: 6, name: "TEENSEED", logo: TEENSEED },
  { id: 7, name: "WFD", logo: WFD },
  { id: 8, name: "HIJABI", logo: HIJABI },
  { id: 9, name: "MAKEMESMILE", logo: MAKEMESMILE },

];


export const testimonials = [
  {
    id: 1,
    name: "African Development Partners",
    message:
      "Epitome Consulting Solutions brought structure, innovation, and clarity to our strategic planning process. Their participatory approach, combined with data-driven insights and deep technical expertise in Monitoring, Evaluation, Reporting, and Learning (MERL), enabled us to align our operations with our mission and scale our impact.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ministry of Health",
    message:
      "Their integrated workplace wellness program delivered tangible outcomes in mental health support and productivity. Through evidence-based tools and a culturally sensitive approach, Epitome helped us create a safer, more responsive environment for our staff.",
    rating: 5,
  },
  {
    id: 3,
    name: "County Government of Nakuru",
    message:
      "We engaged Epitome for support in developing our County Integrated Development Plan (CIDP). Their meticulous planning, policy alignment, and stakeholder engagement methodology resulted in a practical roadmap that reflects our community’s voice and development priorities.",
    rating: 5,
  },
  {
    id: 4,
    name: "United Nations Development Programme (UNDP)",
    message:
      "Epitome’s expertise in designing MERL frameworks elevated our program implementation and reporting. Their team’s professionalism and responsiveness were instrumental in aligning our indicators with donor expectations while embedding adaptive learning mechanisms.",
    rating: 5,
  },
  {
    id: 5,
    name: "National NGO Coordination Board",
    message:
      "With Epitome's support, we developed robust governance policies and accountability structures. Their clarity, legal awareness, and inclusive facilitation style helped build consensus among stakeholders and improved institutional compliance.",
    rating: 5,
  },

];




export const services = [
  
  {
    title: "Project Management",
    subtitle: "Delivering Clarity, Structure & Results",
    icon: Code,
    path: "/projectmanagement",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg", // African business meeting
    description:
      "We bring structure, governance, and execution excellence to every stage of the project life cycle—ensuring alignment with goals, value for investment, and sustainable impact.",
    highlights: [
      "Project governance and strategic planning frameworks",
      "CIDPs, sector plans, and business model development",
      "Feasibility studies and concept design",
      "Capacity building for project teams",
      "Risk management and performance monitoring",
    ],
  },
  {
    title: "Monitoring, Evaluation, Research & Learning (MERL)",
    subtitle: "From Data to Impact",
    icon: BarChart3,
    path: "/merl",
    image: "https://img.freepik.com/free-photo/group-afro-americans-working-together_1303-8983.jpg?semt=ais_hybrid&w=740", 
    description:
      "We help organizations design and implement MERL systems that generate actionable insights, promote adaptive learning, and meet donor and internal accountability standards.",
    highlights: [
      "Logframes, theories of change, and MERL frameworks",
      "Fundraising-aligned MERL plans for proposals and grants",
      "Baseline, mid-term, end-term evaluations, and DQAs",
      "Impact and donor reporting, technical briefs",
      "MERL training, indicator design, and data visualization",
    ],
  },
  {
    title: "Organizational Development",
    subtitle: "Resilient, Agile & Future-Ready",
    icon: Users,
    path: "/organizationaldevelopment",
    image: "https://www.servereworldsystem.com/include/blog/2755/275503283901.jpeg.webp", 
    description:
      "We support institutions to build robust strategies, enhance leadership capacity, and foster governance systems that accelerate transformation and growth.",
    highlights: [
      "Strategic planning and execution roadmaps",
      "Governance structures and policy development",
      "Executive coaching and leadership development",
      "Change management and cultural transformation",
      "Stakeholder engagement and communication strategies",
    ],
  },
];


export interface ProjectResult {
  value: number; 
  unit: string; 
  description: string; 
  icon?: string; 
}

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string; 
  challenge: string; 
  solution: string; 
  technologies: string[]; 
  highlights: string[]; 
  results: ProjectResult[]; 
  path: string; 
}

export interface SuccessStory {
  id: number;
  category: string;
  title: string;
  description: string; 
  path?: string; 
  linkText?: string; 
}

// --- PROJECTS DATA ---
export const projectsList: Project[] = [
  {
    id: 1,
    category: "Infrastructure",
    title: "Kenya Ports Authority – ICT Modernization",
    description: "Led the modernization of Kenya Ports Authority’s IT infrastructure, implementing robust hardware systems and secure networking to enhance operational efficiency and communication across port facilities.",
    challenge: "The Authority faced challenges with outdated hardware, frequent system downtimes, and limited inter-departmental communication due to legacy infrastructure and minimal disaster recovery capabilities.",
    solution: "We upgraded the data center with modern servers, implemented a secure LAN/WAN architecture, deployed enterprise-grade firewalls, and set up backup and disaster recovery solutions. Workstations and network equipment were standardized for consistent performance and easier maintenance.",
    technologies: [
      "Dell PowerEdge Servers",
      "Cisco Switches & Firewalls",
      "Fiber Optic Backbone",
      "HP ProDesk Workstations",
      "VMware vSphere",
      "Windows Server 2022",
      "Structured Cabling Systems"
    ],
    highlights: [
      "Established a redundant and secure network backbone",
      "Centralized IT resources through server virtualization",
      "Enhanced system uptime with proactive monitoring tools",
      "Improved user support with standardized hardware deployments"
    ],
    results: [
      { value: 99.9, unit: "%", description: "Network uptime after deployment" },
      { value: 80, unit: "%", description: "Reduction in hardware-related incidents" },
      { value: 50, unit: "%", description: "Faster internal communication and data access" },
      { value: 3, unit: "x", description: "Increase in overall IT capacity and performance" }
    ],
    path: "/casestudy1"
  },
  {
    id: 2,
    category: "Infrastructure",
    title: "Kenya Railways Corporation – ICT Systems Revamp",
    description: "Partnered with Kenya Railways Corporation to overhaul their outdated ICT infrastructure, enhancing communication systems, hardware reliability, and centralized operations across regional stations.",
    challenge: "Kenya Railways relied on legacy systems that suffered frequent hardware failures, lacked secure connectivity between offices, and could not support modern enterprise software or real-time communication. This caused delays in internal processes and limited digital transformation efforts.",
    solution: "We executed a structured ICT infrastructure upgrade including installation of industrial-grade servers, network backbone modernization, high-speed internet connectivity, surveillance systems, and reliable power backup solutions. The overhaul supported future scalability and integration of smart transport systems.",
    technologies: [
      "Lenovo ThinkSystem Servers",
      "Fortinet Network Firewalls",
      "Fiber Optic Backbone",
      "Access Control & CCTV Systems",
      "Enterprise Wi-Fi (Ubiquiti/Aruba)",
      "Smart Power Backup & UPS Systems"
    ],
    highlights: [
      "Established secure, high-speed LAN/WAN across stations",
      "Minimized hardware downtime through industrial-grade replacements",
      "Enabled centralized user and asset management",
      "Improved data security and system resilience"
    ],
    results: [
      { value: 85, unit: "%", description: "Increase in system reliability" },
      { value: 60, unit: "%", description: "Reduction in network-related delays" },
      { value: 50, unit: "%", description: "Boost in internal communication efficiency" }
    ],
    path: "/casestudy1"
  },
  
  {
    id: 3,
    category: "Healthcare",
    title: "Nairobi Metropolitan Services – Digital Health Platform",
    description: "Developed a comprehensive, secure telehealth platform to modernize service delivery for Nairobi Metropolitan Services (NMS), enhancing patient experience and operational efficiency.",
    challenge: "NMS faced fragmented health systems with no centralized data sharing, delays in patient care coordination, and limited remote service capabilities. There was also a growing need to integrate real-time monitoring and communication tools for better public health outcomes.",
    solution: "We engineered a full-stack digital platform connecting patients, providers, and health centers via real-time communication tools. Core features included online ticketing, live monitoring, fleet and asset tracking, and integrated electronic health records. The platform centralized information flow through a Command & Control system with intuitive dashboards for improved decision-making.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebRTC",
      "Twilio Video",
      "AWS (EC2, Shield, RDS)",
      "Docker"
    ],
    highlights: [
      "Secure real-time video consultations and appointment scheduling",
      "Integrated EHR and patient data synchronization",
      "Live dashboards for Command & Control visibility",
      "Fleet and asset management with geolocation tracking",
      "Role-based access control and end-to-end encryption"
    ],
    results: [
      { value: 98, unit: "%", description: "Patient satisfaction rate reported" },
      { value: 50, unit: "%", description: "Reduction in missed appointments" },
      { value: 70, unit: "%", description: "Increase in remote healthcare access" },
      { value: 65, unit: "%", description: "Improved operational decision-making speed" }
    ],
    path: "/projects/nms-digital-health"
  },
  
  {
    id: 4,
    category: "Finance",
    title: "DFID Project – BioSIM Supply Chain Finance Platform",
    description: "Developed an intelligent financial and operational planning system to optimize supply chain performance, align business objectives, and automate sales invoicing for the confectionery industry.",
    challenge: "The project required a dynamic platform capable of aligning strategic, financial, commercial, and operational goals across supply chains in the confectionery sector. The client faced difficulties in planning inventory, responding to real-time demand changes, and tracking invoicing efficiency.",
    solution: "We implemented a centralized planning system that integrates cross-functional inputs to generate short-, mid-, and long-term supply forecasts. The system leverages real-time demand and supply signals to optimize inventory levels and mitigate constraints. A built-in finance module automates sales invoicing and aligns production targets with financial and operational KPIs.",
    technologies: ["Power BI", "Python", "Microsoft Dynamics 365", "Azure SQL Database", "SAP FICO", "Excel Macros"],
    highlights: [
      "Integrated financial planning and supply chain alignment",
      "Automated sales invoicing across channels",
      "Real-time inventory and demand-supply visibility",
      "Improved planning accuracy through data-driven insights",
      "Collaborative cross-functional platform for business units"
    ],
    results: [
      { value: 80, unit: "%", description: "Reduction in supply-demand mismatches" },
      { value: 65, unit: "%", description: "Increase in invoicing efficiency" },
      { value: 40, unit: "%", description: "Decrease in inventory holding costs" },
      { value: 90, unit: "%", description: "Alignment between financial and operational KPIs" }
    ],
    path: "/projects/finance-biosim"
  },
  
  {
    id: 5,
    category: "Cybersecurity",
    title: "Salaries & Remuneration Commission – Data Protection and Cybersecurity Platform",
    description: "Implemented a government-grade cybersecurity framework to safeguard sensitive payroll data, ensure regulatory compliance, and mitigate risks associated with insider threats and external breaches.",
    challenge: "SRC faced growing cybersecurity threats targeting sensitive salary structures, payroll data, and internal communications. There was a lack of centralized threat detection, inadequate data loss prevention controls, and compliance gaps with emerging data protection laws.",
    solution: "We developed and deployed a secure digital infrastructure focused on Data Loss Prevention (DLP), identity and access management (IAM), and continuous monitoring. The platform includes automated encryption protocols, user behavior analytics, and incident response workflows. We also ensured alignment with Kenya's Data Protection Act and ISO/IEC 27001 standards.",
    technologies: [
      "Microsoft Defender for Endpoint",
      "Fortinet DLP",
      "Zecurion DLP",
      "AWS KMS (Key Management Service)",
      "SIEM (Security Information and Event Management)",
      "OAuth 2.0 / SAML",
      "Zero Trust Network Access (ZTNA)"
    ],
    highlights: [
      "Implemented real-time DLP and access control across endpoints",
      "Encrypted sensitive payroll and personnel records",
      "Automated threat detection and mitigation system",
      "Role-based access management and policy enforcement",
      "Auditable compliance logs and reporting"
    ],
    results: [
      { value: 100, unit: "%", description: "Regulatory compliance with Kenya’s Data Protection Act" },
      { value: 75, unit: "%", description: "Reduction in potential data breach vectors" },
      { value: 60, unit: "%", description: "Decrease in internal data access violations" },
      { value: 90, unit: "%", description: "Improved visibility into cybersecurity posture" }
    ],
    path: "/casestudy2"
  }
  
];

// --- SUCCESS STORIES DATA ---
export const successStories: SuccessStory[] = [
  {
    id: 1,
    category: "FinTech",
    title: "Automating Financial Reporting",
    description: "Built an automated system for a financial institution to generate complex regulatory reports, significantly reducing manual effort and error rates.",
    path: "/projects/fintech-reporting",
    linkText: "Learn More"
  },
  {
    id: 2,
    category: "Education",
    title: "Developing a Remote Learning Portal",
    description: "Created a robust and interactive online learning platform for a university, facilitating virtual classes, assignment submission, and progress tracking.",
    path: "/projects/education-portal",
    linkText: "View Details"
  },
  {
    id: 3,
    category: "Real Estate",
    title: "Launching a Property Management App",
    description: "Designed and developed a mobile application simplifying property listing, tenant communication, and maintenance request management for real estate agents.",
     path: "/projects/realestate-app"
  },
   {
    id: 4,
    category: "Manufacturing",
    title: "Implementing an IoT Monitoring Solution",
    description: "Deployed an IoT solution to monitor factory equipment in real-time, enabling predictive maintenance and optimizing production efficiency.",
     // path: null // Example of a story with no link yet
   },
   {
    id: 5,
    category: "Non-Profit",
    title: "Building a Donor Management System",
    description: "Created a custom CRM to streamline donor relations, manage campaigns, and track contributions effectively for a large non-profit organization.",
     // path: null
   },
    {
    id: 6,
    category: "Legal Tech",
    title: "Developing Case Management Software",
    description: "Engineered a secure web application for law firms to manage cases, documents, deadlines, and client communication in a single platform.",
     // path: null
   },
];



export const featuredProjects = [
  { image: "https://img.freepik.com/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_482257-65963.jpg?t=st=1746692093~exp=1746695693~hmac=ac9e278e20f4a920c47a2abd440d65e9107334b35adb78c1c81f0098d05e7e46&w=996", category: "Infrastructure", title: "Enterprise Hardware & Software Infrastructure", description: "Protect networks, applications, and data by identifying vulnerabilities, preventing breaches, encrypting sensitive information, implementing policies and technologies to effectively monitor, mitigate, recover from threats.", path: "/casestudy1" },
  { image: "https://img.freepik.com/free-vector/neon-fingerprint-background_23-2148364032.jpg?t=st=1746781511~exp=1746785111~hmac=e4ccaafcf3d05fffa67177860d0abbed45cc6a9e470f1174349ea1e0399fc145&w=996", category: "Cybersecurity", title: "Cyber Security & Data Loss Prevention", description: "Establishes secure, scalable, resilient IT environments by integrating robust servers, storage, networking, virtualization, operating systems, middleware, and management tools to support critical business applications.", path: "/casestudy2" },
  { image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241207.jpg?t=st=1746976491~exp=1746980091~hmac=a8895b5c907a1d832b505e9792a53a9cbbcb1724b675ac6b2ebf40960cb12071&w=996", category: "AI & Machine Learning", title: "Predictive & Generative Artificial Intelligence", description: "Leverages machine learning algorithms to analyze large-scale historical data, forecast trends, and autonomously generate creative content, solutions, and insights, driving innovation and informed decision-making.", path: "/casestudy3" },
];


// --- HERO SLIDES DATA ---
export const heroSlides = [
  {
    id: 1,
    title: "Your Strategic Partner in Institutional Transformation",
    subtitle: "We deliver tailored, evidence-based solutions in Project Management, MERL, and Organizational Development to enhance performance and foster sustainable growth.",
    image: "https://www.shutterstock.com/image-photo/team-young-african-people-office-600nw-1922089445.jpg", 
  },
  {
    id: 2,
    title: "Advanced Methodologies for Enduring Impact",
    subtitle: "Leveraging Systems Thinking, Participatory Learning, and AI-Powered Insights to solve complex challenges with precision and clarity.",
    image: "https://img.freepik.com/free-photo/african-professional-using-tablet_1303-8984.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 3,
    title: "Guided by Excellence, Driven by Innovation",
    subtitle: "Our commitment to client-focused collaboration and inclusion ensures we deliver solutions that are not just effective, but equitable and transformative.",
    image: "https://img.freepik.com/premium-photo/team-young-african-people-office-table-with-laptop_219728-4569.jpg", 
    overrideLink2: {
      text: "Discover Our Principles",
      to: "/about",
    },
  },
];
export const cardHoverVariant = {
  rest: {
    y: 0,
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
    scale: 1,
  },
  hover: {
    y: -8,
    boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)",
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
