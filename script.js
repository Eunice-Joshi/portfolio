document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Theme";
    toggleBtn.classList.add("toggle-mode");
    document.body.appendChild(toggleBtn);

    // Light/Dark Mode Toggle
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.color = "#121212";
            toggleBtn.style.background = "#333";
            toggleBtn.style.color = "#ffffff";
        } else {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#ffffff";
            toggleBtn.style.background = "#ff9800";
            toggleBtn.style.color = "#121212";
        }
    });

    // Reveal Sections on Scroll
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("active");
            }
        });
    }
    
    window.addEventListener("scroll", revealSections);
    revealSections(); // Run on load to reveal visible sections
});
function toggleProject(projectId) {
    let project = document.getElementById(projectId);
    if (project.style.display === "block") {
        project.style.display = "none";
    } else {
        project.style.display = "block";
    }
}
