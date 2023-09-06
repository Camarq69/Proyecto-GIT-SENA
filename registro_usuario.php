<?php
$user = "root";
$pass = "";
$host = "localhost";


$connection = mysqli_connect($host, $user, $pass);

    $cedula = $_POST['cedula'];
    $nombre = $_POST['nombres'];
    $apellidos = $_POST['apellidos'];
    $correo = $_POST['email'];
    $ciudad = $_POST['ciudad'];
    $direccion = $_POST['direccion'];
    $celular = $_POST['celular'];
    $contraseña = $_POST['password'];

    if(!$connection) 
    {
        echo "No se ha podido conectar con el servidor" . mysql_error();
    }
else
    {
        echo "<b><h3>Hemos conectado al servidor</h3></b>" ;
    }

    $datab = "registro_usuarios";
    
    $db = mysqli_select_db($connection,$datab);

    if (!$db)
    {
    echo "No se ha podido encontrar la Tabla";
    }
    else
    {
    echo "<h3>Tabla seleccionada:</h3>" ;
    }
    
    $instruccion_SQL = "INSERT INTO usuarios (cedula,nombres,apellidos,email,ciudad,direccion,celular,password)
                         VALUES ('$cedula','$nombre','$apellidos','$correo','$ciudad','$direccion','$celular','$contraseña')";
                       
                        
    $resultado = mysqli_query($connection,$instruccion_SQL);

    if (!$resultado) 
    {
        echo "Error al guardar";
    }
    else
    {
        echo "<b><h3>Guardado correctamente</h3></b>" ;
    }
    $consulta = "SELECT * FROM usuarios";
    
$result = mysqli_query($connection,$consulta);   

?>