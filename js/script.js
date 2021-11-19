//Create A Responsive Menu Hide Show Side Menu
const menu = document.querySelector(".navbar-links");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

// Onclick For Menu Bar
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}
