getParameter = (key) => {

            address = window.location.search; // url de la ventana actual

            // Objeto de tipo URLSearchParams
            parameterList = new URLSearchParams(address);

            // Regresa el valor del parámetro "key" return parameterList.get(key)
            return parameterList.get(key);
        }


        function funcion() {
            alert("se cambio el input");
        }

        function verificarContrasenas() {
            var contrasena = document.getElementById('contrasena').value;
            var repetirContrasena = document.getElementById('repetirContrasena').value;

            if (contrasena !== repetirContrasena) {
                document.getElementById('mensajeError').textContent = 'Las contraseñas no coinciden';
                return false; // Evita que el formulario se envíe
            }

            if (contrasena.length < 5) {
                document.getElementById('mensajeError').textContent = 'La contraseña debe tener al menos 5 caracteres';
                return false; // Evita que el formulario se envíe
            }

            return true; // Permite el envío del formulario si las contraseñas coinciden y tienen al menos 5 caracteres
        }


        console.log(getParameter("Nombre"));
        var nombre = getParameter("Nombre");

        if (nombre != null) {
            document.getElementById("mensaje").innerHTML = "Bienvenido/a " + nombre;
        }

        console.log(getParameter("Apellidos"));
        var Apellidos = getParameter("Apellidos");

        if (Apellidos != null) {
            document.getElementById("Apellidos").innerHTML = "Apellidos: " + Apellidos;
        }


    var fechaInput = document.getElementById("fechaInput");
    var cumple = document.getElementById("cumple");


      var fechaNacimiento = new Date(fechaInput.value);
      var fechaActual = new Date();

      var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

      // Comprobar si el mes actual es anterior al mes de nacimiento
      if (
        fechaActual.getMonth() < fechaNacimiento.getMonth() ||
        (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
          fechaActual.getDate() < fechaNacimiento.getDate())
      ) {
        edad--;
      }

      cumple.textContent = "Edad actual: " + edad + " años";
