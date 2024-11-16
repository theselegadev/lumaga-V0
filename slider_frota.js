const container_images = document.getElementById('images')
const images = document.querySelectorAll('#images .box-slider')

let cont = 0
let ultimaImage = images.length -1

function slider (){
    cont ++

    if(window.innerWidth > 999){
        if(cont == ultimaImage){
            cont = 0
        }
    }else{
        if(cont == ultimaImage + 1){
            cont = 0
        }
    }

    if(window.innerWidth > 999){
        container_images.style.transform = `translateX(${-cont * 700}px)`
    }else{
        container_images.style.transform = `translateX(${-cont * 510}px)`
    }
}

setInterval(slider,3000)

console.log(images.length -1)