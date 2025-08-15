export const socialMediaLinks = [
    {
        label: "Linked In",
        icon: "pi pi-linkedin",
        href: "https://www.linkedin.com/in/florenz-de-jesus"
    },
    {
        label: "Github",
        icon: "pi pi-github",
        href: "https://github.com/iamflorenz08"
    },
    {
        label: "Instagram",
        icon: "pi pi-instagram",
        href: "https://www.instagram.com/iamflorenz08/"
    },
];


export const skills = [
    {
        label: "Node JS",
        icon: "devicon:nodejs",
    },
    {
        label: "Fastify",
        icon: "devicon:fastify",
    },
    {
        label: "Express",
        icon: "devicon:express",
    },
    {
        label: "AWS",
        icon: "devicon:amazonwebservices-wordmark",
    },
    {
        label: "MySQL",
        icon: "devicon:mysql-wordmark",
    },
    {
        label: "PostgreSQL",
        icon: "devicon:postgresql",
    },
    {
        label: "MongoDB",
        icon: "devicon:mongodb",
    },
    {
        label: "Vue",
        icon: "devicon:vuejs",
    },
    {
        label: "Nuxt",
        icon: "devicon:nuxtjs",
    },
    {
        label: "React",
        icon: "devicon:react",
    },
    {
        label: "Next",
        icon: "devicon:nextjs",
    },

    {
        label: "Typescript",
        icon: "devicon:typescript",
    },
    {
        label: "Javascript",
        icon: "devicon:javascript",
    },
];


export const events = [
    {
        company: "Jeremiah 2911 Corporation",
        position: "Mid Software Developer",
        description: "I work on building and maintaining the core of our internal systems — everything from authentication and ticketing to messaging, accomplishment reports, and announcements. I set up CI/CD pipelines with GitHub Actions so updates roll out quickly and reliably. I stick to best practices and solid architectural patterns to keep our codebase clean and future-ready. With Nuxt.js, Fastify, and MySQL, I create applications that are both powerful and scalable. I also handle deployments and keep our AWS infrastructure running smoothly.",
        animate:
            "animate-enter fade-in-10 slide-in-from-r-10 animate-duration-1500",
        animateMobile:
            "animate-enter fade-in-10 slide-in-from-r-10 animate-duration-1500",
    },
    {
        company: "My Dream Visa LLC",
        position: "Software Engineer",
        description: "Translated Figma designs into functional, responsive components and developed APIs for efficient data handling and report generation. Refactored components to improve reusability, maintainability, and overall performance. Contributed to the admin panel’s development, enhancing both functionality and user experience. Provided training and mentorship to software developer interns, fostering their growth and technical skills. Leveraged Quasar, Nuxt.js, Express, and MySQL to deliver scalable, high-performance solutions.",
        animate:
            "animate-enter fade-in-10 slide-in-from-l-10 animate-duration-1500",
        animateMobile:
            "animate-enter fade-in-10 slide-in-from-r-10 animate-duration-1500",
    },
    {
        company: "Lucky Savers",
        position: "Freelance Web Developer",
        description: "Developed an e-commerce website for a small-scale business, managing the entire project lifecycle from design to deployment. Oversaw all stages of development, testing, and deployment to ensure a smooth launch. Designed and implemented features to meet business requirements and enhance user experience. Applied best practices to ensure scalability, security, and maintainability. Utilized React, Next.js, Node.js, and MongoDB to deliver a robust, high-performance solution.",
        animate:
            "animate-enter fade-in-10 slide-in-from-r-10 animate-duration-1500",
        animateMobile:
            "animate-enter fade-in-10 slide-in-from-r-10 animate-duration-1500",
    },
];


export const projects = [
    {
        title: "J2911 Internal System",
        cover: "/img/fcph_logo.png",
        imgClass: "object-contain",
        description:
            "Led the design and implementation of core modules, including authentication, ticketing, manpower request forms, daily accomplishment reports, chat, and announcements — all aimed at streamlining internal workflows. Integrated CI/ CD pipelines to ensure faster, more reliable deployments and reduce release downtime.",
        techStack: [
            {
                label: "Vue",
                icon: "devicon:vuejs",
            },
            {
                label: "Nuxt",
                icon: "devicon:nuxtjs",
            },
            {
                label: "Node JS",
                icon: "devicon:nodejs",
            },
            {
                label: "Fastify",
                icon: "devicon:fastify",
            },
            {
                label: "MySQL",
                icon: "devicon:mysql",
            },
            {
                label: "AWS",
                icon: "devicon:amazonwebservices-wordmark",
            },
        ],
        gallery: [
            {
                src: "/img/fcph_logo.png",
                alt: "Cover",
                imgClass: "scale-50 object-contain",
            },
            {
                src: "/gallery/j2911/slide_1.png",
                alt: "Slide 1",
            },
        ],
        demoLink: "https://fcphilippines.com"
    },
    {
        title: "My Dream Visa",
        cover: "/img/mdv_logo.png",
        imgClass: "object-contain",
        description:
            "This project was a continuation of work initiated by our lead developers. Together with my co-developer, we migrated the Vue codebase from the Options API to the Composition API, improving readability and maintainability. We continuously added features based on evolving business requirements. My significant contributions include making the navigation system reusable — a key improvement for an application with numerous step-based questions — as well as developing the report generation feature and the admin panel.",
        techStack: [
            {
                label: "Vue",
                icon: "devicon:vuejs",
            },
            {
                label: "Quasar",
                icon: "devicon:quasar",
            },
            {
                label: "Nuxt",
                icon: "devicon:nuxtjs",
            },
            {
                label: "Node JS",
                icon: "devicon:nodejs",
            },
            {
                label: "Express",
                icon: "devicon:express",
            },
            {
                label: "MySQL",
                icon: "devicon:mysql",
            },
        ],
        gallery: [
            {
                src: "/img/mdv_logo.png",
                alt: "Cover",
                imgClass: "scale-50 object-contain",
            },
            {
                src: "/gallery/mdv/slide_1.png",
                alt: "Slide 1",
            },
            {
                src: "/gallery/mdv/slide_2.png",
                alt: "Slide 2",
            },
            {
                src: "/gallery/mdv/slide_3.png",
                alt: "Slide 3",
            },
        ],
        demoLink: "https://mydreamvisa.com"
    },
    {
        title: "EroHub",
        cover: "/img/erohub_logo.png",
        imgClass: "object-cover",
        description:
            "This is a thesis project and the project I’m most proud of — it became a Most Innovative Project Finalist and earned me the title of Most Promising Application Developer. I led the development of this project, which aims to improve student engagement in a Learning Management System (LMS). To solve this challenge, we gamified the LMS and, for our forum discussions, implemented a hybrid recommender algorithm to suggest forums that might interest students, encouraging active participation.",
        techStack: [
            {
                label: "React",
                icon: "devicon:react",
            },
            {
                label: "Next",
                icon: "devicon:nextjs",
            },
            {
                label: "Node JS",
                icon: "devicon:nodejs",
            },
            {
                label: "Fastify",
                icon: "devicon:fastify",
            },
            {
                label: "MongoDB",
                icon: "devicon:mongodb",
            },
        ],
        gallery: [
            {
                src: "/img/erohub_logo.png",
                alt: "Cover",
                imgClass: "scale-50 object-contain",
            },
            {
                src: "/gallery/erohub/slide_1.png",
                alt: "Slide 1",
            },
            {
                src: "/gallery/erohub/slide_2.png",
                alt: "Slide 2",
            },
            {
                src: "/gallery/erohub/slide_3.png",
                alt: "Slide 3",
            },
            {
                src: "/gallery/erohub/slide_4.png",
                alt: "Slide 4",
            },
            {
                src: "/gallery/erohub/slide_5.png",
                alt: "Slide 5",
            },
            {
                src: "/gallery/erohub/slide_6.png",
                alt: "Slide 6",
            },
        ],
        githubLink: "https://github.com/iamflorenz08/Erovoutika-LMS"
    },
    {
        title: "Lucky Savers",
        cover: "/img/luckysavers_logo.png",
        class: "!bg-green-600",
        imgClass: "object-contain",
        description:
            "It was a freelance project with the goal of creating an online grocery store. Since the business was already using Loyverse as their POS, I developed a landing page and an admin panel to manage orders. I leveraged the Loyverse API and webhooks, integrating them seamlessly into the system I built to ensure smooth synchronization between sales and order management.",
        techStack: [
            {
                label: "React",
                icon: "devicon:react",
            },
            {
                label: "Next",
                icon: "devicon:nextjs",
            },
            {
                label: "Node JS",
                icon: "devicon:nodejs",
            },
            {
                label: "Fastify",
                icon: "devicon:fastify",
            },
            {
                label: "MongoDB",
                icon: "devicon:mongodb",
            },
            {
                label: "AWS",
                icon: "devicon:amazonwebservices-wordmark",
            },
        ],
        gallery: [
            {
                src: "/img/luckysavers_logo.png",
                alt: "Cover",
                imgClass: "scale-50 object-contain bg-green-600 p-4",
            },
            {
                src: "/gallery/luckysavers/slide_1.png",
                alt: "Slide 1",
            },
            {
                src: "/gallery/luckysavers/slide_2.png",
                alt: "Slide 2",
            },
            {
                src: "/gallery/luckysavers/slide_3.png",
                alt: "Slide 3",
            },
            {
                src: "/gallery/luckysavers/slide_4.png",
                alt: "Slide 4",
            },
            {
                src: "/gallery/luckysavers/slide_5.png",
                alt: "Slide 5",
            },
        ],
        demoLink: "https://theluckysavers.com",
    },
    {
        title: "VMeme",
        cover: "/img/vmeme_logo.webp",
        imgClass: "object-contain",
        description:
            "A freelance project, used as an MVP. I was asked to create a web application for artworks. Since they would be posting pictures, they mentioned the system should have a stamping feature to prevent them from being used on other platforms. This application also includes an ordering system and an admin panel for content management.",
        techStack: [
            {
                label: "React",
                icon: "devicon:react",
            },
            {
                label: "Next",
                icon: "devicon:nextjs",
            },
            {
                label: "Node JS",
                icon: "devicon:nodejs",
            },
            {
                label: "Fastify",
                icon: "devicon:fastify",
            },
            {
                label: "MongoDB",
                icon: "devicon:mongodb",
            },
            {
                label: "Vercel",
                icon: "devicon:vercel",
            },
        ],
        gallery: [
            {
                src: "/img/vmeme_logo.webp",
                alt: "Cover",
                imgClass: "scale-50 object-contain",
            },
            {
                src: "/gallery/vmeme/slide_1.png",
                alt: "Slide 1",
            },
            {
                src: "/gallery/vmeme/slide_2.png",
                alt: "Slide 2",
            },
            {
                src: "/gallery/vmeme/slide_3.png",
                alt: "Slide 3",
            },
            {
                src: "/gallery/vmeme/slide_4.png",
                alt: "Slide 4",
            },
        ],
        githubLink: "https://github.com/iamflorenz08/VMeme-Client",
        demoLink: "https://vmeme.vercel.app",
    },
    {
        title: "Community Crave",
        cover: "/img/cc_logo.png",
        imgClass: "object-contain",
        description:
            "A freelance project — this was developed as an MVP to help a small-scale business within a community sell their products. The system was designed to act as a middleman between customers and business owners, managing orders and deliveries. It functioned similarly to Grab but was intended exclusively for a specific local community.",
        techStack: [
            {
                label: "React",
                icon: "devicon:react",
            },
            {
                label: "Next",
                icon: "devicon:nextjs",
            },
            {
                label: "Node JS",
                icon: "devicon:nodejs",
            },
            {
                label: "Fastify",
                icon: "devicon:fastify",
            },
            {
                label: "MongoDB",
                icon: "devicon:mongodb",
            },
            {
                label: "Vercel",
                icon: "devicon:vercel",
            },
        ],
        gallery: [
            {
                src: "/img/cc_logo.png",
                alt: "Cover",
                imgClass: "scale-50 object-contain",
            },
            {
                src: "/gallery/cc/slide_1.png",
                alt: "Slide 1",
            },
            {
                src: "/gallery/cc/slide_2.png",
                alt: "Slide 2",
            },
            {
                src: "/gallery/cc/slide_3.png",
                alt: "Slide 3",
            },
        ],
        githubLink: "https://github.com/iamflorenz08/Community-Crave-Client",
        demoLink: "https://community-crave.vercel.app",
    },
];
