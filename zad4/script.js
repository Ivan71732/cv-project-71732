function setRed() {
    document.getElementById("theme").href = "red.css";
}

function setGreen() {
    document.getElementById("theme").href = "green.css";
}

function toggleProjects() {
    const section = document.getElementById("projekty");
    section.hidden = !section.hidden;
}
