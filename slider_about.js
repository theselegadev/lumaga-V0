const image_about = document.getElementById('images-about')
const images = document.querySelectorAll("#image-slider")
let cont = 0

function slider(){
    cont ++

    if(cont > images.length -1){
        cont = 0
    }
    
    image_about.style.transform = `translateX(${-cont * 50}%)`
}

setInterval(slider,5000)