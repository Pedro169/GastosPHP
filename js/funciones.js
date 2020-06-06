function soloLetras(e)
{
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toLowerCase();
   letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
   //especiales = [8,37,39,46];

   tecla_especial = false;

	if(letras.indexOf(tecla)===-1 && !tecla_especial)
	{
		return false;
	}
}
//function soloNumeros(evt)
function soloNumeros(e)
{
	tecla = (document.all) ? e.keyCode : e.which; 
	if (tecla===8) return true; 
	patron =/^[0-9.]+$/;//este acepta punto(.), si se quiere eliminar borrar el punto despues del 9. 
	te = String.fromCharCode(tecla); 
	return patron.test(te);
}

function validaralpha(e) 
{ 
	tecla = (document.all) ? e.keyCode : e.which; 
	if (tecla===8) return true; 
	patron =/[\ w\w.&ñ]/;//este acepta espacios entre medio, si se quiere eliminar los espacios poner [\w] 
	te = String.fromCharCode(tecla); 
	return patron.test(te);
}

function operacion()
{
	
	//var num=document.getElementById('n1').value;
        var val1=document.getElementById('n1').value;
        var val2=document.getElementById('n2').value;   
        var val3=document.getElementById('n3').value;   
        var val4=document.getElementById('n4').value;   
        var val5=document.getElementById('n5').value;   
        var val6=document.getElementById('n6').value;
        var val7=document.getElementById('n7').value;
        var val8=document.getElementById('n8').value;
        var val9=document.getElementById('n9').value;
        var val10=document.getElementById('n10').value;
        var val11=document.getElementById('n11').value;
        var val12=document.getElementById('base').value;

	if(val1==="" || val2==="" || val3==="" || val4==="" || val5==="" || val6==="" || val7==="" || val8==="" || val9==="" || val10==="" || val11===""|| val12==="")
	{
		alert('Debe ingresar todos los valores, si no hay gastos en item ingrese 0!');
	}
	else
	{
		$.ajax({
		cache: false,
		// puede ser GET, POST
		type: "POST",  							
		// Tipo de retorno
		dataType: "html",
		// pagina php que recibe la llamada
		url: "logica/instancia.php?",  							
		// datos, ej: $_POST['data']
		data: {
			n1:val1,
                        n2:val2,
                        n3:val3,
                        n4:val4,
                        n5:val5,
                        n6:val6,
                        n7:val7,
                        n8:val8,
                        n9:val9,
                        n10:val10,
                        n11:val11,
                        sueldo:val12
			
		},
		
		// acciones cuando me retorna algo el PHP
		success: function( msg){
			console.log(msg);
                        document.getElementById('divResultado').style.display="block";
			$("#labelResultado").html(msg);
				
//			}
		},							
		// acciones cuando hay error en comunicacion el el php
		error: function(xhr, status,msg2 ){
			//alert('4');			
			console.log(xhr);
		}
	});//fin ajax
	}//fin else
	
}

function reiniciar()
{
	//document.getElementById('numero').value='';	
	document.getElementById('divResultado').style.display="none";
        //document.getElementById('labelResultado').style.display="none";
}