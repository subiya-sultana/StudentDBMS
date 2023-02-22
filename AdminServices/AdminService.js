console.log("hello this is admin services js file");

// jquery code here
$(document).ready(function(){
    // showing sidebar on click of menu icon
    $('nav .fa-bars').click(function(){
        $(this).toggleClass('active');
        $('.sidebar').animate({width: 'toggle'},'fast','linear');
    });


});