export const personalInfo = {
    name: "Hussam Hariri",
    title: "Full Stack Developer",
    tagline: "Computer Science Graduate passionate about building scalable web applications, AI-powered solutions, and modern user experiences.",
    avatarPlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300", // Placeholder avatar
    resumeUrl: "/Hussam_Hariri-resume_2026.pdf", // Placeholder for CV download
    email: "hussamhariri99@gmail.com",
    phone: "+961 76890457",
    github: "https://github.com/hariri99",
    linkedin: "https://www.linkedin.com/in/hussam-hariri-3756b13a5",
};

export const aboutMe = "Computer Science graduate with experience in front-end and back-end development, as well as building AI-based solutions. Skilled in developing efficient, scalable applications and solving real-world problems. With a solid foundation in software engineering principles, algorithm design, and full-stack technologies, I enjoy transforming complex problems into elegant, user-friendly digital solutions. Whether designing intuitive user interfaces or building robust server-side systems, I am dedicated to writing clean, maintainable code and continuously learning new technologies.";

export const skills = {
    languages: [
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "PHP", level: "Intermediate" },
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "C++", level: "Intermediate" }
    ],
    frameworks: [
        { name: "React", level: "Advanced" },
        { name: "Laravel", level: "Intermediate" },
        { name: "Bootstrap", level: "Advanced" }
    ],
    backend: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" }
    ],
    database: [
        { name: "MySQL", level: "Advanced" }
    ],
    aiMl: [
        { name: "Machine Learning", level: "Advanced" }
    ],
    tools: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Advanced" }
    ],
    softSkills: []
};

export const projects = [
    {
        id: "ai-recruitment",
        title: "TalentLink-AI",
        featured: true,
        tech: ["React", "Node.js", "Express", "MySQL", "Machine Learning"],
        description: "A full-stack AI-powered recruitment platform connecting applicants and companies while intelligently matching candidates to job opportunities using machine learning.",
        features: [
            "Secure Role-based Authentication",
            "Company Jobs & Application Dashboard",
            "Applicant Interactive Profile Dashboard",
            "Admin Control Panel",
            "Resume Upload & Parsing",
            "AI Matching and Candidate Scoring",
            "Job Creation & Management",
            "Application Kanban Style Tracking"
        ],
        github: "https://github.com/hariri99/TalentLink-AI",
        demo: "#",
        image: "/talentlink.png"
    },
    {
        id: "protein-shop",
        title: "Protein Shop Management System",
        featured: true,
        tech: ["React", "Node.js", "Express", "MySQL"],
        description: "A complete, premium management system for a protein and supplements store that streamlines product inventory, customer orders, and sales management with high-fidelity visualization.",
        features: [
            "Secure Administrator Authentication",
            "Interactive Admin Dashboard with Stats",
            "Product Management with Categories",
            "Inventory Tracking & Low-level Alerts",
            "Sales Tracking & Purchase History",
            "Customer Profile & Loyalty Points",
            "Express Order Processing & Invoicing",
            "Interactive Sales Reports & Analytics Charts",
            "Fully Responsive Admin Grid Layout"
        ],
        github: "https://github.com/hariri99/POS-system-",
        demo: "#",
        image: "/proteinos.png"
    },
    {
        id: "velora",
        title: "Velora E-Commerce",
        featured: false,
        tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
        description: "A comprehensive full-stack clothing e-commerce platform featuring modern UI components and seamless checkout flow.",
        features: [
            "Customer Authentication & Registration",
            "Interactive Shopping Cart & Favorites",
            "Order Placement & History Tracking",
            "Product Management & Sorting Filters",
            "Responsive Fluid layout for Mobile/Desktop"
        ],
        github: "",
        demo: "#",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
        id: "dfa-visualizer",
        title: "DFA Visualizer",
        featured: false,
        tech: ["React", "Framer Motion", "Tailwind CSS"],
        description: "An educational tool featuring a DFA Minimizer, Equivalence Checker, and Visualizer that helps students understand finite automata through interactive step-by-step visualizations.",
        features: [
            "Interactive NFA/DFA State Drawing Grid",
            "Step-by-step DFA Minimization Visualizer",
            "Equivalence Checker for Two Automata",
            "String Processing Transition Path Highlighting"
        ],
        github: "",
        demo: "#",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
        id: "healthy-by-jeen",
        title: "Healthy By Jeen",
        featured: false,
        tech: ["HTML5", "CSS3", "JavaScript", "SEO Optimization"],
        description: "A tailored professional website developed for a private nutrition and health coaching client to improve online business visibility and customer engagement.",
        features: [
            "Custom Client Booking Information Form",
            "Interactive Healthy Recipe Catalog",
            "Client Testimonials Carousel",
            "Fully Responsive for High-definition Mobile Displays"
        ],
        github: "https://github.com/hariri99/-HealthyByJeen",
        demo: "#",
        image: "/healthy_by_jeen.jpg"
    }
];

export const education = [
    {
        institution: "Rafik Hariri University",
        degree: "Bachelor of Science in Computer Science",
        period: "2023 – 2026",
        details: "Focus on Software Engineering, Database Systems, Web Technologies, Machine Learning, and Algorithms."
    }
];

export const experience = [
    {
        company: "Medical Association",
        role: "Paramedic",
        period: "2022 – 2023",
        description: "Provided urgent pre-hospital medical care, managed high-stress medical situations, worked seamlessly in interdisciplinary teams, and developed swift problem-solving and rapid-response capabilities under pressure."
    },
    {
        company: "Al Reaaya Organization",
        role: "Committee Member",
        period: "2021 – 2023",
        description: "Coordinated local community service projects and charity events. Demonstrated leadership, critical communication skills, collaborative teamwork, active problem-solving, and efficient time management."
    }
];

export const certifications = [
    {
        name: "ZAKA AI Bootcamp",
        issuer: "ZAKA AI",
        date: "2024",
        description: "Intensive training in Machine Learning, Deep Learning, MLOps, Computer Vision, and Natural Language Processing."
    },
    {
        name: "Ethical Hacking Foundation",
        issuer: "SecOps / Semicolon",
        date: "2023",
        description: "Fundamental concepts of network security, penetration testing tools, and threat assessment methodologies."
    },
    {
        name: "Semicolon Academy",
        issuer: "Semicolon Academy",
        date: "2023",
        description: "Comprehensive software engineering program focused on algorithms, web technologies, and backend integrations."
    }
];

export const workshops = [
    {
        name: "ZAKA AI Bootcamp",
        description: "Completed an intensive Artificial Intelligence bootcamp with hands-on experience in:",
        highlights: [
            "Machine Learning: Supervised & unsupervised modeling, optimization",
            "Deep Learning: Neural networks, CNNs, model tuning",
            "Computer Vision: Image classification, object detection",
            "NLP: Sentiment analysis, Transformers, text tokenization",
            "Time-Series Analysis: Forecasting models, sequence models",
            "MLOps: Model testing, deployment workflows, pipelines"
        ]
    }
];
