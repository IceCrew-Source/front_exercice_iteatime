document.getElementById("dropdown_icon").addEventListener("click", showDropdownMenu);
for (var i = 0; i < document.getElementsByClassName("menu_item").length; i++) {
    document.getElementsByClassName("menu_item")[i].addEventListener("click", hideDropdownMenu);
};

function showDropdownMenu() {
    document.getElementById("menu_items").style.transform="translateX(0)";
    document.getElementById("menu_items").style.transition=" all 1s" 
}

function hideDropdownMenu() {
    document.getElementById("menu_items").style.transform="translateX(-100%)";
    document.getElementById("menu_items").style.transition=" all 1s" 
}
