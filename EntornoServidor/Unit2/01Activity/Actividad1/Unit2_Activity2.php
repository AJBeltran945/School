// Actividad 5

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contar Cadena</title>
</head>

<body>
    <h1>Contar el número de repeticiones de una cadena</h1>
    <form method="POST">
        <label for="cadena1">Cadena principal:</label>
        <input type="text" name="cadena1" id="cadena1" required><br><br>

        <label for="cadena2">Cadena a buscar:</label>
        <input type="text" name="cadena2" id="cadena2" required><br><br>

        <input type="submit" value="Contar">
    </form>

</body>

</html>

<?php

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $cadena1 = $_POST['cadena1'];
        $cadena2 = $_POST['cadena2'];

        function ContarCadena($cadena1, $cadena2)
        {
            $len_cadena2 = strlen($cadena2);
            $contador = 0;
            $pos = 0;

            while ($pos < strlen($cadena1)) {
                if (substr($cadena1, $pos, $len_cadena2) === $cadena2) {
                    $contador++;
                    $pos += $len_cadena2;
                } else {
                    $pos++;
                }
            }
            return $contador;
        }

        $resultado = ContarCadena($cadena1, $cadena2);
        echo "<p>La cadena '<strong>$cadena2</strong>' se repite <strong>$resultado</strong> veces en '<strong>$cadena1</strong>'.</p>";
    }
?>

// Actividad 6

<?php
function demo($array, $num = 0) {
    $menores = 0;
    $iguales = 0;
    $superiores = 0;
    
    foreach ($array as $valor) {
        if ($valor < $num) {
            $menores++;
        } elseif ($valor == $num) {
            $iguales++;
        } else {
            $superiores++;
        }
    }
    
    echo "$menores números menores que $num <br>";
    echo "$superiores números superiores a $num <br>";
    echo "$iguales número(s) igual(es) a $num <br>";
}

// Ejemplo de uso
demo(array(24, 28, 332, 44, 35), 35);
?>