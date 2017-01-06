 $("document").ready(function() {
 	var themeChanger = "<p>&#x07DB;</p>";
 	
 	$("body").append(themeChanger);
 	themeChanger.addClass("theme-changer")
 	$(".theme-changer").css({"position": "absolute", "top": "10px", "right": "10px"});
  });