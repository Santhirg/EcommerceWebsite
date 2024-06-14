var sideopen=document.querySelector(".side-navbar")
var toggle=document.querySelector(".menu-toggle")
var cancelbar=document.querySelector(".cancel")

toggle.addEventListener("click",function(){
    sideopen.style.left="0"
})
cancelbar.addEventListener("click",function(){
    sideopen.style.left="-60%"
})

