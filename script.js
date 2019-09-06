/* var btndark =document.getElementById("dark");
var jb1= document.getElementById("j1");
var jb2= document.getElementById("j2");

 btndark.addEventListener("click",function(){
    if(jb1.classList.contains("jts")) {
        jb1.classList.remove("jts");
        jb1.classList.add("jts2");
        jb2.classList.remove("jts");   
        jb2.classList.add("jts2");
        btndark.textContent="light";
        btndark.classList.remove("btn-outline-dark");
        btndark.classList.add("btn-outline-light");
    }
    else{
        jb1.classList.remove("jts2");
        jb1.classList.add("jts");
        jb2.classList.remove("jts2");   
        jb2.classList.add("jts");
        btndark.textContent="dark";
        btndark.classList.remove("btn-outline-light");
        btndark.classList.add("btn-outline-dark");
        
    }
})
*/

$("button").click(function(){
    $(".jumbotron").toggleClass("jts");
    $(".jumbotron").toggleClass("jts2");
    $(this).toggleClass("btn-outline-light");
    $(this).toggleClass("btn-outline-dark");
    $(this).text($(this).text() == 'Light' ? 'Dark' : "Light");
})



var allq=$("blockquote");
var cq=0;

function changeq()
{
    $(allq[cq]).fadeOut(300, function(){
        if(cq==allq.length-1)
        {
            cq=0;
        }
        else{
            cq++;
        }
        $(allq[cq]).fadeIn(300);
    });
    
}
    var qt=setInterval(changeq, 3000);