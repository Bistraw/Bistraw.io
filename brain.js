$(document).ready(function(){
    $("#bistrawText").hover(
        function() {
            // Mouseover event
            $(this).text("Leslie Miroslava Benítez Marín"); // Change "Bistraw" to "New Text"
        }, 
        function() {
            // Mouseout event
            $(this).text("Bistraw"); // Revert back to "Bistraw"
        }
    );


    

});