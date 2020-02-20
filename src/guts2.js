var aCount = 0;
var acCount = 0;
var bCount = 0;
var conCount = 0;
//
//	GENERATION OF INTERFACE
//
function generateGuts(modeWidth, modeHeight, menuType, stat){
var h = Math.floor(modeHeight/270);
for(i=0; i<h; i++){
	makeContainer(modeWidth, menuType, stat);
}
}
//
//	MAKING CONTAINER's
//
function makeContainer(width, menu, stat){
var container = document.createElement("div");
$(container)
.attr("id", "con"+i+conCount)
.addClass("container")
.appendTo("#guts");
while(width>=270 || width>=135){
	switch(randomizer(-1,1)){
		case 0:
			makeA(container, menu, stat);
			width=width-135;
		break;
		case 1:
			makeB(container, menu, stat);
			width=width-270;
		break;
	}
}
conCount++;
}
//
//	MAKING 'A'
//
function makeA(parentID, type, stat){
var ac = document.createElement("div"), a, ass, ass2, imageUrl;
$(ac)
.attr("id", "ac"+i+acCount)
.addClass("axc")
.appendTo(parentID);
acCount++;	
for(l=0; l<2; l++){
	a = document.createElement("div");
	switch(type){
		case "random":
			ass = assignPic(randomizer(-1,4));
		break;
		default:
			ass = type;
		break;
	}
	ass2 = assignPic2(ass)+".jpg";
	imageUrl = "url('"+ass+"/"+ass2+"')";
	$(a)
	.attr("id", "a"+i+aCount)
	.addClass("ax1 "+ass+" "+stat+" "+ass2)
	.css("background-image", imageUrl)
	.appendTo(ac)
	.click(function(){pickClick(this.className, "active")});
	aCount++;
}
}
//
//	MAKING 'B'
//
function makeB(parentID, type, stat){
var b = document.createElement("div"), ass, ass2, imageUrl;
switch(type){
	case "random":
		ass = assignPic(randomizer(-1,4));
	break;
	default: 
		ass = type;
	break;	
}
ass2 = assignPic2(ass)+".jpg";
imageUrl = "url('"+ass+"/"+ass2+"')";
$(b)
.attr("id", "b"+i+bCount)
.addClass("bx4 "+ass+" "+stat+" "+ass2)
.css("background-image", imageUrl)
.appendTo(parentID)
.click(function(){pickClick(this.className, "active")});
bCount++;
}
//
//	ASSIGNING PICTURES FOR HOME PAGE
//
function assignPic(picType){
switch(picType){
	case 0: 
		return "drawings";
	break;
	case 1: 
		return "apps_sites";
	break;
	case 2: 
		return "magazines_news";
	break;
	case 3: 
		return "pr_material";
	break;
	case 4:
		return "hardware";
	break;
}	
}
//
//	ASSIGN RANDOMIZED PICTURE TO FIELD
//
function assignPic2(picNum){
switch(picNum){
	case "drawings": 
		return randomizer(-1, 21);
	break;
	case "apps_sites":
		return randomizer(-1, 33);	
	break;
	case "magazines_news":
		return randomizer(-1, 20);
	break;
	case "pr_material":
		return randomizer(-1, 29);
	break;
	case "hardware":
		return randomizer(-1, 38);
	break;
	case "michal":
		return randomizer(-1, 68);
	break;
}
}
//
//	CLEANER
//
function clearGuts(){
$("#guts").empty();
}
