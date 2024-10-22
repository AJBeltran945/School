<?php
	$lorem = "Austin_Jenner_Beltran_Panghulan";

	$max = rand(0, strlen($lorem));
	$min = rand(0, $max);

	while ($min == $max) {
		$max = rand(0, strlen($lorem));
		$min = rand(0, $max);
	}


	echo "Minimum: " . $min . " Maximum: " . $max . "<br>";

	echo substr($lorem, $min, $max - $min) . "<br>";


	echo "<br>";
	echo "<br>";
	echo "<br>";
	echo "<br>";




	//estructura de control que se segun el dia que estemos devuelva un dia de la semana

	//en caso que responda a la situacion en la que no haya dia

	//la primera linea es este:
	$today = date("D");

	echo "<h1>Que dia es hoy?</h1>";

	switch($today) {
		case 'Mon':
			echo "Hoy es lunes.";
			break;
		case 'Tue':
			echo "Hoy es martes.";
			break;
		case 'Wed':
			echo "Hoy es miércoles.";
			break;
		case 'Thu':
			echo "Hoy es jueves.";
			break;
		case 'Fri':
			echo "Hoy es viernes.";
			break;
		case 'Sat':
			echo "Hoy es sábado.";
			break;
		case 'Sun':
			echo "Hoy es domingo.";
			break;
		default:
			echo "No se pudo determinar el día.";
			break;
	}


	/*Actividad 1) Partiendo de la variable: $today = date("D"); Mediante estructura de control, devolver un
	html que indique el día de la semana y un texto exclusivo para ese día. También tiene que devolver un
	texto en caso de que la variable no informe del día.*/


	/*Actividad 2) Partiendo de una variable para “nota” que contendrá un valor de 1 a 10, prepara una
	estructura de control para determinar si el alumno esta “suspendido” (nota menor de 5) o aprobado con
	“bien” (6), “Notable” (7 y 8) o “Excelente” (9 y 10).*/

	$nota = rand(1,10);
	echo "<h1>" . "Tu nota es: " . $nota . "</h1>";

	switch ($nota) {
		case $nota >= 9:
			echo "Excelente";
			break;
		
		case $nota >= 7:
			echo "Notable";
			break;
		
		case $nota == 6:
			echo "Bien";
			break;
		
		default:
			echo "Suspendido";
			break;
	}



	/*Actividad 3) Observa la siguiente solución propuesta para la actividad 2. ¿Que sucede si la nota contiene
	decimales? Adapta la solución para que pueda responder a notas con decimales como, por ejemplo, “6,5”.
	No se debe redondear el valor.*/

	$nota = rand(0.1*10, 10*10) / 10;
	echo "<h1>" . "Tu nota es: " . $nota . "</h1>";

	switch ($nota) {
		case $nota > 8.0:
			echo "Excelente";
			break;
		
		case $nota > 6.0:
			echo "Notable";
			break;
		
		case $nota > 5.0:
			echo "Bien";
			break;
		
		default:
			echo "Suspendido";
			break;
	}


	/*Actividad 4) Empleando estructuras de control de errores o excepciones (try... catch) e “if”, comprobar si
	una variable string contiene solo letras o no, y, si solo contiene letras, verificar si contiene la palabra
	“name” en su valor, independientemente de las mayusculas y minusculas. La variable inicial tiene el
	nombre y el valor siguiente: $name = "Nam11e", esta debe dar aviso de que “contiene caracteres
	diferentes de a-z A-Z”. Con el mismo codigo, modificar el valor de la variable inicial tal que: $name =
	"NamE". En este caso, se debe devolver “contiene la palabra name”. En caso de no cumplir ninguna de las
	condiciones previas, devolver el mensaje “introducir nombre nuevamente”.

	Se recomienda hacer uso de las funciones propias de PHP: preg_match(), strpos(), strtolower(). Para
	extraer los mensajes de Excepción (en catch) usar: $e->getPrevious()->getMessage() y $e->getMessage()*/


	//con try catch
	//if
	//mira si un string solo tiene letras 
	//y mira si tiene name dentro

	// variables = "Nam11e", "NamE"
	// respuestas = “contiene caracteres diferentes de a-z A-Z”, “contiene la palabra name”, “introducir nombre nuevamente”

	echo "<h1>Comprobacion de name</h1>";
	$names = [
		'Nam11e', 
		'NamE', 
		'Austin', 
		"N4m3", 
		"nAmE",
		"NaM1",
		"n4M3",
		"qwerty",
		"nAme2",
		"namE"
	];

	$randNum = rand(0,9);
	$name = $names[$randNum];

	echo "Tu nombre es: " . $name . "<br>";

	try {
        if (!preg_match('/^[a-zA-Z]+$/', $name)) {
            throw new Exception("Contiene caracteres diferentes de a-z A-Z");
        }

        if (strpos(strtolower($name), 'name') !== false) {
            throw new Exception ("Contiene la palabra 'name'");
        } else {
            throw new Exception ("Introducir nombre nuevamente");
        }

    } catch (Exception $e) {
        echo $e->getMessage();
    }




	echo "<br>";
	echo "<br>";
	echo "<br>";
	echo "<br>";

?>


	




    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulario POST en PHP</title>
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
    
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f7f8;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
    
            .form-container {
                background-color: #fff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                margin-right: 100px;
                width: 100%;
            }
    
            h2 {
                text-align: center;
                margin-bottom: 20px;
                color: #333;
            }
    
            label {
                font-weight: bold;
                margin-bottom: 5px;
                display: block;
                color: #555;
            }
    
            input[type="text"],
            input[type="email"],
            textarea {
                width: 100%;
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 16px;
                color: #333;
                background-color: #f9f9f9;
            }
    
            input[type="text"]:focus,
            input[type="email"]:focus,
            textarea:focus {
                border-color: #0056b3;
                outline: none;
            }
    
            textarea {
                resize: vertical;
                min-height: 100px;
            }
    
            input[type="submit"] {
                background-color: #0056b3;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 12px 20px;
                font-size: 16px;
                cursor: pointer;
                width: 100%;
            }
    
            input[type="submit"]:hover {
                background-color: #004080;
            }
    
            /* Estilo responsivo para dispositivos móviles */
            @media (max-width: 500px) {
                .form-container {
                    padding: 20px;
                }
            }
        </style>
    </head>
    <body>
    
        <div class="form-container">
            <h2>Formulario de Contacto</h2>
            <form action="index.php" method="POST">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="tu@correo.com" required>
                
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." rows="4" required></textarea>
                
                <input type="submit" value="Enviar">
            </form>
        </div>
    
    </body>
    </html>
    
    
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recoger los datos del formulario
        $nombre = htmlspecialchars($_POST['nombre']);
        $email = htmlspecialchars($_POST['email']);
        $mensaje = htmlspecialchars($_POST['mensaje']);
    
        // Mostrar un mensaje de confirmación con estilo
        echo "<div class='response-container'>";
        echo "<h2>¡Gracias, $nombre!</h2>";
        echo "<p>Hemos recibido tu mensaje:</p>";
        echo "<p><em>\"$mensaje\"</em></p>";
        echo "<p>Te contactaremos en <strong>$email</strong></p>";
        echo "</div>";
    } else {
        // Si se intenta acceder a este archivo sin enviar el formulario
        echo "<div class='response-container'>";
        echo "<h2>Error</h2>";
        echo "<p>Por favor, envía el formulario primero.</p>";
        echo "</div>";
    }
    ?>
    