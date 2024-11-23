<?php
// Inicia la sesion
session_start();

// Definimos una clase Usuario
class Usuario {
    public $nombre;

    public function __construct($nombre) {
        $this->nombre = $nombre;
    }

    public function saludar() {
        return "Hola, " . $this->nombre . "! Bienvenido de nuevo.";
    }
}

// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['nombre'])) {
    // Crear un nuevo objeto Usuario con el nombre enviado
    $nombre = htmlspecialchars($_POST['nombre']); // Trata el input del usuario. Sirve para tratar caracteres especiales y evitar ataques
    $usuario = new Usuario($nombre);

    // Guardar el objeto en la sesion
    // Session es un array de datos, podemos guardar objetos dentro
    $_SESSION['usuario'] = $usuario;

    // Redirigir para evitar reenvio de formulario
    // En este caso, volvemos a la misma pagina, sin el POST del usuario
    header("Location: " . $_SERVER["PHP_SELF"]); // esta linea, en este caso, equivale a header("Location: index.php");
    exit;
}

// declaracion de variable mensaje con valor por defecto
$mensaje = "No hay ningún usuario registrado en la sesión.";

// Recuperar el objeto Usuario de la sesión si existe
// Comprobar si usuario tiene valor Y si dicho valor es un objeto de la clase Usuario
if (isset($_SESSION['usuario']) && $_SESSION['usuario'] instanceof Usuario) {
    $usuario = $_SESSION['usuario'];
    $mensaje = $usuario->saludar();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario con Objetos y Sesión</title>
</head>
<body>
    <h1>Formulario con Objetos y Sesión</h1>

    <!-- Mostrar el mensaje -->
    <p><?php echo $mensaje; ?></p>

    <!-- Formulario -->
    <form method="post" action="index.php">
        <label for="nombre">Introduce tu nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <button type="submit">Enviar</button>
    </form>

    <!-- Boton para cerrar sesion -->
    <?php if (isset($_SESSION['usuario'])): ?>
        <form method="post" action="index.php">
            <button type="submit" name="logout">Cerrar Sesión</button>
        </form>
    <?php endif; ?>

    <?php
    // Manejar cierre de sesion
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['logout'])) {
        session_unset(); // Vacia la sesión
        session_destroy(); // Elimina la sesión
        header("Location: " . $_SERVER["PHP_SELF"]); // Redirige a la misma página
        exit;
    }
    ?>
</body>
</html>
