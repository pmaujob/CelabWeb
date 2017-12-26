<?php
@session_start();
$_SESSION['asGenCerRootCw'] = dirname(__FILE__);
$_SESSION['asGenCerRoothCw'] = 'http://' . $_SERVER['SERVER_NAME'] . '/CelabWeb';
$asGenCerRootCw = $_SESSION['asGenCerRootCw'];
$asGenCerRoothCw = $_SESSION['asGenCerRoothCw'];

if (!isset($_SESSION['contractData'])) {
    $_SESSION['contractData'] = $_POST['contractData'];
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="icon" href="http://xn--nario-rta.gov.co/inicio/images/32px.png" sizes="32x32">
        <title>Certificados Laborales</title>
        <meta name="author" content="Mundo Linux">
        <?php include_once $asGenCerRootCw . '/header.php'; ?>
        <script type="text/javascript" src="Publics/js/contractInfo.js"></script>
    </head>
    <body onload='onLoadBody(<?php echo $_SESSION['contractData']; ?>);'>
        <article>
            <section>                  
                <div class="row">                    
                    <div class="col s12 m12 l12 center-align">
                        <h1 class="titles">Certificados Laborales</h1>
                    </div>                    
                </div>          
            </section>
            <section>
                <div class="row">
                    <div id="frmContractorInfo" class="row">
                        <div class="col m3 l4"></div>
                        <div class="frm-login col s12 m6 l4 center-align">
                            <form>
                                <div class="row">
                                    <div class="color-user col s12">
                                        <i class="material-icons medium">person_pin</i>
                                    </div>
                                    <div class="col s12">
                                        <span id="tdName">Usuario</span>
                                    </div>
                                    <div class="col s12">
                                        <span id="tdDoc">Documento</span>
                                    </div>
                                    <div class="col s12">
                                        <span id="tdEmail">Email</span>
                                    </div>
                                    <div id="divEmail" class="input-field col s12">
                                        <input id="emailId" type="email" class="validate">
                                        <label for="emailId">Correo Electrónico</label>
                                    </div>                                    
                                </div>
                            </form>
                        </div>
                        <div class="col m3 l4">

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m12 l12 center-align">
                        <h1 class="titles">Contratos</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col s1 m2 l2">

                    </div>
                    <div class="col s10 m8 l8">
                        <table class="striped">
                            <thead>
                                <tr>
                                    <th class="center-align">No.</th>
                                    <th class="center-align">Número</th>
                                    <th class="center-align">Tipo</th>
                                    <th class="center-align">Fecha de Suscripción</th>
                                    <th class="center-align">Fecha de Terminación</th>
                                </tr>
                            </thead>
                            <tbody id="contractTable">

                            </tbody>                            
                        </table>
                    </div>
                    <div class="col s1 m2 l2">

                    </div>
                </div>

                <div class="row">
                    <div class="col s4 m4 l4">
                    </div>

                    <div class="col s4 m4 l4 center-align">
                        <a class="waves-effect waves-light btn light-blue blueb" onclick="generateCert();">Generar Certificado</a>
                    </div>

                    <div class="col s4 m4 l4">
                    </div>
                </div>
            </section>
        </article>
        <footer>

        </footer>
    </body>
</html>
