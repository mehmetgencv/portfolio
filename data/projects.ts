export interface Project {
    name: string
    description: string
    images: string[]
    github: string
    link: string
    techStack: string[]
}

export const projects: Project[] = [
    {
        name: "Kasyus E-Commerce Platform",
        description: `Kasyus is a cloud-native, microservices-based e-commerce platform built with Java 21 and Spring Boot. It includes features like authentication, product catalog, cart, user profiles, Kafka-based messaging, and full observability.`,
        images: [
            "/projects/kasyus/KasyusArchitectureDiagram.png",
            "/projects/kasyus/homepage.png",
            "/projects/kasyus/cart.png",
            "/projects/kasyus/profile-details.png"
        ],
        github: "https://github.com/mehmetgencv/kasyus",
        link: "https://github.com/mehmetgencv/kasyus",
        techStack: [
            "Java 21", "Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL", "Redis", "MinIO",
            "Docker",
            "Kubernetes"
        ]
    },
    {
        name: "Restaurant Recommendation Platform",
        description: `This project provides a platform where users can review restaurants and receive personalized recommendations. Features include:
                - User and restaurant CRUD operations
                - Comment management
                - A recommendation API`,
        images: ["/projects/RestaurantRPlatform/RestaurantRecommendationPlatform.png"],
        github: "https://github.com/mehmetgencv/n11-TalentHub-Backend-Bootcamp-Final-Case",
        link: "https://github.com/mehmetgencv/n11-TalentHub-Backend-Bootcamp-Final-Case-Frontend",
        techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker"]
    },
    {
        name: "Real-Time Trading Signal System",
        description: `This is a real-time event-driven algorithmic trading system. It retrieves live order book data, calculates moving averages (SMA), detects crossovers, and publishes BUY/SELL signals using Kafka.`,
        images: ["/projects/algotrading/algotradingDiagram.png"],
        github: "https://github.com/mehmetgencv/algotrading-case-study",
        link: "https://github.com/mehmetgencv/algotrading-case-study",
        techStack: [
            "Python",
            "WebSocket",
            "Redis",
            "Kafka",
            "MongoDB",
            "Matplotlib",
            "Docker"
        ]
    },

    {
        name: "Expense Tracker - Spring Boot",
        description:
            "Expense Tracker is a RESTful web application that allows users to track their expenses, generate reports, and visualize data through various endpoints. Built with Spring Boot.",
        images: ["/projects/expenseTracker/expenseTrackerSpringBoot.PNG"],
        github: "https://github.com/mehmetgencv/expense-tracker",
        link: "https://github.com/mehmetgencv/expense-tracker",
        techStack: ["Java", "Spring Boot", "MySQL", "REST API"]
    },
    {
        name: "Shortify - URL Shortening Service",
        description: `Shortify is a modern, high-performance URL shortening service built with FastAPI. It offers a robust API for shortening, managing, and tracking URLs — with analytics, Redis caching, and OpenAPI docs.`,
        images: ["/projects/shortify/shortifyDiagram.png"],
        github: "https://github.com/mehmetgencv/shortify",
        link: "https://github.com/mehmetgencv/shortify",
        techStack: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Pytest",
            "Swagger"
        ]
    }

]
