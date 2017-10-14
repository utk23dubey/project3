var count=0
var aarry=new Array();
var barry=new Array();
var carry=new Array();
var darry=new Array();
function reset(){
A()
B()
C()
D()
var table = document.getElementById("table");
if(count==0){
var tital = table.insertRow(count);
var ticell0=tital.insertCell(0);
var ticell1=tital.insertCell(1);
var ticell2=tital.insertCell(2);
var ticell3=tital.insertCell(3);
var ticell4=tital.insertCell(4);
ticell0.innerHTML ="Count";
ticell1.innerHTML = "BOX A";
ticell2.innerHTML = "BOX B";
ticell3.innerHTML = "BOX C";
ticell4.innerHTML = "BOX D";

}
count+=1
if(count<11){
var row = table.insertRow(count);
var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);

cell0.innerHTML =count;
cell1.innerHTML = document.getElementById("id1").value;
cell2.innerHTML = document.getElementById("id2").value
cell3.innerHTML = document.getElementById("id3").value;
cell4.innerHTML = document.getElementById("id3").value;
var aa=document.getElementById("id1").value;
var bb=document.getElementById("id2").value;
var cc=document.getElementById("id3").value;
var dd=document.getElementById("id4").value;
aarry.push(aa);
barry.push(bb);
carry.push(cc);
darry.push(dd);
}
if(count==11){
	var total=table.insertRow(count);
	var asum=0;
	var bsum=0;
	var csum=0;
	var dsum=0;
	for(var i=0;i<aarry.length;i++){
		asum+=aarry[i]
	}
	for(var i=0;i<barry.length;i++){
		bsum+=barry[i]
	}
	for(var i=0;i<carry.length;i++){
		csum+=carry[i]
	}
	for(var i=0;i<darry.length;i++){
		dsum+=darry[i]
	}
	var tcell0 = total.insertCell(0);
	tcell0.innerHTML="total"
	var tcell1 = total.insertCell(1);
	tcell1.innerHTML=asum
	var tcell2 = total.insertCell(2);
	tcell2.innerHTML=bsum
	var tcell3 = total.insertCell(3);
	tcell3.innerHTML=csum
	var tcell4 = total.insertCell(4);
	tcell4.innerHTML=dsum
	document.getElementById("btn").disabled = true;
}
}
function A(){
	
	var a=Math.round(Math.random() * 100)
	
	var aa="Name: A"+"<br>"+"Value: "+String(a)
	document.getElementById("id1").value=a
	document.getElementById("id1").innerHTML=aa
	
	
}
function B(){
	var b=Math.round(Math.random() * 100)
	

	document.getElementById("id2").value=b
	document.getElementById("id2").innerHTML="Name: B"+"<br>"+"Value: "+String(b)
}
function C(){
	var c=Math.round(Math.random() * 100)
	

	document.getElementById("id3").value=c
	document.getElementById("id3").innerHTML="Name: C"+"<br>"+"Value: "+String(c)
}
function D(){
	var d=Math.round(Math.random() * 100)
	

	document.getElementById("id4").value=d
	document.getElementById("id4").innerHTML="Name: D"+"<br>"+"Value: "+String(d)
}
