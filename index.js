var myGlobal = 10;

function fun1(){

}

function fun2(){
  var output = "";
  if(typeof myGlobal != "undefined"){
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined"){
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

oopsGlobal = 5; // Assigning a value to an undeclared variable