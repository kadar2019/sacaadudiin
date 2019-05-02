alert("Enable Dark Mode From Top Right Toggle Button \n Give me Suggestion Also if you want");
function toggles(id){
	if (id.checked) {
		document.querySelector("body").style.backgroundColor = "#212b41";
		document.querySelector(".btn").style.backgroundColor = "#2e3951";
		document.querySelector("#output").style.color = "#18d4a3";
		document.querySelector(".btn-clr1").style.color = "#212b41";
		var btn_clr = document.querySelectorAll(".btn-clr");
		for(var i=0; i<btn_clr.length; i++){
			btn_clr[i].style.color = "#18d4a3";
			btn_clr[i].style.backgroundColor = "#212b41";
		}

		var btn_num = document.querySelectorAll(".btn-num");
		for(var i=0; i<btn_num.length; i++){
			btn_num[i].style.color = "#869794";
		}

		document.querySelector("footer").style.color = "#869794";
		document.querySelector("footer").style.backgroundColor = "#2e3951";
	}
	else{

		document.querySelector("body").style.backgroundColor = "#e6ffff";
		document.querySelector(".btn").style.backgroundColor = "#fff";
		document.querySelector("#output").style.color = "#252525";
		document.querySelector(".btn-clr1").style.color = "#fff";
		var btn_clr = document.querySelectorAll(".btn-clr");
		for(var i=0; i<btn_clr.length; i++){
			btn_clr[i].style.color = "#252525";
			btn_clr[i].style.backgroundColor = "#e6ffff";
		}

		var btn_num = document.querySelectorAll(".btn-num");
		for(var i=0; i<btn_num.length; i++){
			btn_num[i].style.color = "#252525";
		}

		document.querySelector("footer").style.color = "#252525";
		document.querySelector("footer").style.backgroundColor = "#fff";
	}
}

function inp(val){
	var output = document.querySelector("#output");
	output.value +=val;
}
function clr(){
	document.querySelector("#output").value = "";
}
function result(){
	var output = document.querySelector("#output");
	if(output.value=="")
	{
		output.value= "No Output";
	}
	else
	{
		var result = eval(output.value);
		output.value = result;

		

}
function back(){
	var output = document.querySelector("#output");
	var number = output.value;
	var len = number.length - 1;
	var newNumber = number.substring( 0, len );
	output.value = newNumber;
}
}