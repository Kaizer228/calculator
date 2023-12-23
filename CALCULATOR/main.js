function Getvalue(){

    var number1 = parseFloat(document.getElementById("num1").value);
    var number2 = parseFloat(document.getElementById("num2").value);
    var sum = document.getElementById("sum").value;
    var operations = document.getElementById("operations").value;
    var addition = document.getElementById("addition").value;
    var minus = document.getElementById("minus").value;
    var times = document.getElementById("times").value;
    var divide = document.getElementById("divide").value;
    
       
     if (operations == addition){
      
        var sum = document.getElementById("sum").value = number1 + number2;
     }

     if (operations == minus){

        var sum = document.getElementById("sum").value = number1 - number2;
        
     }

     if (operations == times){

        var sum = document.getElementById("sum").value = number1 * number2;
        
     }

     if (operations == divide){

        var sum = document.getElementById("sum").value = number1 / number2;
        
     }

}