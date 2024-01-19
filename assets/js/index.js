let border = false;
let box = document.querySelector('.box');
box.addEventListener('click',()=>{
    if(!border){
        box.style.border= 'solid 1px red';
        border=true;
    }else{
        box.style.border= 'solid 0px red';
        border=false;
    }
})
