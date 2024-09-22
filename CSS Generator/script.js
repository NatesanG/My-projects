document.addEventListener("DOMContentLoaded",()=>{
    const container=document.querySelector(".container");
    const allBorder = document.getElementById("all");
    const allValue = document.getElementById("all-value");
    const code = document.getElementById("code");
    const btnCopy = document.querySelector("#btn-copy");

    var allRadius=10;
    var coding=" ";
    function allBorderUpdate(){
        allRadius=allBorder.value;
        allValue.innerText = allRadius+"px"; 
        coding=`
        border-radius:${allRadius}px
        `;
        code.value = coding;
        container.style.cssText=coding;
    }

    allBorder.addEventListener("mousemove",allBorderUpdate);
    allBorder.addEventListener("change",allBorderUpdate);
    btnCopy.addEventListener('click',()=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied");
    });
    allBorderUpdate();
   
});