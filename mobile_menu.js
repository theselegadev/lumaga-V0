let menu = document.getElementById("menu")
let navlist = document.getElementById("nav-list")
let lifeMenu = false
let line1 = document.getElementById("line1")
let line2 = document.getElementById("line2")
let line3 = document.getElementById("line3")

menu.addEventListener('click',()=>{
    if(lifeMenu == false){
        navlist.style.transform = "translateX(0%)"
        navlist.style.transition = "all 500ms"
        lifeMenu = true
        line1.style.transition = "all 500ms"
        line2.style.transition = "all 500ms"
        line3.style.transition = "all 500ms"
        line1.style.transform = "rotate(-45deg) translate(-8px,8px)"
        line2.style.opacity = 0
        line3.style.transform = "rotate(45deg) translate(-5px,-7px)"
    }else{
        navlist.style.transform = "translateX(100%)"
        lifeMenu = false
        line1.style.transform = "rotate(0)"
        line2.style.opacity = 100
        line3.style.transform = "rotate(0)"
    }
    
})