var menu = document.getElementsByClassName('menu')[0];
var menuList = document.getElementsByClassName('menuList')[0];
var main = document.getElementsByClassName('main')[0];
var list =  Array.from(document.getElementsByClassName('options2')[0].children);



document.body.style.height = window.innerHeight;

menuList.style.transform = "translateX(100%)";
menuList.style.top = 151;

var closeMenuList = function () {
    if (menuList.style.transform == "translateX(0%)") {
        menu.children[1].style.display = "flex";
        menu.children[0].style.transform = menu.children[2].style.transform = "";
        menu.children[0].style.backgroundColor = menu.children[2].style.backgroundColor = "white";
        menuList.style.transform = "translateX(100%)";
    }
};


menu.addEventListener('click' , function () {
    
    if (menuList.style.transform == "translateX(100%)") {
        menu.children[0].style.transform = "rotate(51deg) translate(27px ,-1px)";
        menu.children[0].style.backgroundColor = "rgb(250, 94, 67)";
        menu.children[1].style.display = "none";
        menu.children[2].style.transform = "rotate(-50deg) translate(7px,15px)";
        menu.children[2].style.backgroundColor = "rgb(71, 74, 255)";    
        
        menuList.style.transform = "translateX(0%)";
    }
    else{
        closeMenuList();
    }
});

main.addEventListener("click" , () => closeMenuList());

list.forEach(list => {
    list.addEventListener("click", () => closeMenuList());
});

