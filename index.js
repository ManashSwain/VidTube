let menuicon =document.getElementById("nav-menu");
let sidebar = document.getElementById("mini-sidebar");
let maincontainer =document.getElementById("maincontainer");

function togglesidebar() {
    sidebar.classList.toggle("small-sidebar");
    maincontainer.classList.toggle("modified-container");
}

