export const siteConfig = {
  name: "Maximilian Leitenstern",
  title: "Software Engineer | Research Associate",
  description: "Portfolio website of Maximilian Leitenstern",
  accentColor: "#ffffff",
  backgroundColor: "#000000",
  social: {
    email: "maxi.leitenstern@gmail.com",
    linkedin: "https://www.linkedin.com/in/maximilian-leitenstern-a8a4551b1/",
    github: "https://github.com/mleitenstern",
    scholar: "https://scholar.google.de/citations?user=uDeiLWcAAAAJ&hl=de&oi=ao",
    researchgate: "https://www.researchgate.net/profile/Maximilian_Leitenstern",
  },
  aboutMe:
    "Passionate software engineer for real-world deployment of autonomous systems, specialized on Localization, Mapping and SLAM. Experienced in C++ and Python, with a strong background in mechanical engineering. Dedicated to advancing robotics through innovative software solutions.",
  skills: ["C++", "Python", "LaTeX", "Git", "ROS2", "Docker"],
  projects: [
    {
      name: "TUM Autonomous Motorsport",
      description:
        "Building a multimodal localization and mapping framework for autonomous racecars to achieve real-time performance and robustness in dynamic racing environments.",
      link: "https://www.mos.ed.tum.de/ftm/forschungsfelder/team-av-perception/tum-autonomous-motorsport/",
      skills: ["C++", "Python", "ROS2", "Docker"],
    },
  ],
  experience: [
    {
      company: "Chair of Automotive Technology",
      title: "Research Associate",
      dateRange: "Oct 2023 - Present",
      bullets: [
        "Research Areas: Localization, Mapping, SLAM for autonomous racecars",
        "Projects: TUM Autonomous Motorsport",
      ],
    },
    {
      company: "BMW Group",
      title: "Working Student",
      dateRange: "Apr 2021 - Jul 2022",
      bullets: [
        "Research on electric motors and batteries for electric vehicles",
        "Implemented data analysis pipelines using Python",
      ],
    },
    {
      company: "TUfast e.V.",
      title: "Head of Suspension & Development Engineer",
      dateRange: "Oct 2018 - August 2021",
      bullets: [
        "Concept development for racecar eb019",
        "Leading a team of 10+ members in the suspension department",
        "Construction and analysis of strength/stiffness",
        "Assembly and testing of suspension components",
        "Data analysis and testing",
      ],
    },
  ],
  education: [
    {
      school: "Technical University of Munich",
      degree: "Doctor of Philosophy in Mechanical Engineering",
      dateRange: "2023 - 2027",
      achievements: [
        "Research on Localization, Mapping and SLAM for autonomous racecars",
      ],
    },
    {
      school: "Technical University of Munich",
      degree: "Master of Science in Mechanical Engineering",
      dateRange: "2021 - 2023",
      achievements: [
        "Master thesis topic: HD-Mapping for Autonomous Driving: Multi-Information Fusion for a Scalable Mapping Pipeline",
        "Semster thesis topic: Development of a Vehicle Model for the Categorization of Road Conditions with Regard to Driving Comfort",
      ],
    },
    {
      school: "University of California, San Diego",
      degree: "Master of Science in Mechanical Engineering",
      dateRange: "2022 - 2022",
      achievements: [
        "Semster abroad",
      ],
    },
    {
      school: "Technical University of Munich",
      degree: "Bachelor of Science in Mechanical Engineering",
      dateRange: "2017 - 2021",
      achievements: [
        "Thesis Topic: Implementation of an Unscented Kalman Filter for the Estimation of the Tire-Road Fristion Potential of an Autonomous Racecar",
      ],
    },
  ],
};
