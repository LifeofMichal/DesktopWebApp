$(document).ready(function(){
	$("#overlay").click(hideOverlay);	
	$("#about").click(aboutOverlay);
	$("#about").mouseover(aboutOverlay);
	generateGuts(screen.width, screen.height, "random", "inactive");
});
