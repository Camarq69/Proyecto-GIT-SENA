<?php


    include 'conexion_bd.php';

    $correo = $_POST['correo'];
    $clave = $_POST['contraseña'];

    $validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo ='$correo' and contrasena ='$contraseña' ");

    if(mysqli_num_rows($validar_login)>0 ){
        $_SESSION['usuario'] = $correo;
        header("location: ../SegundoProyecto.html");
        exit;
    }else{
        echo '
            <script>
                alert("Usuario no existe, porfavor verifique los datos introducidos");
                window.location = "../SegundoProyecto.html";            
            </script>
        ';
        exit;
    }




?>