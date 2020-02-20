function hideOverlay(){
$("#overlay").css("width", "0%");
}

function aboutOverlay(){
if(document.getElementById("about").style.width == "100%"){
	$("#about").css("width", "2.5%");
}else{
	$("#about").css("width", "100%");
}
}
