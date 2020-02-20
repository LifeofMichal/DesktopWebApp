function mediaClick(mediaType){
switch(mediaType){
	case "facebook":
		window.open("https://www.facebook.com/BeardLantern", "_blank");
	break;
	case "twitter":
		window.open("https://twitter.com/BeardLantern", "_blank");
	break;
	case "instagram":
		window.open("https://www.instagram.com/beardlantern/", "_blank");
	break;
	case "linkedin":
		window.open("https://www.linkedin.com/in/michal-maciej-dzienis-18186781", "_blank");
	break;
	case "github":
		window.open("https://github.com/BeardLantern", "_blank");
	break;
	case "gmail":
		window.open("mailto: dzienis.michal.maciej@gmail.com");
	break;
}
}


// fullClass = ax1orbx4 typeOfPicture active/inactive number.jpg
function pickClick(fullClass, stats){
var img = new Image(), url;
img.src = fullClass.split(" ")[1]+"/"+fullClass.split(" ")[3];
url = "url('"+fullClass.split(" ")[1]+"/"+fullClass.split(" ")[3]+"')";
switch(fullClass.split(" ")[2]){
case "inactive":
	clearGuts();
	$("#about").css("width", "0%");
	generateGuts(screen.width, screen.height, fullClass.split(" ")[1], stats);
	if(fullClass.split(" ")[1]=="michal"){
		$("#about").css("width", "2.5%");
	}
break;
case "active":
	$("#overlay").css("width", "100%");
	if (img.height > img.width){
		$("#magnify")
		.css("width", "40%")
		.css("height", "100%")
		.css("background-image", url);
	} else if(img.height < img.width){
		$("#magnify")
		.css("width", "80%")
		.css("height", "100%")
		.css("background-image", url);
	}
break;
}	
}
