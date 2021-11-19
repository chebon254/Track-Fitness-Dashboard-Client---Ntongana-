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




/* == Drop Down == */
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
var dropone = document.getElementsByClassName("drop-one")[0];
function dropOne() {
    if (dropone.style.display = "none") {
        dropone.style.display = "block";
    }else{
        dropone.style.display = "none";
    }
}

var droptwo = document.getElementsByClassName("drop-two")[0];
function dropTwo() {
    if (droptwo.style.display = "none") {
        droptwo.style.display = "block";
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.style.display = "block") {
        openDropdown.style.display = "none";
    }
    }
}
}