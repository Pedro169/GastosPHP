<?php
class calcularcuenta {
   private $n1;
   private $n2;
   private $n3;
   private $n4;
   private $n5;
   private $n6;
   private $n7;
   private $n8;
   private $n9;
   private $n10;
   private $n11;
   private $sueldo;

    public function __construct($n1,$n2,$n3,$n4,$n5,$n6,$n7,$n8,$n9,$n10,$n11,$sueldo) 
    {
        $this->n1=$n1;
        $this->n2=$n2;
        $this->n3=$n3;
        $this->n4=$n4;
        $this->n5=$n5;
        $this->n6=$n6;
        $this->n7=$n7;
        $this->n8=$n8;
        $this->n9=$n9;
        $this->n10=$n10;
        $this->n11=$n11;
        $this->sueldo=$sueldo;
        
    }
    
    public function cuentas()
    {       
           $suma= $this->n1+$this->n2+$this->n3+$this->n4+$this->n5+$this->n6+$this->n7+$this->n8+$this->n9+$this->n10+$this->n11;
           $resultado= $this->sueldo-$suma;

        return $resultado;
    }
      
}