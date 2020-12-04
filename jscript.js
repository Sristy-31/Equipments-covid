function myFunction() {
			var q1=document.getElementById("quantity1").value;
			var q2=document.getElementById("quantity2").value;
			var q3=document.getElementById("quantity3").value;
			var q4=document.getElementById("quantity4").value;
			var q5=document.getElementById("quantity5").value;

			var sum=(q1*80)+(q2*600)+(q3*150)+(q4*50)+(q5*80);

           alert("Thanks for Ordering!! \n Amount = "+ sum);// body...
           }

function CheckPassword()
{ 
	var inputtxt=document.getElementById("psw").value;
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.match(passw)) 
{ 
return true;
}
else
{ 
alert("Wrong password! \n Enter combination of upper case,lower case and digits \n Minimun length should be 6");
return false;
}
}