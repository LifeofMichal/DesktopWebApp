function database(){
var db = [drawings[], apps_sites[], magazines_news[], pr_material[], hardware[], michal[]];
var a, b, c, d, e, f, j;

for(a=0; a<=21; a++){
	drawings.push(a);
}
for(b=0; b<=33; b++){
	apps_sites.push(b);
}
for(c=0; c<=20; c++){
	magazines_news.push(c);
}
for(d=0; d<=29; d++){
	pr_material.push(d);
}
for(e=0; e<=38; e++){
	hardware.push(e);
}
for(f=0; f<=68; f++){
	michal.push(f);
}

for(j=0; j<=21; j++){
	alert(drawings[j]);
}
}	
