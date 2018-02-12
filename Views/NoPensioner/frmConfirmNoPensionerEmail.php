<?php
@session_start();
$asGenCerRootCw = $_SESSION['asGenCerRootCw'];
$asGenCerRoothCw = $_SESSION['asGenCerRoothCw'];

if(!isset($_GET['confirmValue'])) {
    return;
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="icon" href="http://xn--nario-rta.gov.co/inicio/images/32px.png" sizes="32x32">
        <title>Certificados Laborales</title>
        <meta name="author" content="Mundo Linux">        
        <?php include_once '../../header.php'; ?>
        <script type="text/javascript" src="../js/frmConfirmNoPensionerEmail.js"></script>
    </head>

    <body onload="onLoadBody('<?php echo $_GET['confirmValue']; ?>');">
        <article>
            <section>                  
                <div class="row">                    
                    <div class="col s12 m12 l12 center-align">
                        <h1 class="titles">Confirmar Correo Electrónico</h1>
                    </div>                    
                </div>          
            </section>
            <section> 
                <div class="row">

                </div>
                <div class="row">                    
                    <div class="col s12 m12 l12 center-align">
                        <span id="msg">MENSAJE INFORME</span>
                    </div>                    
                </div>
                <div class="row">

                </div>
                <div class="row center-align">
                    <a class="waves-effect waves-light btn blue" href="../../index.php">
                        <i class="material-icons left">home</i>Regresar al Inicio
                    </a>
                </div>
            </section> 
        </article>
    </body>    
</html>
