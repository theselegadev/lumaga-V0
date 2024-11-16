const elements = document.querySelectorAll('.hidden')

const myObserver = new IntersectionObserver((info)=>{
    info.forEach((item)=>{
        if(item.isIntersecting){
            item.target.classList.add('show')
        }
    })
})

elements.forEach((item)=>{
    myObserver.observe(item)
})
