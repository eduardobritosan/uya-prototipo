
  var firebaseConfig = {
    apiKey: "AIzaSyAaoAO5vWuXL-QeULhsdoW0EVryx4csD0Y",
    authDomain: "uyap-b63a7.firebaseapp.com",
    databaseURL: "https://uyap-b63a7.firebaseio.com",
    projectId: "uyap-b63a7",
    storageBucket: "uyap-b63a7.appspot.com",
    messagingSenderId: "858416141658",
    appId: "1:858416141658:web:6e45386d9d708716918f63",
    measurementId: "G-0CZCCSG2D2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var nombre;
  var apellido;
  var email;
  var contrasena;
  var database = firebase.database();
  var guardar =  document.querySelector("#registrar");


  console.log("casa")


  guardar.onclick = () => {
  apellido = document.getElementById("apellido").value;
  nombre=document.getElementById("nombre").value;
  correo=document.getElementById("email").value;
  contrasena=document.getElementById("contrasena").value;
  var referencia = database.ref('Usuarios/' + nombre);
      console.log(nombre);
      console.log(correo);
  const data = {
          'Nombre': nombre,
          'Apellido': apellido,
          'Correo': correo,
          'Contraseña': contrasena
      };
  
  referencia.set(data);
  }

 