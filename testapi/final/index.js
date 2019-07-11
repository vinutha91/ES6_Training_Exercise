var myVehicle = {
    type: 'CAR|BIKE|SCOOTY',
    name: 'STRING',
    number: 'MH12AB1111',
    kms: 'NUMBER',
  };
  
  let req = new XMLHttpRequest();
  
  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      console.log(req.responseText);
    }
  };
  
  req.open("POST", "https://api.jsonbin.io/b/", true);
  req.setRequestHeader("Content-type", "application/json");
  req.setRequestHeader("secret-key", "$2a$10$ZufpF1IWrxbXYgXqOLkoGeJwXOV8l4WNhHe/NfkGf6kgZZwR4Hk5u");
  req.setRequestHeader("collection-id", "5d25740a2c39867519e268fc");
  req.send(JSON.stringify(myVehicle));