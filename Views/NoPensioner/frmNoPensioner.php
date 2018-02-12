<?php
@session_start();
$asGenCerRootCw = $_SESSION['asGenCerRootCw'];
$asGenCerRoothCw = $_SESSION['asGenCerRoothCw'];
?>
<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <link rel="icon" href="http://xn--nario-rta.gov.co/inicio/images/32px.png" sizes="32x32">
        <title>Certificados Laborales</title>
        <meta name="author" content="Mundo Linux">        
        <?php include_once $asGenCerRootCw . '/header.php'; ?>
        <script type="text/javascript" src="../js/frmNoPensioner.js"></script>
    </head>

    <body onload='onLoadBody();'>
        
        <div id="waitModal" class="modal modal-fixed-footer waitModal">
            <div class="modal-content"> 
                <div class="row center-align">
                    <p>Registrando, por favor espere... </p>
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        </div>
        <article>
            <section>                  
                <div class="row">                    
                    <div class="col s12 m12 l12 center-align">
                        <h1 class="titles">Formulario No Pensionados</h1>
                    </div>                    
                </div>          
            </section>
            <section>
                <div class="row">
                    <div id="frmInfo" class="row">
                        <div class="col s1 m2 l3">

                        </div>
                        <div class="frm-login col s10 m2 l6">
                            <form>
                                <div class="row">

                                    <div class="col s12 left-align">
                                        <span class="red-text">Por favor ingrese sus datos. Todos los campos son obligatorios.</span>
                                    </div>                                  
                                </div>
                                <div class="row">
                                    <div class="input-field col s5">
                                        <input id="inFirstName" type="text" class="validate">
                                        <label for="inFirstName">Nombre(s)</label>
                                    </div>  
                                    <div class="input-field col s5">
                                        <input id="inLastName" type="text" class="validate">
                                        <label for="inLastName">Apellidos</label>
                                    </div>                                                                        
                                    <div class="input-field col s2">
                                        <select id="lstSex">
                                            <option value="0" disabled selected>Sexo</option>
                                            <option value="M">Masculino</option>
                                            <option value="F">Femenino</option>
                                        </select>
                                    </div>
                                </div> 
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="inEmail" type="text" class="email">
                                        <label for="inEmail">Email</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="inConEmail" type="text" class="email">
                                        <label for="inConEmail">Confimar Email</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s4">
                                        <select id="lstTipo">
                                            <option value="0" disabled selected>Tipo de Documento</option>
                                        </select>
                                    </div>
                                    <div class="input-field col s4">
                                        <input id="inDocument" type="text" class="validate">
                                        <label for="inDocument">No. Documento</label>
                                    </div>
                                    <div class="input-field col s4">
                                        <input id="inConDocument" type="text" class="validate">
                                        <label for="inConDocument">Confirmar No. Documento</label>
                                    </div>
                                </div>

                                <div class="row center-align">
                                    <span class="red-text">Lugar de Expedición</span>
                                </div>

                                <div class="row">      
                                    <div class="input-field col s6">
                                        <select id="lstDep" onchange="getTowns(this);">
                                            <option value="0" disabled selected>Departamento</option>
                                        </select>
                                    </div>       
                                    <div class="input-field col s6">
                                        <select id="lstTown">
                                            <option value="0" disabled selected>Ciudad/Municipio</option>
                                        </select>
                                    </div> 
                                </div>

                                <div class="row">
                                    <div class="col s4">
                                    </div>

                                    <div class="col s4 center-align">
                                        <a class="waves-effect waves-light btn light-blue blueb" onclick="registNoPensioner();">Registrar</a>
                                    </div>

                                    <div class="col s4">
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div class="col s1 m2 l3">

                        </div>
                    </div>
                </div>

            </section>   

        </article>        
    </body>

</html>