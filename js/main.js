//!---------------------- GLOBAL--------------------------
let imgs =Array.from(document.querySelectorAll('.item img')); 
let lightBox = document.getElementById('lightBox');
let close =document.getElementById('close');
let layer =document.getElementById('layer');
let nextSlider= document.getElementById('next')
let prevSlider = document.getElementById('prev')
let cuurentIndex =0



//!-----------------FUNCTIONS-----------------------------
function closeSlider(){
    lightBox.classList.add('d-none');
}

function next(){
cuurentIndex++;
if(cuurentIndex == imgs.length){
    cuurentIndex =0
}
let currentElementSrc =imgs[cuurentIndex].getAttribute('src');
layer.style.backgroundImage =`url(${currentElementSrc})`;
}

function prev(){
    cuurentIndex--;
    if(cuurentIndex < 0){
        cuurentIndex= imgs.length-1
    }
    let currentElementSrc =imgs[cuurentIndex].getAttribute('src');
    layer.style.backgroundImage =`url(${currentElementSrc})`;
    
}

// !-----------------EVEVNTS------------------------------
for(let i = 0 ; i < imgs.length; i++){
    imgs[i].addEventListener('click', function(e){
    let showIndex= e.target;
    cuurentIndex= imgs.indexOf(showIndex);
    lightBox.classList.remove('d-none');
    let showsrc = e.target.getAttribute('src');
    layer.style.backgroundImage= `url(${showsrc})`;
    })
}

close.addEventListener('click', function(){
    closeSlider();
})

nextSlider.addEventListener('click' , function(){
    next()
})

prevSlider.addEventListener('click', function(){
    prev()
})

document.addEventListener('click', function(e){
    if(e.target == lightBox){
        closeSlider()
    }
});

document.addEventListener('keydown', function(e){
    switch (e.key) {
        case "ArrowRight":
            next()
            break;
            case "ArrowLeft":
                prev()
                break;
                case "Escape" :
        closeSlider()
            break;
    }
})