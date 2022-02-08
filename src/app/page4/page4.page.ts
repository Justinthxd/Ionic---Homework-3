import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public myInput;
  @Input() public myInput2;

  myF(): void {
    this.myInput2="";

    if(this.myInput>=900)   {
      this.myInput2 = "NOVECIENTOS" ;
      this.myInput=this.myInput-900;
    }else if(this.myInput>=800)   {
      this.myInput2 = "OCHOCIENTOS" ;
      this.myInput=this.myInput-800;
    }else if(this.myInput>=700)   {
      this.myInput2 = "SETECIENTOS" ;
      this.myInput=this.myInput-700;
    }else if(this.myInput>=600)   {
      this.myInput2 = "SEISCIENTOS" ;
      this.myInput=this.myInput-600;
    } else if(this.myInput>=500)   {
      this.myInput2 = "QUINIENTOS" ;
      this.myInput=this.myInput-500;
    }else if(this.myInput>=400)   {
      this.myInput2 = "CUATROCIENTOS" ;
      this.myInput=this.myInput-400;
    }else if(this.myInput>=300)   {
      this.myInput2 = "TRECIENTOS" ;
      this.myInput=this.myInput-300;
    }else if(this.myInput>=200)   {
      this.myInput2 = "DOSCIENTOS" ;
      this.myInput=this.myInput-200;
    }else if(this.myInput>=100)   {
      this.myInput2 = "CIENTO" ;
      this.myInput=this.myInput-100;
    }
    if(this.myInput>90) {this.myInput2 += " NOVENTA Y "   ;this.myInput=this.myInput-90; }
      if(this.myInput==90)   {this.myInput2+=" NOVENTA"  ;this.myInput=this.myInput-90; }  
      if(this.myInput>80) {this.myInput2+=" OCHENTA Y "   ;this.myInput=this.myInput-80; }
            if(this.myInput==80)   {this.myInput2+=" OCHENTA"  ;this.myInput=this.myInput-80; }
            if(this.myInput>70) {this.myInput2+=" SETENTA Y "   ;this.myInput=this.myInput-70; }
            if(this.myInput==70)   {this.myInput2+=" SETENTA"  ;this.myInput=this.myInput-70; }
            if(this.myInput>60) {this.myInput2+=" SESENTA Y "   ;this.myInput=this.myInput-60; }
            if(this.myInput==60)   {this.myInput2+=" SESENTA"  ;this.myInput=this.myInput-60; }
            if(this.myInput>50) {this.myInput2+=" CINCUENTA Y " ;this.myInput=this.myInput-50; }
            if(this.myInput==50)   {this.myInput2+=" CINCUENTA"    ;this.myInput=this.myInput-50; }
            if(this.myInput>40) {this.myInput2+=" CUARENTA Y "  ;this.myInput=this.myInput-40; }
            if(this.myInput==40)   {this.myInput2+=" CUARENTA" ;this.myInput=this.myInput-40; }
            if(this.myInput>30) {this.myInput2+=" TREINTA Y "   ;this.myInput=this.myInput-30; }
            if(this.myInput==30)   {this.myInput2+=" TREINTA"  ;this.myInput=this.myInput-30; }
            if(this.myInput>20) {this.myInput2+=" VEINTI"       ;this.myInput=this.myInput-20; }
            if(this.myInput==20)   {this.myInput2+=" VEINTE"       ;this.myInput=this.myInput-20; }
        if(this.myInput>=16)    {this.myInput2+="DIECI"        ;this.myInput=this.myInput-10; }
       else if(this.myInput==15)   {this.myInput2+="QUINCE"       ;this.myInput=this.myInput-15; }
       else if(this.myInput==14)   {this.myInput2+="CATORCE"  ;this.myInput=this.myInput-14; }
       else if(this.myInput==13)   {this.myInput2+="TRECE"        ;this.myInput=this.myInput-13; } 
       else if(this.myInput==12)   {this.myInput2+="DOCE"     ;this.myInput=this.myInput-12; }
       else if(this.myInput==11)   {this.myInput2+="ONCE"     ;this.myInput=this.myInput-11; }
       else if(this.myInput==10)   {this.myInput2+="DIEZ"     ;this.myInput=this.myInput-10; }      
        if(this.myInput==9)    {this.myInput2+="NUEVE"        ;this.myInput=this.myInput-9;  }
        if(this.myInput==8)    {this.myInput2+="OCHO"     ;this.myInput=this.myInput-8;  }
        if(this.myInput==7)    {this.myInput2+="SIETE"        ;this.myInput=this.myInput-7;  }
            if(this.myInput==6)    {this.myInput2+="SEIS"     ;this.myInput=this.myInput-6;  }
       else if(this.myInput==5)    {this.myInput2+="CINCO"        ;this.myInput=this.myInput-5;  }
       else if(this.myInput==4)    {this.myInput2+="CUATRO"       ;this.myInput=this.myInput-4;  }
       else if(this.myInput==3)    {this.myInput2+="TRES"     ;this.myInput=this.myInput-3;  }
       else if(this.myInput==2)    {this.myInput2+="DOS"      ;this.myInput=this.myInput-2;  }
       else if(this.myInput==1)    {this.myInput2+="UNO"      ;this.myInput=this.myInput-1;  }
  }
}