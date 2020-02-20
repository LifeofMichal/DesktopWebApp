var bCount = 0;
var acCount = 0;
var aCount = 0;
var conCount = 0;
//
//	GENERATION OF INTERFACE
//
function generateGuts(modeWidth, modeHeight, menuType, stat){
for(i=0; i<2; i++){
	var cont = makeContainer();
	for(j=0; j<5; j++){
		switch(randomizer(0,2)){
			case 1:
				makeA(cont, menuType, stat);
			break;
			case 2:
				makeB(cont, menuType, stat);
			break;
		}
	}
}
}
//
//	MAKING CONTAINER's
//
function makeContainer(){
	var container = document.createElement("div");
	var conID = "con"+i +conCount;
	container.id = conID;
	container.className = "container";
	document.getElementById("guts").appendChild(container);
	conCount++;
	return conID;
}

//
//	MAKING 'A'
//
function makeA(parentID, type, stat){
	for(k=0; k<2; k++){
		var ac = document.createElement("div");
		var acID = "ac"+i +acCount;
		ac.id = acID;
		ac.className = "axc";
		document.getElementById(parentID).appendChild(ac);
		acCount++;
		
		for(l=0; l<2; l++){
			var a = document.createElement("div");
			var aID = "a"+i +aCount;
			a.id = aID;
			var ass; 
			switch(type){
				case "random":
					ass = assignPic(randomizer(0,5));
				break;
				case "drawings":
					ass = "drawings";
				break;
				case "apps_sites":
					ass = "apps_sites";
				break;
				case "magazines_news":
					ass = "magazines_news";
				break;
				case "pr_material":
					ass = "pr_material";
				break;
				case "hardware":
					ass = "hardware";
				break;
				case "michal":
					ass = "michal";
				break;
			}
			var ass2 = assignPic2(ass)+".jpg";
			var imagePath = ass+"/"+ass2;
			var imageUrl = "url('"+imagePath+"')";
			document.getElementById(acID).appendChild(a).style.backgroundImage=imageUrl;
			switch(stat){
				case "inactive":
					a.className = "ax1 "+ass+ " inactive "+ass2;
				break;	
				case "active":
					a.className = "ax1 "+ass+ " active "+ass2;
				break;

			}
			a.addEventListener('click', function(){pickClick(this.className, "active", imageUrl, imagePath)});
			aCount++;
		}
	}
}
//
//	MAKING 'B'
//
function makeB(parentID, type, stat){
	var b = document.createElement("div");
	var bID = "b"+i +bCount;
	b.id = bID;
	var ass;
	switch(type){
		case "random":
			ass = assignPic(randomizer(0,5));
		break;
		case "drawings":
			ass = "drawings";
		break;
		case "apps_sites":
			ass = "apps_sites";
		break;
		case "magazines_news":
			ass = "magazines_news";
		break;
		case "pr_material":
			ass = "pr_material";
		break;
		case "hardware":
			ass = "hardware";
		break;
		case "michal":
			ass = "michal";
		break;
	}
	var ass2 = assignPic2(ass)+".jpg";
	var imagePath = ass+"/"+ass2;
	var imageUrl = "url('"+imagePath+"')";
	document.getElementById(parentID).appendChild(b).style.backgroundImage=imageUrl;
	switch(stat){
		case "inactive":
			b.className = "bx4 "+ass+ " inactive "+ass2;
		break;	
		case "active":
			b.className = "bx4 "+ass+ " active "+ass2;
		break;

	}	
	b.addEventListener('click', function(){pickClick(this.className, "active", imageUrl, imagePath)});
	bCount++;
}
//
//	ASSIGNING PICTURES
//
function assignPic(picType){
	switch(picType){
		case 1: 
			return "drawings";
		break;
		case 2: 
			return "apps_sites";
		break;
		case 3: 
			return "magazines_news";
		break;
		case 4: 
			return "pr_material";
		break;
		case 5:
			return "hardware";
		break;
	}	
}	
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
	document.getElementById("guts").innerHTML = "";
}
