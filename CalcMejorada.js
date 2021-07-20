var botonsuma = document.getElementById("botonsuma");
//console.log(document.getElementById("numero1"));
//console.log(document.getElementById("numero2"));
//console.log(botonsuma);
botonsuma.addEventListener("click", calculadora);
	var num1 = document.getElementById("numero1");
	var num2 = document.getElementById("numero2");
	var resuma = document.getElementById("resultadosuma");
	var resta = document.getElementById("resultadoresta");
	var mult = document.getElementById("resultadomultip");
	var divi = document.getElementById("resultadodivi");
function calculadora()
{
	var respuesta = valida();
	console.log(respuesta);
		if (respuesta == false)
		{
			sumarnumeros();
			restarnumeros();
			multnumeros();
			divnumeros();
		}
		else
		{
			window.alert("falla");
			respuesta = true;
		}

}


function sumarnumeros ()
{
	resuma.value= parseInt(num1.value)+ parseInt (num2.value);
}
function restarnumeros ()
{

	resta.value= parseInt(num1.value)- parseInt (num2.value);
	}
function multnumeros ()
{
	mult.value= parseInt(num1.value) * parseInt (num2.value);
}
function divnumeros ()
{
	if (num2.value == 0 )
	{
		divi.value = "No se puede dividir para 0";
	}
	else 
	{
	divi.value= (parseInt(num1.value) / parseInt (num2.value)).toFixed(2);
	}
}

function valida()
{
	if (isNaN(num1.value) || isNaN(num2.value) || num1.value == "" || num2.value == "")
	{	
		window.alert("Se debe insertar valores");
		num1.value= "";
		num2.value= "";
		resuma.value="";
		resta.value="";
		mult.value="";
		divi.value="";
		return respuesta = true;
	}
	else
	{
		return	respuesta = false;
	}
		
	
}

