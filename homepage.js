$(document).ready(function(){
    // jquery for navbar toggle on small screen
    $("label").click(function(){
        $("nav div ul#first").toggleClass("active");
    });
    
});

// javaScript code to change images after 5 second
const imgElement1 = document.querySelector('#HeaderImage');
const imgElement2 = document.querySelector('#why-our-dbms');
function change() {
   imgElement1.src = 'images/headerImageLoop.gif';
   imgElement2.src = 'images/why-our-dbms2.gif';
}
window.onload = function () {
    setInterval(change, 5000);
};

