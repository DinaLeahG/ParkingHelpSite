
function addCar(){
   var num= sessionStorage.getItem("max");
  var curr= sessionStorage.getItem("curr");
  var type=sessionStorage.getItem("type");
  if(num>curr){
      //Add Car
      var left=num-curr;
      sessionStorage.removeItem("curr");
      curr++;
      sessionStorage.setItem("curr",curr);
      alert("You have parked successfuly. You have "+curr+" parked car(s) in your "+type+". You have "+left+" spots left.");
      
      
  }
  else{
      alert("Your space is full with "+num+" parked cars. Time to find parking on the street.");
  }
}

function status(){
    var num= sessionStorage.getItem("max");
  var curr= sessionStorage.getItem("curr");
  if(num>curr){
      var left =num-curr;
      
      alert("You have "+curr+" parked cars. You have "+left+" spots left.");
  }
  else{
      alert("Your space is full with "+num+" parked cars. Time to find parking on the street.");
  }  
}

function begin( ){
    if (typeof(Storage) !== "undefined") {
        var maxCars=document.getElementById("max").value;
        var email=document.getElementById("email").value;
        var type=document.getElementById("type");
  sessionStorage.setItem("max",maxCars);
   sessionStorage.setItem("email",email);
      sessionStorage.setItem("type",type.value);
  sessionStorage.setItem("curr",0);
  window.alert("User has been added successfully!");
} else {
  alert("Sorry, your browser do not support session storage.");
}
}
