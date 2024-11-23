<?php
session_start();

  if (!isset($_SESSION["cuentaNumeros"])) {
    $_SESSION["cuentaNumeros"] = 0;
  }
 
  if (isset($_POST['n'])) {
	$n = $_POST['n'];
  }
 
  if (!isset($n) || ($n > 0)) {
  ?>

  <form action="ejemplo3.php" method="post">
    <input type="number" name="n" autofocus>
    <input type="submit" value="Aceptar">
  </form>

  <?php
  }

  if (isset($n)) {
    if ($n >= 0) {
      $_SESSION["cuentaNumeros"]++;
    } else {
		if (isset($_SESSION["cuentaNumeros"])) {
      		echo "<br><br>Ha introducido " . $_SESSION["cuentaNumeros"] . " números.<br>";
		}
      	session_destroy();            
    }
  }
?>
