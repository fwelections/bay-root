var gridView = $("#grid-control").length > 0;
var $bar = $(".bar");
if ($bar.length) {
var $links = $(".bar-section a");
$links.on('click', function() {
if (!$(this).hasClass("on")) {
var href = $(this).attr('href').replace(/^#/, ''),
option = $.deparam(href, true);
//alert(href);
//date switching
$.bbq.pushState(option);
}
return false;
});
} 

var $typeLinks = $(".bar-section-view a");
var $catLinks = $(".bar-section-cat a");
$(window).bind('hashchange', function(event) {
	var hashOptions = $.deparam.fragment();
	if (hashOptions.date == null) hashOptions.date = "59";
	if (hashOptions.conf == null) hashOptions.conf = "minorities";
	var filter = "";
	for (var opt in hashOptions) {
		if (hashOptions[opt] != "minorities") {
			filter += "." + hashOptions[opt];
		}
	}
	var $typeLink = $typeLinks.filter("[href='#date=" + hashOptions.date +"']");
	$typeLinks.removeClass("on");
	$typeLink.addClass("on");
	var $catLink = $catLinks.filter("[href='#conf=" + hashOptions.conf +"']");
	var removeClass = $catLinks.filter(".on").length > 0 ? $catLinks.filter(".on").attr("href").replace("#config=","") : "minorities";
	$(".categories .menu").html($catLink.html()).removeClass(removeClass).addClass(hashOptions.category).append("<em></em>");
	$catLinks.removeClass("on");
	$catLink.addClass("on");
        changeMap(hashOptions);
	})
.trigger('hashchange');
var $catMenu = $(".bar .bar-section-cat"), timeOut;
if ($catMenu.length) {
var $cats = $catMenu.find("ul");
$catMenu.hover(function() {
clearTimeout(timeOut);
$cats.css("display", "block");
}, function() {
clearTimeout(timeOut);
timeOut = setTimeout(function() {
$cats.css("display", "none");
}, 500);
});
}
var $about = $(".about");
var $aboutBox = $("#about-box");
if ($about.length && $aboutBox.length) {
$about.colorbox({
inline:true,
width:"780px",
left:"220px",
href:"#about-box",
scrolling:false,
onClosed: function() {
console.log("home closed ");
}
});

$("#about-box .close").on('click', function() {
$.colorbox.close();
return false;
});
} 

$(".home").colorbox({
inline:true,
width:"780px",
left:"220px",
closeButton:false,
href:"#home-box",
scrolling:false,
onClosed: function() {
console.log("home closed ");
}
});
$('.home').trigger('click');
$('#confession').live('click', function(){
$.colorbox.close();
});
