const modal=document.createElement('div');
modal.id='modal';
document.body.appendChild(modal);

const images=document.querySelectorAll('.img');
images.forEach(img=>{
    img.addEventListener('click',()=>{
        modal.classList.add('active');
        const image = document.createElement('img');
        image.src=img.src;
        image.id='img';
        while(modal.firstChild){
            modal.removeChild(modal.firstChild);
        }
        modal.appendChild(image);
    })
});

modal.addEventListener('click',()=>{
    modal.classList.remove('active');
});