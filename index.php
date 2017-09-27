<?php
@session_start();

$_SESSION['asGenCerRoot'] = dirname(__FILE__);
$_SESSION['asGenCerRooth'] = 'http://' . $_SERVER['SERVER_NAME'] . '/CelabWeb';
$asGenCerRoot = $_SESSION['asGenCerRoot'];
$asGenCerRooth = $_SESSION['asGenCerRooth'];

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="icon" href="http://xn--nario-rta.gov.co/inicio/images/32px.png" sizes="32x32">
        <title>Formato de certificación</title>
        <?php include_once $asGenCerRoot . '/header.php'; ?>
        <meta name="author" content="Mauricio Pinzón">
        <meta name="keywords" content="Certificados contratos Nariño, Certificados gobernación, Certificados Nariño, Certificado laboral, Certificación laboral, Certificados gobernación de nariño, Certificados de contratos">
        <meta name="description" content="Certificados Gobernación de Nariño">
    </head>
    <body>
        <article>
            <section>
                
            </section>
        </article>
        <footer>
            
        </footer>
    </body>
</html>