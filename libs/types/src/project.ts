export type TProject = {
    title: string;
    cover: string;
    class?: string;
    imgClass?: string;
    description: string;
    techStack: {
        label: string;
        icon: string;
    }[];
    gallery: {
        src: string;
        alt: string;
    }[];
    githubLink?: string;
    demoLink?: string;
};