$(document).ready(function(){$(".landing-work-featured-image").mouseenter(function(){$(this).addClass("hover")}).mouseleave(function(){$(this).removeClass("hover")})}),$(document).ready(function(){function n(n){$(n).addClass("loaded")}$(".js-load-animations").each(function(){var o=$(this);o.prop("complete")?n(o):o.load(function(){n(this)})}),$(".js-static-load-animations").each(function(o,e){setTimeout(function(){n(e)},0)})});