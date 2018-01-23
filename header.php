<?php
$asGenCerRootCw = dirname(__FILE__);
$asGenCerRoothCw = 'http://' . $_SERVER['SERVER_NAME'] . '/CelabWeb/';

require_once $asGenCerRootCw . '/Config/SysConfig.php';
?>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="<?php echo $asGenCerRoothCw . 'Publics/frameworks/materialize/css/materialize.min.css'; ?>">
<link rel="stylesheet" type="text/css" href=<?php echo $asGenCerRoothCw . '/Publics/css/menu.css' ?>>
<link rel="stylesheet" type="text/css" href=<?php echo $asGenCerRoothCw . '/Publics/css/styles.css' ?>>
<link rel="stylesheet" type="text/css" href="<?php echo MLIBSERVERPATH . 'Styles/MLnxStyles.css'; ?>">

<script type="text/javascript" src="<?php echo $asGenCerRoothCw . 'Publics/frameworks/jQuery/jquery-3.2.1.min.js'; ?>"></script>
<script type="text/javascript" src="<?php echo $asGenCerRoothCw . 'Publics/frameworks/materialize/js/materialize.min.js'; ?>"></script>
