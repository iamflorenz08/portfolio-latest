export const gotoSection = (sectionId?: string) => {
    if (!sectionId) return;
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 100;
        const topPosition =
            section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
};