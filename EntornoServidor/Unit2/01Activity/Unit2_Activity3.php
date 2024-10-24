// Actividad 7

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Factura Eléctrica</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        form {
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            margin: 20px auto;
        }

        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            color: #555;
        }

        input[type="number"] {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #218838;
        }

        h2 {
            text-align: center;
            color: #333;
            margin-top: 20px;
        }

        p {
            text-align: center;
            font-size: 18px;
            color: #555;
        }
    </style>

</head>

<body>
    <h1>Actividad 7</h1>
    <h2>Calculadora de Factura Eléctrica</h2>
    <form method="post" action="">
        <label for="unidades">Introduzca el número de kW:</label>
        <input type="number" id="unidades" name="unidades" required min="0" step="1">
        <button type="submit">Calcular</button>
    </form>

    <?php
    $unidades = 0;
    $costoTotal = 0;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $unidades = intval($_POST['unidades']);

        if ($unidades <= 100) {
            $costoTotal = $unidades * 1.00;
        } elseif ($unidades <= 200) {
            $costoTotal = (100 * 1.00) + (($unidades - 100) * 2.00);
        } elseif ($unidades <= 300) {
            $costoTotal = (100 * 1.00) + (200 * 2.00) + (($unidades - 300) * 3.00);
        } else {
            $costoTotal = (100 * 1.00) + (200 * 2.00) + (300 * 3.00) + (($unidades - 600) * 4.00);
        }
    }
    ?>

    <?php if ($costoTotal > 0): ?>
        <h2>Resultado:</h2>
        <p>Para <?php echo $unidades; ?> kW, la factura resultante es de <?php echo number_format($costoTotal, 2, ',', ' '); ?> €.</p>
    <?php endif; ?>
</body>

</html>


//Actividad 8


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Sencilla</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 50px;
            text-align: center;
        }
        input, select {
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h1>Calculadora Sencilla</h1>
    <form method="post">
        <input type="number" name="num1" placeholder="Primer número" required>
        <select name="operation" required>
            <option value="add">Sumar</option>
            <option value="subtract">Restar</option>
            <option value="multiply">Multiplicar</option>
            <option value="divide">Dividir</option>
        </select>
        <input type="number" name="num2" placeholder="Segundo número" required>
        <button type="submit">Calcular</button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $operation = $_POST['operation'];
        $result = '';

        if (is_numeric($num1) && is_numeric($num2)) {
            switch ($operation) {
                case 'add':
                    $result = $num1 + $num2;
                    break;
                case 'subtract':
                    $result = $num1 - $num2;
                    break;
                case 'multiply':
                    $result = $num1 * $num2;
                    break;
                case 'divide':
                    if ($num2 != 0) {
                        $result = $num1 / $num2;
                    } else {
                        $result = 'Error: ¡No se puede dividir por 0!';
                    }
                    break;
                default:
                    $result = 'Operación no válida';
                    break;
            }

            echo "<h2>Resultado: $result</h2>";
        } else {
            echo "<h2>Por favor, introduce valores numéricos válidos.</h2>";
        }
    }
    ?>
</body>
</html>
