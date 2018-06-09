let ycp =document.getElementById('ycp');
let bot3 =document.getElementById('bot3');
let bot321 =document.getElementById('bot321');
let fa =document.getElementById('fa');
let bot4 =document.getElementById('bot4');
// let acc_ba=document.getElementById('acc_ba')
// let acc_c=document.getElementById('acc_c')

acc_ba.onmouseenter = function(){
	acc_c.style.display = "block";
}
acc_ba.onmouseleave = function(){
	acc_c.style.display = "none";
}
acc_c.onmouseenter = function(){
	acc_c.style.display = "block";
}
ycp.onmouseenter = function(){
	bot3.style.display = "block";
}
ycp.onmouseleave = function(){
	bot3.style.display = "none";
}
bot3.onmouseenter = function(){
	bot3.style.display = "block";
}
bot3.onmouseleave = function(){
	bot3.style.display = "none";
}
bot321.onmouseenter = function(){
	bot321.style.backgroundColor = "#007fff";
}
bot321.onmouseleave = function(){
	bot321.style.backgroundColor = "#3f4348";
}
fa.onmouseenter = function(){
	bot4.style.display = "block";
}
fa.onmouseleave = function(){
	bot4.style.display = "none";
}
bot4.onmouseenter = function(){
	bot4.style.display = "block";
}
bot4.onmouseleave = function(){
	bot4.style.display = "none";
}