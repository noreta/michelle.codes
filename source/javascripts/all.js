// = require_tree .
$(document).ready(function(){
        // handle the mouseenter functionality
        $(".landing-work-featured-image").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
});
