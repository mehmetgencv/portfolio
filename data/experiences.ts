export interface Experience {
  date: string
  title: string
  company: string
  description: string[]
  technologies: string[]
  type: "work" | "education" | "internship" | "bootcamp"
}

const experiences: Experience[] = [
  {
    date: "July 2025 - Present",
    title: "Software Engineer",
    company: "OpenPayd",
    description: [
      "Developing backend services using Java 17 within a microservices architecture.",
      "Actively contributing to the Spring Boot migration from 2.7 to 3.4.",
      "Designing efficient data models and optimizing queries on PostgreSQL.",
      "Managing database schema changes with Flyway.",
      "Implementing event-driven architecture using RabbitMQ.",
      "Using Hazelcast for distributed caching and high-performance data access.",
      "Working with GitLab CI/CD for automated pipelines and deployments.",
      "Ensuring clean architecture, test coverage, and high code quality.",
    ],
    technologies: [
      "Java 17",
      "Spring Boot 3.4",
      "PostgreSQL",
      "Flyway",
      "RabbitMQ",
      "Hazelcast",
      "GitLab CI/CD",
    ],
    type: "work",
  },
  {
    date: "October 2024 - May 2025",
    title: "Software Engineer",
    company: "Codebefore",
    description: [
      "Developed and deployed scalable microservices using Java Spring Boot and Spring Cloud.",
      "Designed and implemented RESTful APIs for seamless communication between microservices.",
      "Integrated Spring Security to enhance application security, including authentication and authorization.",
      "Designed and implemented unit and integration tests using JUnit, Mockito, TestContainers, and BDD approach.",
      "Implemented monitoring and logging solutions with Prometheus and ELK Stack for system health tracking.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Spring Security",
      "Kafka",
      "Redis",
      "Docker",
      "JUnit",
      "Mockito",
      "TestContainers",
      "Prometheus",
      "ELK Stack",
    ],
    type: "work",
  },
  {
    date: "July 2020 - September 2024",
    title: "Software Engineer",
    company: "Cognitiwe",
    description: [
      "Optimized Python-based web applications using Flask, boosting application efficiency by 20%.",
      "Engineered and managed Docker containers, slashing deployment time by 50%.",
      "Spearheaded the migration of legacy systems to modern architectures, resulting in a 25% reduction in maintenance costs and improved scalability.",
    ],
    technologies: [
      "Python",
      "Flask",
      "Docker",
      "Microservices",
      "PostgreSQL",
      "TensorFlow",
      "OpenCV",
    ],
    type: "work",
  },
  {
    date: "February 2024 - March 2024",
    title: "Backend Developer Bootcamp",
    company: "N11 Tech",
    description: [
      "Specialized in Microservices, Maven, Hibernate, JPA, TDD, and DDD.",
      "Adhered to SOLID principles during bootcamp projects.",
      "Designed and implemented a microservices-based e-commerce platform with Spring Boot and Kafka.",
    ],
    technologies: [
      "Spring Boot",
      "Java",
      "Hibernate",
      "Maven",
      "SOLID",
      "Redis",
      "Kafka",
    ],
    type: "bootcamp",
  },
  {
    date: "September 2023 - October 2023",
    title: "Backend Developer Bootcamp",
    company: "Trendyol Tech",
    description: [
      "Developed and optimized backend systems using Spring Boot and Java.",
    ],
    technologies: ["Java", "Spring Boot"],
    type: "bootcamp",
  },
  {
    date: "July 2020 - June 2021",
    title: "Software Engineer",
    company: "Motiwe",
    description: [
      "Developed RESTful APIs using Python Flask.",
      "Streamlined data exchange with third-party APIs.",
      "Applied OOP principles to improve code modularity and reusability.",
    ],
    technologies: ["Python", "Flask", "Docker", "OOP", "TensorFlow", "OpenCV"],
    type: "work",
  },
  {
    date: "February 2020 - June 2020",
    title: "Software Engineer Intern",
    company: "Motiwe",
    description: [
      "Assisted in developing Dockerized Python Flask applications.",
      "Contributed to enhancing API performance and deployment workflows.",
    ],
    technologies: ["Python", "Flask", "Docker"],
    type: "internship",
  },
  {
    date: "August 2015 - June 2020",
    title: "Bachelor's Degree",
    company: "Adana A. T. Science and Technology University",
    description: [
      "Bachelor of Science in Electrical and Electronics Engineering.",
      "GPA: 3.17/4.00",
    ],
    technologies: ["Python"],
    type: "education",
  },
]

export default experiences
