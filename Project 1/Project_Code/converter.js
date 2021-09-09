        
function toB() {
    document.getElementById("BT").value="2";
    colorChangerT("1");
}
function toO() {
    document.getElementById("BT").value="8";
    colorChangerT("2");
}
function toD() {
    document.getElementById("BT").value="10";
    colorChangerT("3");
}

function toH() {
    document.getElementById("BT").value="16";
    colorChangerT("4");
}

function fromB() {
    document.getElementById("BF").value="2";
    colorChangerF("1");

}

function fromO() {
    document.getElementById("BF").value="8";
    colorChangerF("2");
}

function fromD() {
    document.getElementById("BF").value="10";
    colorChangerF("3");
}

function fromH() {
    document.getElementById("BF").value="16";
    colorChangerF("4");
}
        
function colorChangerF(buttonNum) {
        var button;
        var other1;
        var other2;
        var other3;
        if(buttonNum =="1") {
             button =document.getElementById("convertFromB");
            other1 =document.getElementById("convertFromO");
            other2 =document.getElementById("convertFromD");
            other3 =document.getElementById("convertFromH");
        }else if(buttonNum=="2") {
              button =document.getElementById("convertFromO");
            other1 =document.getElementById("convertFromB");
            other2 =document.getElementById("convertFromD");
            other3 =document.getElementById("convertFromH");

        }else if(buttonNum=="3") {
              button =document.getElementById("convertFromD");
            other1 =document.getElementById("convertFromB");
            other2 =document.getElementById("convertFromO");
            other3 =document.getElementById("convertFromH");

        }else if(buttonNum=="4") {
              button =document.getElementById("convertFromH");
            other1 =document.getElementById("convertFromB");
            other2 =document.getElementById("convertFromO");
            other3 =document.getElementById("convertFromD");

        }
    
        
        other1.style.background="transparent";
        other1.style.color="black";
        other2.style.background="transparent";
        other2.style.color="black";
        other3.style.background="transparent";
        other3.style.color="black";
        
         button.style.backgroundColor= "black";
         button.style.color= "white";
       
          
}
function colorChangerT(buttonNum) {
        var button;
        var other1;
        var other2;
        var other3;
        if(buttonNum =="1") {
             button =document.getElementById("convertToB");
            other1 =document.getElementById("convertToO");
            other2 =document.getElementById("convertToD");
            other3 =document.getElementById("convertToH");
        }else if(buttonNum=="2") {
              button =document.getElementById("convertToO");
            other1 =document.getElementById("convertToB");
            other2 =document.getElementById("convertToD");
            other3 =document.getElementById("convertToH");

        }else if(buttonNum=="3") {
              button =document.getElementById("convertToD");
            other1 =document.getElementById("convertToB");
            other2 =document.getElementById("convertToO");
            other3 =document.getElementById("convertToH");

        }else if(buttonNum=="4") {
              button =document.getElementById("convertToH");
            other1 =document.getElementById("convertToB");
            other2 =document.getElementById("convertToO");
            other3 =document.getElementById("convertToD");

        }
    
        
        other1.style.background="transparent";
        other1.style.color="black";
        other2.style.background="transparent";
        other2.style.color="black";
        other3.style.background="transparent";
        other3.style.color="black";
        
         button.style.backgroundColor= "black";
         button.style.color= "white";
       
          
}
         
         
 
function getValues() {
      var num=document.getElementById("num1").value;
      var length = num.length-1;
      var baseF = document.getElementById("BF").value;
      if(baseF ==""){
          alert("NO BASE FROM SELECTED");
          return;
      }
      
      var baseT =document.getElementById("BT").value;
      if(baseT== ""){
          alert("NO BASE TO SELECTED");
          return;
      }
      var dec =from(num, length,baseF);
      // alert(dec);
      var result =toBase(dec, baseT);
      
      document.getElementById("answers").innerHTML=result;
}
        
        

function from( y,  length,  base) {
     
     var value;
     var x;
     base =parseInt(base);
     length =parseInt(length);
     if (base != 16) {
         if (length >= 0) {
             x = parseInt(y.charAt(length));
             var tempLength=y.length;
             value =  Math.pow(base, ((tempLength) - length - 1)) * x;
              return from(y, length - 1, base) + value;
             
          } else {
              return 0;
          }
      } else {
          if (length >= 0) {
              var temp = y.charAt(length);
              if (temp == "a") {
                  x = 10;
              } else if (temp == "b") {
                  x = 11;
              } else if (temp == "c") {
                  x = 12;
              } else if (temp == "d") {
                  x = 13;
              } else if (temp == "e") {
                  x = 14;
              } else if (temp == "f") {
                  x = 15;
              } else {
                  x = parseInt(y.charAt(length));
              }
              value = Math.pow(16, (y.length - length - 1)) * x;
              return from(y, length - 1, base) + value;
          } else {
              return 0;
          }
        }
}
        
        

function toBase( y,  base) {
    var rem;
    var hex;
    y=parseInt(y);
    base=parseInt(base);
    if (base != 16) {
        if (y > 0) {
            rem = parseInt(y % base);
            return (toBase(y / base, base) + "" + rem);
        } else
             return "";
     } else {
         if (y > 0) {
            rem = parseInt(y % base);
             //alert(rem);
             if (rem == 10) {
                 hex = "a";
                 return (toBase(y / base, base) + "" + hex);
             } else if (rem == 11) {
                 hex = "b";
                 return (toBase(y / base, base) + "" + hex);
             } else if (rem == 12) {
                 hex = "c";
                 return (toBase(y / base, base) + "" + hex);
             } else if (rem == 13) {
                 hex = "d";
                 return (toBase(y / base, base) + "" + hex);
             } else if (rem == 14) {
                 hex = "e";
                 return (toBase(y / base, base) + "" + hex);
             } else if (rem == 15) {
                 hex = "f";
                 return (toBase(y / base, base) + "" + hex);
             } else
                 return (toBase(y / base, base) + "" + rem);
         } else
             return "";
         
     }

}