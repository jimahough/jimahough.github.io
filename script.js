function scrollToSection(sectionNumber) {
    const sectionId = `#section${sectionNumber}`;
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}