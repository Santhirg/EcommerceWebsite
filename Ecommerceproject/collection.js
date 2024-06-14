var productContainer=document.getElementById("product")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for( var i=0;i<productlist.length;i++)
    {
        var productname=productlist[i].querySelector("p").textContent.toUpperCase()
    // console.log(productname);
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"

            
        }
    }


})