var totaalprijs = 0;
var x = " Film: " + sessionStorage.getItem("titel");

var rijnummer;
var gevonden;
var zaalnummer = sessionStorage.getItem("zaalnummers");
var datumtijd = sessionStorage.getItem("datum");
var zaal = 1;
function welkezaal(){
if(zaalnummer==1)
{
	zaal=zaal1;
}
	else
{
		if(zaalnummer==2)
{
	zaal = zaal2;
}
	else
{
	zaal=zaal3;
}

}

}


var zaal2=
[
[0,0,3,3,3,3,3,3,3,3,0,0],
[0,3,3,3,3,3,3,3,3,3,3,0],
[0,3,3,3,3,3,3,3,3,3,3,0],
[3,3,3,3,3,2,2,3,3,3,3,3],
[3,3,3,3,2,2,2,2,3,3,3,3],
[3,3,3,2,2,1,1,2,2,3,3,3],
[3,3,3,2,2,1,1,2,2,3,3,3],
[3,3,3,2,2,1,1,2,2,3,3,3],
[3,3,3,2,2,1,1,2,2,3,3,3],
[3,3,3,3,2,2,2,2,3,3,3,3],
[3,3,3,3,3,2,2,3,3,3,3,3],
[0,3,3,3,3,3,3,3,3,3,3,0],
[0,0,3,3,3,3,3,3,3,3,0,0],
];

var zaal3=
[
[0,3,3,3,3,3,0,3,3,3,3,3,3,0,3,3,3,3,3,0],
[0,3,3,3,3,3,0,2,2,2,2,2,2,0,3,3,3,3,3,0],
[0,3,3,3,3,2,0,2,2,2,2,2,2,0,2,3,3,3,3,0],
[0,3,3,3,3,2,0,2,2,2,2,2,2,0,2,3,3,3,3,0],
[0,3,3,3,2,2,0,2,2,2,2,2,2,0,2,2,3,3,3,0],
[0,3,3,3,2,2,0,2,2,1,1,2,2,0,2,2,3,3,3,0],
[3,3,3,2,2,2,0,2,1,1,1,1,2,0,2,2,2,3,3,3],
[3,3,3,2,2,2,0,1,1,1,1,1,1,0,2,2,2,3,3,3],
[3,3,2,2,2,2,0,1,1,1,1,1,1,0,2,2,2,2,3,3],
[3,3,2,2,2,2,0,1,1,1,1,1,1,0,2,2,2,2,3,3],
[3,3,2,2,2,2,0,1,1,1,1,1,1,0,2,2,2,2,3,3],
[0,3,3,2,2,2,0,2,1,1,1,1,2,0,2,2,2,3,3,0],
[0,3,3,3,2,2,0,2,2,1,1,2,2,0,2,2,3,3,3,0],
[0,0,3,3,2,2,0,2,2,2,2,2,2,0,2,2,3,3,0,0],
[0,0,3,3,3,3,0,2,2,2,2,2,2,0,3,3,3,3,0,0],
[0,0,0,3,3,3,0,3,3,3,3,3,3,0,3,3,3,0,0,0],
[0,0,0,3,3,3,0,3,3,3,3,3,3,0,3,3,3,0,0,0],
];
var zaal1=
[
[0,0,0,0,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,0,0,0,0],
[0,0,0,3,3,3,3,3,3,2,2,0,2,2,2,2,2,2,2,2,0,2,2,3,3,3,3,3,3,0,0,0],
[0,0,0,3,3,3,3,3,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,3,3,3,3,3,0,0,0],
[0,0,0,3,3,3,3,3,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,3,3,3,3,3,0,0,0],
[0,0,0,3,3,3,3,2,2,2,2,0,2,2,1,1,1,1,2,2,0,2,2,2,2,3,3,3,3,0,0,0],
[0,0,3,3,3,3,3,2,2,2,2,0,2,1,1,1,1,1,1,2,0,2,2,2,2,3,3,3,3,3,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,3,3,3,3,3,2,2,2,2,2,0,1,1,1,1,1,1,1,1,0,2,2,2,2,2,3,3,3,3,3,0],
[3,3,3,3,3,3,2,2,2,2,2,0,1,1,1,1,1,1,1,1,0,2,2,2,2,2,3,3,3,3,3,3],
[3,3,3,3,3,2,2,2,2,2,2,0,1,1,1,1,1,1,1,1,0,2,2,2,2,2,2,3,3,3,3,3],
[3,3,3,3,3,2,2,2,2,2,2,0,1,1,1,1,1,1,1,1,0,2,2,2,2,2,2,3,3,3,3,3],
[3,3,3,3,3,3,2,2,2,2,2,0,1,1,1,1,1,1,1,1,0,2,2,2,2,2,3,3,3,3,3,3],
[0,3,3,3,3,3,2,2,2,2,2,0,1,1,1,1,1,1,1,1,0,2,2,2,2,2,3,3,3,3,3,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,3,3,3,3,3,2,2,2,2,0,2,1,1,1,1,1,1,2,0,2,2,2,2,3,3,3,3,3,0,0],
[0,0,0,3,3,3,3,2,2,2,2,0,2,2,1,1,1,1,2,2,0,2,2,2,2,3,3,3,3,0,0,0],
[0,0,0,3,3,3,3,3,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,3,3,3,3,3,0,0,0],
[0,0,0,3,3,3,3,3,2,2,2,0,2,2,2,2,2,2,2,2,0,2,2,2,3,3,3,3,3,0,0,0],
[0,0,0,3,3,3,3,3,3,2,2,0,2,2,2,2,2,2,2,2,0,2,2,3,3,3,3,3,3,0,0,0],
[0,0,0,0,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,0,0,0,0],
];




function plaats_stoelen() 
{
welkezaal();
var plaats;
for (var rn = 0; rn <zaal.length ; rn++)
    {
	    for(var sn=0 ; sn< zaal[rn].length ; sn++)
	   {
			switch(zaal[rn][sn])
			{
				case 0: plaats = maak_leegte() ;break;
				case 1: plaats = maak_stoel(1,rn+1,sn+1,13.50); break;
				case 2: plaats = maak_stoel(2,rn+1,sn+1,10.50); break;
				case 3: plaats = maak_stoel(3,rn+1,sn+1,9.00); break;
			}
			document.getElementById("DIV_vliegtuig").appendChild(plaats);
       }
		document.getElementById("DIV_vliegtuig").appendChild(document.createElement("br"));
    }
}

function maak_leegte()
{
	var plaats = document.createElement("button");
	plaats.type = "button";
	plaats.setAttribute("class","leeg");
	plaats.disabled = true;
	return plaats;
}

function maak_stoel(klasse,rn,sn,prijs)
{
	var plaats = document.createElement("button");
	
	plaats.type = "button";
	plaats.id=sn+" op rij nummer: " + rn +x +" Zaalnummer: " +zaalnummer+" " +datumtijd;
	plaats.name=klasse;
	
	
	plaats.addEventListener("click",reserveer,false);
	plaats.value=prijs;
	
	
	
	var Klasse;
	if(is_gereserveerd(plaats)){
		Klasse = "klasse_gereserveerd";
	}
	else{
		Klasse = "klasse_"+klasse;
	}
	
	
	plaats.setAttribute("class",Klasse);
	
	
	
	return plaats;
	
	
}	

function reserveer(e){

	
	if(event.target.className == "klasse_gereserveerd"){
	alert("stoel is al gereserveerd");
	}
	
	
	else {
	var plaats=e.target;
	
	var klasse = plaats.name;
	var stoel_prijs=plaats.value;
	var Klasse;
	
	
	
	if (event.target.className=="gereserveerd"){
	
	Klasse="klasse_"+klasse;
	plaats.setAttribute("class",Klasse);
	totaalprijs  =Number(totaalprijs)-Number(stoel_prijs) ;
	var node = document.getElementById('test');
	while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
}
	
	schrijf();
	totaalprijsweergeven = document.getElementById('totaal');
	totaalprijsweergeven.value=totaalprijs;
	localStorage.removeItem(stoelnummer);
	if (event.target.className=="klasse_1"){
		plaats.style.background = "#c00000";
	}
	else{ if(event.target.className=="klasse_2"){
	plaats.style.background ="#f79646";}
	
	else{
	plaats.style.background ="#4e81bd";
	}
	}
	
	
	
	
	return totaalprijs;
	
	}
	else{
	
	plaats.className="gereserveerd";
	plaats.style.background = "#0f0";
	stoelnummer = plaats.id;
	rijnummer = plaats.name;
	localStorage.setItem(stoelnummer,"bezet");
	totaalprijs  =Number(stoel_prijs) +Number(totaalprijs);
	
	var totaalprijsweergeven = document.getElementById('totaal');
	totaalprijsweergeven.value=totaalprijs;
	
	var node = document.getElementById('test');
	while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
}
	
	schrijf();
	
	
	return totaalprijs;
	}
	
	
	
	
	
	
		
	
	}

	
	
	
   
}

function lees_Storage(){
	
	if(localStorage.length){
		var reek = [];
		for(var i = 0 ; i < localStorage.length ; i++){
			reek[i] = localStorage.key(i);
			
		}
	}
	else
	{}
}

function is_gereserveerd(plaats){
	var id= plaats.id;
	gevonden = false;
	var i =0;
	while(!gevonden && ( i < localStorage.length)){
		if(id == localStorage.key(i)){
			gevonden = true;
		}
		i++;
	}
	return gevonden;
}

function start()
{
	
	lees_Storage();
	plaats_stoelen();
}

function wissen()
{
	var r = confirm("Wil je alles wissen?");
if (r === true) {
    location.reload();
	localStorage.clear();
} else {
    x = "You pressed Cancel!";
}
	
}

function afrekenen()
{
if(totaalprijs<=0){
alert("Bestel eerst iets.");
}
else{
	var r = confirm("Wilt u afrekenen?");
if (r === true) {
	alert("U heeft "+totaalprijs + " euro betaalt en wordt nu naar de e-ticket gestuurd.");
	document.getElementById('overschrijven').style.display = 'none';
	document.getElementById('ETICKET').style.display = 'inline';
	
	
	
	
} else {
    x = "You pressed Cancel!";
}
}	
}

function schrijf(){

	
	
	var input = document.getElementsByClassName("gereserveerd");
	for ( var i = 0; i < input.length; i++){
	document.getElementById('test').innerHTML += "<br> Uw stoelnummer is "+ input[i].id+".";
	 
}
}
function local(){
	
	
	
	
	
	document.getElementById("titel").innerHTML+="<center>"+"Reserveer voor: "+x+"<br>"+"In zaalnummer: "+zaalnummer+" "+datumtijd+"</center>";
}

