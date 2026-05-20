// ============================================================
//  data.js  —  Edit THIS file to update your website content
//  Your HTML files will never need to be touched again!
// ============================================================


// ── PERSONAL INFO ────────────────────────────────────────────
const DATA_PERSONAL = {
  name:        "Rupok Islam Avi",
  title:       "IPE Undergrad Student, RUET | Research Enthusiast | Operations Research | Optimization | Mathematical Modeling",
  bio:         "This is <em>Rupok Islam Avi</em>; however, you can call me <strong>Avi</strong>. I am an undergraduate student of <strong>Industrial & Production Engineering</strong> at the <span class='highlight'>Department of IPE, Rajshahi University of Engineering & Technology (RUET), Rajshahi</span>.",
  email:       "rupokislamavi.ruet@gmail.com",
  address:     "Pallabi, Mirpur-12<br>Dhaka-1216, Bangladesh",
  scholar:     "https://scholar.google.com/citations?user=pbKE0X8AAAAJ&hl=en",
  researchFocus: ["Risk management", "Operations research", "Machine learning", "Healthcare supply chain optimization"],
  skills:      "Proficient in <strong>Operations Research (OR)</strong> including stochastic programming, linear/nonlinear programming (LP, QP, MIP, MILP, MINLP), integer programming, game theory, scheduling, and computational complexity analysis, with tool expertise in <strong>Gurobi</strong>. Skilled in <strong>Python</strong> (Pandas, NumPy, Matplotlib, SciPy, TensorFlow, PyTorch, Keras), alongside <strong>C/C++</strong>. Experienced in data science workflows: statistical modeling, data mining, visualization (Tableau, PowerBI), database management. <strong>Advanced machine learning</strong> expertise in regression, clustering (SVM, Random Forest), ensemble methods, recommendation systems. Proficient with tools like <strong>Git, Jupyter, PyCharm, and big-data systems</strong>. Additional competencies include <strong>Microsoft Office Suite, and soft skills in leadership, critical thinking, communication</strong>.",
  slideshowImages: ["cox.jpg", "football.jpg"],
};


// ── PUBLICATIONS ─────────────────────────────────────────────
// To ADD a publication: copy one block below and paste it at the top of the array.
// To REMOVE one: delete its block.
// Fields: title, authors (array), venue, year, paperLink (or "" if none), image, abstract
const DATA_PUBLICATIONS = [

  {
    title:    "Industry 4.0-Enabled Sustainable Supply Chain Strategies: Insights from the Emerging Garments Industry Using a Bayesian Best-Worst Method",
    authors:  ["Mushfiquddin Rafid*", "Rupok Islam Avi*", "Rejwanul Haque Wasi"],
    venue:    "Supply Chain Insider Journal",
    year:     2025,
    paperLink:"https://zenodo.org/records/17284382",
    image:    "Supplychain_insider.png",
    abstract: "Industry 4.0 (I4.0) technologies are diffusing quickly in making export oriented garment supply chains...",
  },

  {
    title:    "Harnessing Big Data and AI for Supply Chain Resilience in the Garments Industry",
    authors:  ["Mushfiquddin Rafid", "Rupok Islam Avi", "Tunazzina Binta Mostafa", "Rejwanul Haque Wasi"],
    venue:    "7th Bangladeshi International Conference on Industrial Engineering and Operations Management, Dec 2024",
    year:     2024,
    paperLink:"https://ieomsociety.org/proceedings/bangladesh2024/228.pdf",
    image:    "bigdata.jpg",
    abstract: "The Readymade Garments Industry of Bangladesh contributes about 80% of the export earnings and is currently positioned 2nd worldwide in exporting clothes. This study introduces strategies to improve supply chain resilience in Bangladesh's Garments using AI and Big Data tools, comparing developments with China benchmark practices including AI-based quality control cameras, BigQuery analytics, blockchain platforms, and AI-generated digital patterns.",
  },

  {
    title:    "Integrating Demand Forecasting and EOQ for Inventory Management in the Pharmaceutical Sector",
    authors:  ["Rupok Islam Avi", "Md. Ferdaous Al-Farabi", "Ifte Kharul Islam Nahid", "Md. Limonur Rahman Lingkon", "Dr. Md. Sanowar Hossain"],
    venue:    "7th Bangladeshi International Conference on Industrial Engineering and Operations Management, Dec 2024",
    year:     2024,
    paperLink:"https://ieomsociety.org/proceedings/bangladesh2024/187.pdf",
    image:    "optimize.png",
    abstract: "This study investigates demand forecasting and inventory optimization for GLYMIN, a vital drug for managing type 2 diabetes. Linear regression outperformed exponential smoothing (771.04 MAD, 4.32% MAPE). Forecasts were integrated into an EOQ model to determine optimal inventory parameters. Monte Carlo simulations assessed stockout probability at 0.0006.",
  },

  {
    title:    "Optimizing Welders' Posture: A Study on Ergonomic Solutions to Mitigate MSDs",
    authors:  ["Md. Mushiur Rahman", "Mir Md. Mofachel Hossain", "Md. Mohibul Islam", "Rupok Islam Avi"],
    venue:    "6th International Conference on Mechanical, Industrial and Materials Engineering, Dec 2024",
    year:     2024,
    paperLink:"https://www.researchgate.net/publication/387048383",
    image:    "welders.jpg",
    abstract: "Ergonomic interventions were implemented in a welding workshop to reduce MSD risks. Using RULA, REBA, OWAS, and CATIA simulations, customized ergonomic furniture reduced RULA scores 6→3, REBA 8→2, and OWAS 3→1, demonstrating significant effectiveness in reducing MSD risks and improving productivity.",
  },

  {
    title:    "Effect of Annealing Heat Treatment on Mechanical and Microstructural Properties of Electric Arc Welded TMT Rebar",
    authors:  ["Samiul Islam Pranto", "Mashhud Hasan Al Faruq", "Mst Kasfia", "Rupok Islam Avi", "Fabliha Islam"],
    venue:    "Under Review",
    year:     2024,
    paperLink:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4931306",
    image:    "welded.jpg",
    abstract: "The study explores the effect of annealing heat treatment on TMT rebar properties. Welding caused a 13.935% yield strength drop, further reducing by 49.55% after annealing. Elongation after fracture increased by 159.68% due to recrystallization, while ultimate tensile strength reduced by 31.428%.",
  },

  {
    title:    "Development of an Innovative Wheelchair-Bed for Enhanced Patient Care in Bangladesh",
    authors:  ["Rupok Islam Avi", "R. Rafiul Haque Ayon", "Md. Ariful Haque", "Shahed Mahmud", "Idrak Al Rakin", "Shah Md Tasrifur Rahim", "Md Fardin Islam"],
    venue:    "6th International Conference on Mechanical, Industrial and Materials Engineering, Dec 2024",
    year:     2024,
    paperLink:"https://www.researchgate.net/publication/387052210",
    image:    "wheelchair.jpg",
    abstract: "This study investigates a wheelchair-bed with advanced features using Kano Model Assessment, Function Structure Diagram, and QFD. The 180° reclining feature and commode facility considerably elevate patient care standards for individuals with disabilities in Bangladesh.",
  },

];


// ── PROJECTS ─────────────────────────────────────────────────
// To ADD a project: copy one block and paste it at the top.
// githubLink: use "" if no link yet
const DATA_PROJECTS = [

  {
    title:      "Diabetes Prediction Using ML",
    image:      "DiabetesPrediction.jpeg",
    description:"Developed a predictive model analyzing key health indicators (glucose levels, BMI, age, etc.) with high accuracy. Created a local web app for real-time predictions, demonstrating ML's potential in healthcare diagnostics.",
    tags:       ["Python", "Scikit-learn", "Flask", "Pandas"],
    githubLink: "https://github.com/rupokavi/DiabetesPrediction",
  },

  {
    title:      "Smart Wheelchair System",
    image:      "wheelchair.jpg",
    description:"An ergonomic wheelchair with integrated defecation system, manual brakes, and reclining support designed to improve quality of life for patients with limited mobility.",
    tags:       ["Product Design", "Ergonomics", "Healthcare"],
    githubLink: "",
  },

  {
    title:      "Healthcare Data Analysis",
    image:      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description:"Comprehensive analysis of patient data to identify trends and improve treatment outcomes using advanced statistical methods and visualization techniques.",
    tags:       ["Python", "Tableau", "SQL"],
    githubLink: "",
  },

];
