$(function() {    
    var input = document.getElementById("inputNum");

    $("#back").click(function(){
        var dataInp, str, valInp, lastData;
        valInp = input.value;
        dataInp  = valInp.length - 1;
        str = valInp.substr(dataInp,1);
         lastData = valInp.replace(str,'');
          
         console.log(lastData);    
    });
    
    $("#1").click(function() {
        input.value += '1';
    });
        
    $("#2").click(function() {
        input.value += '2';
    });
        
    $("#3").click(function() {
        input.value += '3';
    });
        
    $("#4").click(function() {
        input.value += '4';
    });  
    
    $("#5").click(function() {
        input.value += '5';
    }); 
        
    $("#6").click(function() {
        input.value += '6';
    }); 
        
    $("#7").click(function() {
        input.value += '7';
    }); 
        
    $("#8").click(function() {
        input.value += '8';
    }); 
        
    $("#9").click(function() {
        input.value += '9';
    }); 
        
    $("#0").click(function() {  input.value += '0';
    }); 
        
    $("#dot").click(function() {  input.value += '.';
    });
        
        
    $("#plus").click(function() {
        input.value += ' + ';
    });
        
    $("#substract").click(function() {
        input.value += ' - ';
    });
        
    $("#multiply").click(function() {
        input.value += ' * ';
    });
        
    $("#divide").click(function() {
        input.value += ' / ';
    });
        
    $("#modulus").click(function() {
        input.value += ' % ';
    });
        
        
    $("#equals").click(function() {
        input.value =  eval(input.value);
    });  
        
    $("#clearAll").click(function() {
        input.value =  '';
    });           
});