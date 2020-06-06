<?php
include_once 'clases.php';

$objeto=new calcularcuenta($_POST['n1'],$_POST['n2'],$_POST['n3'],$_POST['n4'],$_POST['n5'],$_POST['n6'],$_POST['n7'],$_POST['n8'],$_POST['n9'],$_POST['n10'],$_POST['n11'],$_POST['sueldo']);
$resultado=$objeto->cuentas();
$valor="Cero";

if($resultado<0){
    $valor="Negativo";
}
elseif($resultado>0){
    $valor="Positivo";
}

echo "Su Saldo es: ".$resultado;
echo " ".$valor;
