var bangla=Number(prompt("Enter Bangla Mark"));
var english=Number(prompt("Enter English Mark"));
var math=Number(prompt("Enter Math Mark"));
var science=Number(prompt("Enter science Mark"));

var obtainMark=bangla+english+math+science;
if(bangla<=33 ||  english<=33  || math<=33  ||  science<=33){
	document.write("F");
}
else if(obtainMark>=320){
	document.write("A+");
}

else if(obtainMark>=280){
	document.write("A");
}
else if(obtainMark>=240){
	document.write("A-");
}

else if(obtainMark>=200){
	document.write("B");
}
else if(obtainMark>=160){
	document.write("C");
}
else if(obtainMark>=132){
	document.write("D");
}