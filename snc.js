const label = document.querySelectorAll('.label label')
const bi = document.querySelectorAll('.label label .bi')
const slides = document.querySelector('.slides')
for(let i=0;i<label.length;i++){
    label[i].addEventListener('click',function(){
        slides.style.animationName='block'
        setTimeout(()=>{
            slides.style.animationName='sliding'
            for(let j=0;j<label.length;j++){
                bi[j].style.backgroundColor=''
            }
        },2100)
        for(let j=0;j<label.length;j++){
            label[j].classList.remove('open')
            bi[j].style.backgroundColor=''
        }
        bi[i].style.backgroundColor='greenyellow'
        this.classList.add('open')

        if(label[0].classList.contains('open')){
            slides.style.left='0'
        }else if(label[1].classList.contains('open')){
            slides.style.left='-100%'
        }else if(label[2].classList.contains('open')){
            slides.style.left='-200%'
        }
    })
    
}

