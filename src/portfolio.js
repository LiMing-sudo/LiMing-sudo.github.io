/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "YOUR NAME", // TODO: put your name here (also shown in the top-left of the site)
  title: "Hi, I'm YOUR NAME", // TODO: put your first name here
  subTitle: emoji(
    "First-year university student who likes building AI tools that help people learn. Take a look at my projects below 🧬"
  ),
  resumeLink: "", // Empty = hides the resume button. Paste a link to your CV here later if you want one
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/YOUR-USERNAME", // TODO: your GitHub profile
  linkedin: "", // Optional: e.g. "https://www.linkedin.com/in/your-name/"
  gmail: "", // Optional: your email address
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BUILDING AI TOOLS THAT HELP PEOPLE LEARN",
  skills: [
    emoji(
      "⚡ Train and evaluate image classification models (convolutional neural networks)"
    ),
    emoji(
      "⚡ Make AI results understandable with explainability (XAI) and robustness tests"
    ),
    emoji(
      "⚡ Design app prototypes and test them with real users through A/B surveys"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section (hidden for now, add your university here later)

const educationInfo = {
  display: false, // Set true once you add your school below
  schools: []
};

// Your top 3 proficient stacks/tech experience (hidden)

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// Work experience section (hidden)

const workExperiences = {
  display: false,
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
Hidden: your projects are shown in the Projects section below instead. */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Projects

const bigProjects = {
  title: "Projects",
  subtitle: "THINGS I'VE BUILT AND WHAT I LEARNED FROM THEM",
  projects: [
    {
      image: require("./assets/images/mindf.png"),
      projectName: "MINDF: Mobile Indoor Navigation with Dynamic Flow (in progress)",
      projectDesc:
        "My current third-year project, in a team of four, for the BUas AI Makerspace. The goal is a safe, reusable and measurable indoor navigation demonstrator for the Unitree Go2-W wheeled-legged robot, working in spaces shared with people, and built so future students can extend it. So far we have written the research proposal and a Business Requirements Document with a staged, prioritised scope: a baseline of autonomous point-to-point navigation with obstacle avoidance and safety controls (must have), then human-aware and predictive navigation (should have), and an experimental learned navigation policy (could have). We defined measurable success criteria (success rate, collision rate, minimum distance to people, time-to-goal, path efficiency, robustness and reusability) and safety requirements such as operator stop, speed limits and supervised testing. The plan is to build on the ROS 2 Nav2 navigation stack and prototype in simulation before moving to the real robot."
    
    },
    {
      image: require("./assets/images/mlops-plant.png"),
      projectName: "Plant Image Analysis Service (Cloud MLOps)",
      projectDesc:
        "A second-year team project (5 students, agile scrum with sprints, reviews and retrospectives) to turn earlier computer vision models for plant phenotyping into a production-grade application deployed in the cloud on Azure, for the use case of the Netherlands Plant Eco-phenotyping Centre (NPEC). The service takes a plant image and returns segmentation masks and landmark locations with a confidence score for each prediction, and is built to be modular so it can work with any robotic platform. The project covered the full MLOps lifecycle: a tested and documented Python package with a command-line interface, an inference API, Docker containers, data and training pipelines with versioned data, code and models for auditing, automated CI/CD deployment, monitoring for model drift and other technical and business metrics, and automatic retraining from new data or user feedback."
    },
    {
      image: require("./assets/images/research-anomaly.png"),
      projectName: "Research: Feature Depth in Industrial Anomaly Detection",
      projectDesc:
        "A second-year research project written in the style of a scientific study. The question: do texture-based defects need different feature extraction than geometric (object) defects when detecting faults in manufactured products? I wrote a research proposal with a literature review and used PaDiM as the baseline (frozen pretrained WideResNet-50-2 features, Gaussian modelling and Mahalanobis distance scoring). On the MVTec AD benchmark (15 product categories) I compared shallow, deep and multi-layer features using image-level AUROC, pixel-level AUROC and AUPRO, tested three hypotheses with paired t-tests, and studied the effect of PCA. Findings: the standard multi-layer baseline localised defects best overall (pixel AUROC 0.95, AUPRO 0.75) and had the best composite score in most categories of both types. Deep features matched it at image-level detection (0.91 vs 0.90, no significant difference), and shallow-only features were the weakest and least stable. The idea that shallow features suit texture defects was only partly supported (they were best in 2 of 5 texture categories), although the gap between shallow and deep features was larger for texture than for object categories. Reducing features to 50 PCA components consistently lowered performance. Limitations I identified: the texture vs geometric split is a blunt distinction, and I only tested 15 categories."
    },
    {
      image: require("./assets/images/nlp-emotions.png"),
      projectName: "Emotion Classification in Australian English",
      projectDesc:
        "A team NLP project (second year) on classifying emotions in text, based on Paul Ekman's six core emotions: happiness, sadness, anger, surprise, fear and disgust. We worked with GoEmotions, about 54K Reddit comments labelled across 27 emotions plus neutral, and applied our model to a transcript of Australian Survivor to test how NLP copes with authentic, messy spoken language, since most earlier studies use clean, scripted text. The project covers the business value (for example helping media teams spot emotional moments in reality TV), the limits of the approach (the gap between Reddit text and spoken Australian dialogue, sarcasm, slang, accents, transcription errors, and subjective emotion labels), and the ethics of analysing human emotion data, guided by the ACM Code of Ethics. Next steps: build a localized Australian English dataset with diverse annotators."
    },
    {
      image: require("./assets/images/digitaladvisor.png"),
      projectName: "Digital Advisor",
      projectDesc:
        "A team project (first year) building an AI advisor for stock investment, using NASDAQ-100 data. We explored the data, engineered lag and rolling-statistics features, and clustered companies (K-Means, Agglomerative, DBSCAN) to pick 7 outlier stocks: APP, META, BKNG, NVDA, PEP, PLTR and TSLA. Our first SARIMAX models produced weak, near-flat forecasts on strongly trending stocks, so we moved to LSTM neural networks with hyperparameter tuning (feature selection, learning rate, early stopping, PCA), reaching R² between 0.82 and 1.00 depending on the stock. We also designed a PostgreSQL database and a web dashboard for viewing predictions, making trades and monitoring a portfolio, and assessed the system as limited-risk under the EU AI Act, with transparency and human oversight as requirements."
    },
    {
      image: require("./assets/images/cellsprout.png"),
      projectName: "CellSprout",
      projectDesc:
        "A prototype learning app that helps students connect textbook knowledge with hands-on practice by identifying blood cells from images. I built a convolutional neural network that classifies 8 blood cell classes with 96% accuracy (2,469 of 2,572 test images correct), compared with 57% for manual human classification. I also examined the model with explainability (XAI) and adversarial image tests, and ran A/B user surveys on two versions of the app's design. The app itself is a design prototype that shows how the product would look and feel.",
      footerLink: [
        {
          name: "Watch Demo Video",
          url: "https://www.loom.com/share/e1e26151a4da4b6f84bb96e0ef6d33f0?sid=2ab79028-d72a-47e6-a56b-7f7f53f58c47"
        }
        //  you can add extra buttons here.
      ]
    }
    // To add another project, copy a block above (from { to }) after a comma
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section (hidden)

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",
  achievementsCards: [],
  display: false
};

// Blogs Section (hidden)

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections (hidden)

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

// Podcast Section (hidden)

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section (hidden)

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to talk about my projects or just say hi? My inbox is open.",
  number: "", // Empty = hidden
  email_address: "your.email@example.com" // TODO: your email address
};

// Twitter Section (hidden)

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false; // Set true if you are looking for a job/internship. Shown as "Open for opportunities" in the footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
