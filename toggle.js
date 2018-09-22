var button= document.getElementsByTagName("button")[0];
var body = document.querySelector("body");
// isPurple = false;
// button.addEventListener("click", function(){
//     if (isPurple){
//         document.body.style.background = "white";
//         // isPurple = false;
//     }else {
//         document.body.style.background = "purple";
//         // isPurple = true;
//     }
//     isPurple = !isPurple;
// });

// Other way:
button.addEventListener("click", function(){
    body.classList.toggle("purple");
});