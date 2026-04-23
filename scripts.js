 
if(document.getElementById("quote")){  
 var quote= document.getElementById("quote");
quote.addEventListener("mouseover", mouseOver);
quote.addEventListener("mouseout", mouseOut);
}
function mouseOver(){
    var quote= document.getElementById("quote");
    quote.style.backgroundColor= "#d79ca9";
    quote.style.fontStyle="normal";

}
function mouseOut(){
    var quote= document.getElementById("quote");
    quote.style.backgroundColor="#faf3eb";
    quote.style.fontStyle="italic";

}

if (document.getElementById("contactForm")) { 
    var contactForm= document.getElementById("contactForm");
    contactForm.onsubmit = validate;


}
function validate(){

var name= document.getElementById("name").value;
var email=document.getElementById("email").value;
if(name==""|| email==""){
    alert("Please fill out all required fields.")
    return false; // to not submit
}
else
    return true; //to submit


}
function projectButton(projectID){
    var elementDescription= document.getElementById(projectID);
    if(elementDescription.style.display=="block")
        elementDescription.style.display="none";
    else
        elementDescription.style.display="block";

}
 
window.onload=finishLoad;
function finishLoad(){
    if(document.title=="Homepage"){
    var newp= document.createElement("p");
    var currentDate= Date();
    var textMessage= document.createTextNode( "Page loaded on: "+currentDate);
    newp.appendChild(textMessage);
    var footer= document.querySelector("footer");
    footer.appendChild(newp);
}
}
 





