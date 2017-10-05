<?php
@session_start();

$_SESSION['asGenCerRootCw'] = dirname(__FILE__);
$_SESSION['asGenCerRoothCw'] = 'http://' . $_SERVER['SERVER_NAME'] . '/CelabWeb';
$asGenCerRootCw = $_SESSION['asGenCerRootCw'];
$asGenCerRoothCw = $_SESSION['asGenCerRoothCw'];
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="icon" href="http://xn--nario-rta.gov.co/inicio/images/32px.png" sizes="32x32">
        <title>Formato de certificación</title>
        <meta name="author" content="Mauricio Pinzón">
        <meta name="keywords" content="Certificados contratos Nariño, Certificados gobernación, Certificados Nariño, Certificado laboral, Certificación laboral, Certificados gobernación de nariño, Certificados de contratos">
        <meta name="description" content="Certificados Gobernación de Nariño">
        <?php include_once $asGenCerRootCw . '/header.php'; ?>
        <script type="text/javascript" src="Publics/js/index.js"></script>
    </head>
    <body onload="onLoadBody();">
        <article>
            <section>                  
                <div class="row">                    
                    <div class="col s12 m12 l12 center-align">
                        <h1 class="titles">Certificados Electrónicos</h1>
                    </div>                    
                </div>
                <div class="row">                    
                    <div class="col s12 m12 l12 center-align">
                        <span>A través de este servicio, adquiera su certificado electrónico y verifique su autenticidad con total seguridad y validéz jurídica.</span>
                    </div>                    
                </div>                   
            </section>

            <section>
                <form id='frmIndex' name='frmIndex'>
                    <div class="row">
                        <div class="col s2 m4 l4">
                        </div>

                        <div class="input-field col s8 m4 l4">
                            <input id="nDocument" type="text" class="validate">
                            <label for="nDocument">No. Documento</label>
                        </div>     

                        <div class="col s2 m4 l4">
                        </div>                        
                    </div> 
                    <div class="row">                        
                        <div class="col s2 m4 l4">
                        </div>

                        <div class="input-field col s8 m4 l4">
                            <span>Tipo de Vinculación: </span>
                            <select id="listTipo">
                                <option value="" disabled selected>Seleccione una Opción</option>
                            </select>
                        </div>      

                        <div class="col s2 m4 l4">
                        </div>
                    </div> 

                    <div class="row">
                        <div class="col s4 m4 l4">
                        </div>

                        <div class="col s4 m4 l4 center-align">
                            <a class="waves-effect waves-light btn light-blue blueb" onclick="request();">Solicitar</a>
                        </div>

                        <div class="col s4 m4 l4">
                        </div>
                    </div>  

                    <div class="row">
                        <div class="col m3 l4"></div>
                        <div id="logoc" class="logo-client">
                            <img src="<?php echo $asGenCerRoothCw . "/Publics/images/Admin/logo-client.png"; ?>">
                        </div>
                    </div>

                </form>  
            </section>
        </article>
        <footer>

        </footer>
    </body>
</html>