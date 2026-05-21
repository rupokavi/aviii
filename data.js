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
  title:    "Performance Optimization of AISI 304 Stainless Steel Turning through Hybrid XGBoost–NSGA-II under Dry and MQL Conditions",
  authors:  ["Md Limonur Rahman Lingkon", "Emonur Rahman Fahim", "Rupok Islam Avi"],
  venue:    "Under Review in Results in Materials",
  year:     2026,
  paperLink:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5889156",
  image:    "machining.jpg",
  abstract: "This study investigates the machining of AISI 304 stainless steel under dry and minimum quantity lubrication (MQL) conditions using castor oil as an eco-friendly cutting fluid. Turning experiments were conducted according to a Taguchi L16 orthogonal array with spindle speed, feed rate, and depth of cut as control factors, while five responses—cutting force (FR), chip reduction coefficient (CRC), temperature (T), sound level (SL), and surface roughness (Ra)—were evaluated. Statistical analyses using Taguchi S/N ratio and ANOVA identified spindle speed and feed rate as dominant machining parameters. Regression models were integrated into a hybrid XGBoost–NSGA-II optimization framework to obtain optimal multi-objective solutions. The results showed that MQL significantly enhanced machinability compared to dry cutting, reducing FR from 0.26 to 0.24 kN, T from 35 °C to 29 °C, SL from 76 to 63 dB, and Ra from 2.62–2.97 µm to 2.10–2.34 µm. These findings confirm that castor-oil-based MQL provides superior process performance and sustainable machining outcomes.",
},

 {
    title:    "Hazard Classification and Risk Prioritization in Heavy Manufacturing Industries Using Natural Language Processing and MCDM Method",
    authors:  ["Rupok Islam Avi", "Emonur Rahman Fahim", "Md Atiur Rahman", "Shantonu Nonda", "Md Sanowar Hossain"],
    venue:    "Under Review in Discover Artificial Intelligence",
    year:     2026,
    paperLink:"https://assets-eu.researchsquare.com/files/rs-9123162/v1_covered_fb160365-df36-47f8-8118-af5c422839b6.pdf?c=1775639619",
    image:    "nlp.jpg",
    abstract: "Heavy manufacturing industries are associated with different types of interacting hazards. Conventional hazard identification and prioritization approaches are largely manual, subjective, and difficult to scale. This study proposes an integrated decision support framework that combines Natural Language Processing (NLP)-enabled hazard classification with a Full Consistency Method (FUCOM)–Risk Priority Number (RPN)-based MCDM approach for systematic workplace risk prioritization. Through an extensive literature review, a total of 25 hazards were identified and categorized into five groups: physical, chemical, ergonomic, psychosocial, and environment/workplace hazards. Eight NLP-based classification models were evaluated, including lexical similarity methods, Bidirectional Encoder Representations from Transformers (BERT)-based embeddings, and Sentence Transformer architectures. Findings indicate that Sentence Transformer models paired with Cosine, Euclidean, and Minkowski distance metrics achieved 100% precision, recall, and F1-score, whereas BERT with cosine similarity and Natural Language Toolkit (NLTK) with Jaccard similarity yielded only 28% accuracy, with 0% recall for psychosocial and environment/workplace hazards. For risk prioritization, FUCOM was applied based on the judgments of 20 industry experts, leading to the highest weight for chemical hazards (0.284), followed by environment/workplace (0.243) and physical hazards (0.242). RPN analysis identified stress (0.087), toxic gas release (0.065), and fume exposure (0.053) as the most critical individual risks. The integrated FUCOM-RPN ranking further confirmed toxic gas release, fume exposure, and electrocution as the highest-priority hazards. Sensitivity analysis with 1–15% weight variation demonstrated stable rankings for both top- and bottom-ranked hazards, confirming model robustness. The proposed framework offers an effective data-driven method for occupational hazard management that is quantitative, scalable, and reliable for heavy manufacturing industries.",
          },  
  {
    title:    "Industry 4.0-Enabled Sustainable Supply Chain Strategies: Insights from the Emerging Garments Industry Using a Bayesian Best-Worst Method",
    authors:  ["Mushfiquddin Rafid*", "Rupok Islam Avi*", "Rejwanul Haque Wasi"],
    venue:    "Supply Chain Insider Journal",
    year:     2025,
    paperLink:"https://zenodo.org/records/17284382",
    image:    "Supplychain_insider.png",
    abstract: "Industry 4.0 (I4.0) technologies are diffusing quickly in making export oriented garment supply chains, particularly in developing economies such as Bangladesh and India. The latest technologies of IoT, robotics, cloud, AI-driven analytics and blockchain are set to introduce more effective operations, supply chain optimization, and sustainability. But adoption is spotty as infrastructure gaps, financial limitations and a shortage of skills have been issues. This research fills the gap in systematically prioritizing the adoption criteria of I4.0 based on three core dimensions, including: Technological Readiness, Supply chain and Sustainability, using Bayesian Best-Worst Method (BWM). The analysis demonstrates that the most important drivers of performance have been: Technology Readiness to Smart Integration, at the company level; Supply Chain Efficiency to Real-Time Visibility, at the sector level, and Sustainability-Driven Digital Compliance at the industry level. These findings emphasize the need to build technological infrastructure and automate the processes to be able to support digital operations in clothing manufacturing. The paper can be of great benefit to decision-makers in terms of prioritizing on technology investments depending on the unique needs of the ready-made garments industry; hence, enhancing competitiveness and sustainability. The study provides sound, uncertainty-sensitive ordering through the application of the BWM, and contributes to the maturity of the methodology of digital transformation of global garment supply chains.",
  },

  {
    title:    "Harnessing Big Data and AI for Supply Chain Resilience in the Garments Industry",
    authors:  ["Mushfiquddin Rafid", "Rupok Islam Avi", "Tunazzina Binta Mostafa", "Rejwanul Haque Wasi"],
    venue:    "7th Bangladeshi International Conference on Industrial Engineering and Operations Management, Dec 2024",
    year:     2024,
    paperLink:"https://ieomsociety.org/proceedings/bangladesh2024/228.pdf",
    image:    "bigdata.jpg",
    abstract: "The Readymade Garments Industry of Bangladesh contributes about 80% of the export earnings and is currently positioned 2nd worldwide in exporting clothes and fabric industry. The competition within this industry is intensifying rapidly. In addition to fierce global competition labor union movements and higher-quality market demands are making it more challenging for brands to maintain their foothold. This study introduces strategies that may improve the resiliency of the supply chain in Bangladesh's Garments using AI and Big Data tools. About 3-4 case study designs are used in this study to compare the technological developments in Bangladesh's RMG industry with benchmark practices in China. Secondary sources such as case studies (HLA group, Alibaba, H&M, Zara), scholarly works, industry reports, and regulatory documents were used to gather data. The study shows China's adoption of advanced AI tools such as AI-based quality control cameras, Big Query to data analyze, blockchain platforms like Hyperledger Fabric, AI-generated digital patterns and Ethereum-based solutions, and physics-based simulators for garment modeling, which is contributing at streamlined operations and enhanced transparency. On the other hand, Bangladesh has applied innovations like computer vision for quality inspections (Aamra vision by Amara technologies limited) and predictive analytics for supply chain planning. Development is still hampered by inadequate investment in digital technologies, a lack of qualified personnel, and inadequate infrastructure. Bangladesh's apparel and garments industry can improve supply chain resilience, lower costs, and improve compliance with international standards by giving targeted investments in AI and big data. To ensure sustainability and long-term competitiveness, this study offers policymakers, governments and business executives practical suggestions for unlocking the full potential of AI and big data.",
  },

  {
    title:    "Integrating Demand Forecasting and EOQ for Inventory Management in the Pharmaceutical Sector",
    authors:  ["Rupok Islam Avi", "Md. Ferdaous Al-Farabi", "Ifte Kharul Islam Nahid", "Md. Limonur Rahman Lingkon", "Dr. Md. Sanowar Hossain"],
    venue:    "7th Bangladeshi International Conference on Industrial Engineering and Operations Management, Dec 2024",
    year:     2024,
    paperLink:"https://ieomsociety.org/proceedings/bangladesh2024/187.pdf",
    image:    "optimize.png",
    abstract: "Effective inventory management is critical in the pharmaceutical sector, where the availability of essential medications directly impacts patient care. This study investigates the integration of demand forecasting techniques and inventory optimization to improve supply chain efficiency, focusing on GLYMIN, a vital drug for managing type 2 diabetes. Two forecasting methods, Exponential Smoothing and Linear Regression, were evaluated using sales data. The Linear regression has fewer errors with 771.04 MAD, 766,666.29 MSE, and 4.32% MAPE. The study incorporates Linear Regression forecasts into an Economic Order Quantity (EOQ) model to determine optimal inventory parameters, such as safety stock, reorder levels, and average inventory. Sensitivity analysis and Monte Carlo simulations were conducted to assess the impact of lead time and demand variability on inventory costs and stockout probabilities. Pharmaceutical companies can achieve more effective, responsive, and sustainable inventory management systems by addressing the particular difficulties faced by the industry, such as perishability, regulatory complexity, and demand variability. The proposed framework offers a scalable approach for other medications and contexts. However, the study is constrained by the size and scope of the dataset, suggesting future work could benefit from larger datasets and hybrid forecasting models to capture seasonality and nonlinear trends.",
  },

  {
    title:    "Optimizing Welders' Posture: A Study on Ergonomic Solutions to Mitigate MSDs",
    authors:  ["Md. Mushiur Rahman", "Mir Md. Mofachel Hossain", "Md. Mohibul Islam", "Rupok Islam Avi"],
    venue:    "6th International Conference on Mechanical, Industrial and Materials Engineering, Dec 2024",
    year:     2024,
    paperLink:"https://www.researchgate.net/publication/387048383",
    image:    "welders.jpg",
    abstract: "This study explores the implementation of ergonomic interventions in a welding workshop to reduce the risk of musculoskeletal disorders (MSDs) among welders. The objective is to assess the incidence of MSDs and develop tailored ergonomic solutions to enhance safety and productivity. Ergonomic assessment tools such as Rapid Upper Limb Assessment (RULA), Rapid Entire Body Assessment (REBA), and Ovako Working Posture Analysis System (OWAS), along with advanced simulation software like CATIA was used to create accurate postural models. The findings reveal significant ergonomic risks in welding operations, leading to the development of optimal working postures to minimize injuries and risks. Customized interventions, including enhanced sitting and standing postures with ergonomically built furniture, led to a decrease in RULA scores from 6 to 3, REBA scores from 8 to 2, and OWAS scores from 3 to 1. These enhancements underscore the effectiveness of focused ergonomic interventions in reducing MSD risks, improving worker well-being, and increasing workshop productivity.",
  },

  {
    title:    "Effect of Annealing Heat Treatment on Mechanical and Microstructural Properties of Electric Arc Welded TMT Rebar",
    authors:  ["Samiul Islam Pranto", "Mashhud Hasan Al Faruq", "Mst Kasfia", "Rupok Islam Avi", "Fabliha Islam"],
    venue:    "Under Review",
    year:     2024,
    paperLink:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4931306",
    image:    "welded.jpg",
    abstract: "The study explores the effect of annealing heat treatment on the mechanical and microstructural properties of TMT rebar. Tensile test was conducted and microstructures were observed for three types of specimen, including TMT rebar, welded TMT rebar and welded TMT rebar after annealing. The analyses revealed a 13.935% drop in yield strength after welding, which further reduced by 49.55% following annealing. The modulus of elasticity decreased by 9.31% in the annealed rebar compared to its welded counterpart. Ultimate tensile strength reduced by 31.428% in the annealed specimen, while total elongation after fracture was increased by 159.68%. Welding produced larger grains with a ferritic-pearlitic structure, likely due to a higher cooling rate. The annealed specimen exhibited even coarser grains leading to further reductions in strength. The recrystallization process induced by annealing made the welded zone softer, enhancing ductility and increasing elongation. Grain growth reduced the rebar's stiffness, leading to decreased elasticity.",
  },

  {
    title:    "Development of an Innovative Wheelchair-Bed for Enhanced Patient Care in Bangladesh",
    authors:  ["Rupok Islam Avi", "R. Rafiul Haque Ayon", "Md. Ariful Haque", "Shahed Mahmud", "Idrak Al Rakin", "Shah Md Tasrifur Rahim", "Md Fardin Islam"],
    venue:    "6th International Conference on Mechanical, Industrial and Materials Engineering, Dec 2024",
    year:     2024,
    paperLink:"https://www.researchgate.net/publication/387052210",
    image:    "wheelchair.jpg",
    abstract: "The incorporation of sophisticated functionalities into assistive devices like wheelchairs has grown progressively essential in meeting the varied requirements of patients who are incapable to move around in Bangladesh. This study investigates the development of a wheelchair-bed with advanced features in order to enable patients who are immobile to have better mobility and comfort. A thorough customer survey reveals a strong desire for enhanced comfort and accessibility features, which are presently absent from current products. The customers' needs are gathered and examined for integration into the product through the use of the Kano Model Assessment, Function Structure Diagram, and Quality Function Deployment (QFD). The Kano Model is employed to organize the product's features, and QFD helped to create the functional structure by translating customer requirements into technical specifications. The function structure also facilitates in designing the product and conducting stress analysis on various parts. This study determines the comfort and satisfaction levels associated with the 180 reclining feature & commode facility integrated in wheelchair. Ultimately, the wheelchair, designed in alignment with customer requirements and competitive analysis, considerably elevates patient care standards while profoundly enhancing the quality of life for individuals with disabilities.",
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
