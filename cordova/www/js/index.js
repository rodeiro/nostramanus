document.addEventListener("deviceready", onDeviceReady, false);


var bluetoothle;

var myAddress= "F8:46:81:70:78:78";
var myServiceUuid = "6e400001-b5a3-f393-e0a9-e50e24dcca9e";
var myCharacteristicUuid = "6e400003-b5a3-f393-e0a9-e50e24dcca9e";
var datos = [];
var evento = "SinEvento";



function onDeviceReady() {
  bluetoothle = window.bluetoothle;

  var paramsObj = {request:true};

  console.log("Initialize : " + JSON.stringify(paramsObj));

  bluetoothle.initialize(initializeSuccess, initializeError, paramsObj);
}

function initializeSuccess(obj){
  console.log("Initialize Success : " + JSON.stringify(obj));
  alert(JSON.stringify(obj));

  if (obj.status == "enabled")
  {
    console.log("Enabled");
  }
  else
  {
    console.log("Unexpected Initialize Status");
  }
}

function initializeError(obj){
  console.log("Initialize Error : " + JSON.stringify(obj));
}


/**
* Event listener for connection button
*
*/
$("#BOTONCONECTAR").click(function () {
  connect(myAddress);

});

$("#BOTON").click(function(){
  sendData();
});


$("#BOTONEVENTO").click(function () {
  evento = "Cerrar Mano";
});







//CONNECT

function connect(address){
  var paramsObj = {address:address};

   //console.log("Connect : " + JSON.stringify(paramsObj));

  bluetoothle.connect(connectSuccess, connectError, paramsObj);

  return false;
}

function connectSuccess(obj){
  console.log("Connect Success : " + JSON.stringify(obj));
  //alert(JSON.stringify(obj));

  if (obj.status == "connected")
  {
    console.log("Connected");
    alert("Connected");

    discover(myAddress);


  }
  else if (obj.status == "connecting")
  {
    console.log("Connecting");
    alert("Connecting");
  }
  else
  {
    console.log("Unexpected Connect Status");
    alert("Unexpected Connect Status");
  }
}

function connectError(obj){
  alert(JSON.stringify(obj));

  console.log("Connect Error : " + JSON.stringify(obj));
}



//DISCOVER

function discover(address){
  var paramsObj = {address:address};

  console.log("Discover : " + JSON.stringify(paramsObj));

  bluetoothle.discover(discoverSuccess, discoverError, paramsObj);

  return false;
}

function discoverSuccess(obj){
  alert(JSON.stringify(obj));

  console.log("Discover Success : " + JSON.stringify(obj));

  if (obj.status == "discovered")
  {
    console.log("Discovered");
    subscribe(myAddress,myServiceUuid,myCharacteristicUuid);
  }
  else
  {
    console.log("Unexpected Discover Status");
  }
}

function discoverError(obj){
  alert(JSON.stringify(obj));

  console.log("Discover Error : " + JSON.stringify(obj));
}






function sendData(){
     alert("SENDING DATA " + datos);
    /* $.ajax({
                        type:"POST",
                        url: "http://192.168.1.34:3000/api/experimentos/",
                        dataType: 'json',
                        async: 'true',
                        data: {
                                "sesion": "553933306f1727f0025e60e4",
                                "evento": evento,
                                "momento": Date.now(),
                                "resultado": datos 
                            },
                        success: function(){
                            alert ('Done!');
                        }
                    });

     if (evento!= "SinEvento"){
       evento="SinEvento";
     }*/
    
}

//READ!

function subscribe(address, serviceUuid, characteristicUuid){
  var paramsObj = {address:address, serviceUuid:serviceUuid, characteristicUuid:characteristicUuid};

  console.log("Subscribe : " + JSON.stringify(paramsObj));

  bluetoothle.subscribe(subscribeSuccess, subscribeError, paramsObj);

  return false;
}

function subscribeSuccess(obj){
  //alert(JSON.stringify(obj));


 // console.log("Subscribe Success : " + JSON.stringify(obj));

  if (obj.status == "subscribedResult")
  {
	  var bytes = bluetoothle.encodedStringToBytes(obj.value);
	  var decoded= bluetoothle.bytesToString(bytes);
    if (datos.length == 50){
     
      
      sendData();

      datos = [];
      

    }else{

      datos.push(decoded);

    }

    

   
  }
  else if (obj.status == "subscribed")
  {
    console.log("Subscribed");
  }
  else
  {
    console.log("Unexpected Subscribe Status");
  }
}

function subscribeError(obj){
  alert(JSON.stringify(obj));

  console.log("Subscribe Error : " + JSON.stringify(obj));
}



