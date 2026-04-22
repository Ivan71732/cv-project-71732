function setRed() {
    document.getElementById("theme").href = "red.css";
}

function setGreen() {
    document.getElementById("theme").href = "green.css";
}

function toggleProjects() {
    const section = document.getElementById("projekty");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
