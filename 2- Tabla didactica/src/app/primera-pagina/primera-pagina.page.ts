import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-primera-pagina",
  templateUrl: "./primera-pagina.page.html",
  styleUrls: ["./primera-pagina.page.scss"],
})
export class PrimeraPaginaPage implements OnInit {
  idioma = "espanol";
  categoria = "animales";

  sonido = new Audio();

  // audios Español

  // eBallena = new Audio("../assets/audios/animales_Espanol/e_ballena.mp3");
  // eMono = new Audio("../assets/audios/animales_Espanol/e_mono.mp3");
  // eCocodrilo = new Audio("../assets/audios/animales_Espanol/e_cocodrilo.mp3");
  // ePulpo = new Audio("../assets/audios/animales_Espanol/e_pulpo.mp3");
  // eJirafa = new Audio("../assets/audios/animales_Espanol/e_jirafa.mp3");
  // eVaca = new Audio("../assets/audios/animales_Espanol/e_vaca.mp3");
  
  // eUno = new Audio("../assets/audios/numeros_Espanol/uno_e.mp3");
  // eDos = new Audio("../assets/audios/numeros_Espanol/dos_e.mp3");
  // eTres = new Audio("../assets/audios/numeros_Espanol/tres_e.mp3");
  // eCuatro = new Audio("../assets/audios/numeros_Espanol/cuatro_e.mp3");
  // eCinco = new Audio("../assets/audios/numeros_Espanol/cinco_e.mp3");
  // eSeis = new Audio("../assets/audios/numeros_Espanol/seis_e.mp3");

  // eAzul = new Audio("../assets/audios/colores_Espanol/e_azul.mp3");
  // eAmarillo = new Audio("../assets/audios/colores_Espanol/e_amarillo.mp3");
  // eRosa = new Audio("../assets/audios/colores_Espanol/e_rosa.mp3");
  // eVerde = new Audio("../assets/audios/colores_Espanol/e_verde.mp3");
  // eRojo = new Audio("../assets/audios/colores_Espanol/e_rojo.mp3");
  // eNaranja = new Audio("../assets/audios/colores_Espanol/e_naranja.mp3");


  // audios Ingles

  // iBallena = new Audio("../assets/audios/animales_Ingles/i_ballena.mp3");
  // iMono = new Audio("../assets/audios/animales_Ingles/i_mono.mp3");
  // iCocodrilo = new Audio("../assets/audios/animales_Ingles/i_cocodrilo.mp3");
  // iPulpo = new Audio("../assets/audios/animales_Ingles/i_pulpo.mp3");
  // iJirafa = new Audio("../assets/audios/animales_Ingles/i_jirafa.mp3");
  // iVaca = new Audio("../assets/audios/animales_Ingles/i_vaca.mp3");

  // iUno = new Audio("../assets/audios/numeros_Ingles/uno_i.mp3");
  // iDos = new Audio("../assets/audios/numeros_Ingles/dos_i.mp3");
  // iTres = new Audio("../assets/audios/numeros_Ingles/tres_i.mp3");
  // iCuatro = new Audio("../assets/audios/numeros_Ingles/cuatro_i.mp3");
  // iCinco = new Audio("../assets/audios/numeros_Ingles/cinco_i.mp3");
  // iSeis = new Audio("../assets/audios/numeros_Ingles/seis_i.mp3");

  // iAzul = new Audio("../assets/audios/colores_Ingles/i_azul.mp3");
  // iAmarillo = new Audio("../assets/audios/colores_Ingles/i_amarillo.mp3");
  // iRosa = new Audio("../assets/audios/colores_Ingles/i_rosa.mp3");
  // iVerde = new Audio("../assets/audios/colores_Ingles/i_verde.mp3");
  // iRojo = new Audio("../assets/audios/colores_Ingles/i_rojo.mp3");
  // iNaranja = new Audio("../assets/audios/colores_Ingles/i_naranja.mp3");


   // audios Portugues
   
  //  pBallena = new Audio("../assets/audios/animales_Portugues/p_ballena.mp3");
  //  pMono = new Audio("../assets/audios/animales_Portugues/p_mono.mp3");
  //  pCocodrilo = new Audio("../assets/audios/animales_Portugues/p_cocodrilo.mp3");
  //  pPulpo = new Audio("../assets/audios/animales_Portugues/p_pulpo.mp3");
  //  pJirafa = new Audio("../assets/audios/animales_Portugues/p_jirafa.mp3");
  //  pVaca = new Audio("../assets/audios/animales_Portugues/p_vaca.mp3");
    
  //  pUno = new Audio("../assets/audios/numeros_Portugues/uno_p.mp3");
  //  pDos = new Audio("../assets/audios/numeros_Portugues/dos_p.mp3");
  //  pTres = new Audio("../assets/audios/numeros_Portugues/tres_p.mp3");
  //  pCuatro = new Audio("../assets/audios/numeros_Portugues/cuatro_p.mp3");
  //  pCinco = new Audio("../assets/audios/numeros_Portugues/cinco_p.mp3");
  //  pSeis = new Audio("../assets/audios/numeros_Portugues/seis_p.mp3");
   
  //  pAzul = new Audio("../assets/audios/colores_Portugues/p_azul.mp3");
  //  pAmarillo = new Audio("../assets/audios/colores_Portugues/p_amarillo.mp3");
  //  pRosa = new Audio("../assets/audios/colores_Portugues/p_rosa.mp3");
  //  pVerde = new Audio("../assets/audios/colores_Portugues/p_verde.mp3");
  //  pRojo = new Audio("../assets/audios/colores_Portugues/p_rojo.mp3");
  //  pNaranja = new Audio("../assets/audios/colores_Portugues/p_naranja.mp3");
  
  
   constructor() {    
  }

  ngOnInit() {

  // this.eBallena.load();
  // this.eMono.load();
  // this.eCocodrilo.load();
  // this.ePulpo.load();
  // this.eJirafa.load();
  // this.eVaca.load();
  // this.eUno.load();
  // this.eDos.load();
  // this.eTres.load();
  // this.eCuatro.load();
  // this.eCinco.load();
  // this.eSeis.load();
  // this.eAzul.load();
  // this.eAmarillo.load();
  // this.eRosa.load();
  // this.eVerde.load();
  // this.eRojo.load();
  // this.eNaranja.load();

  // this.iBallena.load();
  // this.iMono.load();
  // this.iCocodrilo.load();
  // this.iPulpo.load();
  // this.iJirafa.load();
  // this.iVaca.load();
  // this.iUno.load();
  // this.iDos.load();
  // this.iTres.load();
  // this.iCuatro.load();
  // this.iCinco.load();
  // this.iSeis.load();
  // this.iAzul.load();
  // this.iAmarillo.load();
  // this.iRosa.load();
  // this.iVerde.load();
  // this.iRojo.load();
  // this.iNaranja.load();


  //  this.pBallena.load();
  //  this.pMono.load();
  //  this.pCocodrilo.load();
  //  this.pPulpo.load();
  //  this.pJirafa.load();
  //  this.pVaca.load();
  //  this.pUno.load();
  //  this.pDos.load();
  //  this.pTres.load();
  //  this.pCuatro.load();
  //  this.pCinco.load();
  //  this.pSeis.load();
  //  this.pAzul.load();
  //  this.pAmarillo.load();
  //  this.pRosa.load();
  //  this.pVerde.load();
  //  this.pRojo.load();
  //  this.pNaranja.load();

  }

  audio(numBoton) {
    switch (this.idioma) {
      case "espanol":

          switch (this.categoria) {
            case 'animales':

              switch (numBoton) {
                case 'btnUno':
                  // this.eBallena.play();
                  // this.audio.src='../assets/audios/numeros_Espanol/uno_e.mp3';
                  this.sonido.src ='../assets/audios/animales_Espanol/e_ballena.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnDos':
                  // this.eCocodrilo.play();
                  this.sonido.src ='../assets/audios/animales_Espanol/e_cocodrilo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnTres':
                  // this.eJirafa.play();
                  this.sonido.src ='../assets/audios/animales_Espanol/e_jirafa.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnCuatro':
                  // this.eMono.play();
                  this.sonido.src ='../assets/audios/animales_Espanol/e_mono.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnCinco':
                  // this.ePulpo.play();
                  this.sonido.src ='../assets/audios/animales_Espanol/e_pulpo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnSeis':
                  // this.eVaca.play();
                  this.sonido.src ='../assets/audios/animales_Espanol/e_vaca.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
              }

              break;
            case 'numeros':
              
              switch (numBoton) {
                case 'btnUno':
                  // this.eUno.play();
                  this.sonido.src ='../assets/audios/numeros_Espanol/uno_e.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnDos':
                  // this.eTres.play();
                  this.sonido.src ='../assets/audios/numeros_Espanol/tres_e.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnTres':
                  // this.eCinco.play();
                  this.sonido.src ='../assets/audios/numeros_Espanol/cinco_e.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnCuatro':
                  // this.eDos.play();
                  this.sonido.src ='../assets/audios/numeros_Espanol/dos_e.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnCinco':
                  // this.eCuatro.play();
                  this.sonido.src ='../assets/audios/numeros_Espanol/cuatro_e.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnSeis':
                  // this.eSeis.play();
                  this.sonido.src ='../assets/audios/numeros_Espanol/seis_e.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
              }  


              break;
            case 'colores':
              
              switch (numBoton) {
                case 'btnUno':
                  // this.eAzul.play();
                  this.sonido.src ='../assets/audios/colores_Espanol/e_azul.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnDos':
                  // this.eAmarillo.play();
                  this.sonido.src ='../assets/audios/colores_Espanol/e_amarillo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnTres':
                  // this.eRosa.play();
                  this.sonido.src ='../assets/audios/colores_Espanol/e_rosa.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnCuatro':
                  // this.eVerde.play();
                  this.sonido.src ='../assets/audios/colores_Espanol/e_verde.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnCinco':
                  // this.eRojo.play();
                  this.sonido.src ='../assets/audios/colores_Espanol/e_rojo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
                case 'btnSeis':
                  // this.eNaranja.play();
                  this.sonido.src ='../assets/audios/colores_Espanol/e_naranja.mp3';
                  this.sonido.load();
                  this.sonido.play();
                  break;
              }
              break;
          }

        break;

// ---------------------------
      case "ingles":

        switch (this.categoria) {
          case 'animales':

            switch (numBoton) {
              case 'btnUno':
                // this.iBallena.play();
                this.sonido.src ='../assets/audios/animales_Ingles/i_ballena.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnDos':
                // this.iCocodrilo.play();
                this.sonido.src ='../assets/audios/animales_Ingles/i_cocodrilo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnTres':
                // this.iJirafa.play();
                this.sonido.src ='../assets/audios/animales_Ingles/i_jirafa.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCuatro':
                // this.iMono.play();
                this.sonido.src ='../assets/audios/animales_Ingles/i_mono.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCinco':
                // this.iPulpo.play();
                this.sonido.src ='../assets/audios/animales_Ingles/i_pulpo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnSeis':
                // this.iVaca.play();
                this.sonido.src ='../assets/audios/animales_Ingles/i_vaca.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
            }

            break;
          case 'numeros':
            
            switch (numBoton) {
              case 'btnUno':
                // this.iUno.play();
                this.sonido.src ='../assets/audios/numeros_Ingles/uno_i.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnDos':
                // this.iTres.play();
                this.sonido.src ='../assets/audios/numeros_Ingles/tres_i.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnTres':
                // this.iCinco.play();
                this.sonido.src ='../assets/audios/numeros_Ingles/cinco_i.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCuatro':
                // this.iDos.play();
                this.sonido.src ='../assets/audios/numeros_Ingles/dos_i.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCinco':
                // this.iCuatro.play();
                this.sonido.src ='../assets/audios/numeros_Ingles/cuatro_i.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnSeis':
                // this.iSeis.play();
                this.sonido.src ='../assets/audios/numeros_Ingles/seis_i.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
            }  


            break;
          case 'colores':
            
            switch (numBoton) {
              case 'btnUno':
                // this.iAzul.play();
                this.sonido.src ='../assets/audios/colores_Ingles/i_azul.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnDos':
                // this.iAmarillo.play();
                this.sonido.src ='../assets/audios/colores_Ingles/i_amarillo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnTres':
                // this.iRosa.play();
                this.sonido.src ='../assets/audios/colores_Ingles/i_rosa.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCuatro':
                // this.iVerde.play();
                this.sonido.src ='../assets/audios/colores_Ingles/i_verde.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCinco':
                // this.iRojo.play();
                this.sonido.src ='../assets/audios/colores_Ingles/i_rojo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnSeis':
                // this.iNaranja.play();
                this.sonido.src ='../assets/audios/colores_Ingles/i_naranja.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
            }
            break;
        }

      break;


// ---------------------------
      case "portugues":
        

        switch (this.categoria) {
          case 'animales':

            switch (numBoton) {
              case 'btnUno':
                // this.pBallena.play();
                this.sonido.src ='../assets/audios/animales_Portugues/p_ballena.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnDos':
                // this.pCocodrilo.play();
                this.sonido.src ='../assets/audios/animales_Portugues/p_cocodrilo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnTres':
                // this.pJirafa.play();
                this.sonido.src ='../assets/audios/animales_Portugues/p_jirafa.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCuatro':
                // this.pMono.play();
                this.sonido.src ='../assets/audios/animales_Portugues/p_mono.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCinco':
                // this.pPulpo.play();
                this.sonido.src ='../assets/audios/animales_Portugues/p_pulpo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnSeis':
                // this.pVaca.play();
                this.sonido.src ='../assets/audios/animales_Portugues/p_vaca.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
            }

            break;
          case 'numeros':
            
            switch (numBoton) {
              case 'btnUno':
                // this.pUno.play();
                this.sonido.src ='../assets/audios/numeros_Portugues/uno_p.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnDos':
                // this.pTres.play();
                this.sonido.src ='../assets/audios/numeros_Portugues/tres_p.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnTres':
                // this.pCinco.play();
                this.sonido.src ='../assets/audios/numeros_Portugues/cinco_p.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCuatro':
                // this.pDos.play();
                this.sonido.src ='../assets/audios/numeros_Portugues/dos_p.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCinco':
                // this.pCuatro.play();
                this.sonido.src ='../assets/audios/numeros_Portugues/cuatro_p.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnSeis':
                // this.pSeis.play();
                this.sonido.src ='../assets/audios/numeros_Portugues/seis_p.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
            }  


            break;
          case 'colores':
            
            switch (numBoton) {
              case 'btnUno':
                // this.pAzul.play();
                this.sonido.src ='../assets/audios/colores_Portugues/p_azul.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnDos':
                // this.pAmarillo.play();
                this.sonido.src ='../assets/audios/colores_Portugues/p_amarillo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnTres':
                // this.pRosa.play();
                this.sonido.src ='../assets/audios/colores_Portugues/p_rosa.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCuatro':
                // this.pVerde.play();
                this.sonido.src ='../assets/audios/colores_Portugues/p_verde.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnCinco':
                // this.pRojo.play();
                this.sonido.src ='../assets/audios/colores_Portugues/p_rojo.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
              case 'btnSeis':
                // this.pNaranja.play();
                this.sonido.src ='../assets/audios/colores_Portugues/p_naranja.mp3';
                  this.sonido.load();
                  this.sonido.play();
                break;
            }
            break;
        }

      break;



    }
  }

  tema(tipo, f1, f2, f3, f4, f5, f6,fondo) {
    switch (tipo) {
      case "numeros":
        this.categoria = "numeros";
        fondo.src='../../assets/images/numero.svg';
        f1.src = "../../assets/numeros/uno.svg";
        f2.src = "../../assets/numeros/tres.svg";
        f3.src = "../../assets/numeros/cinco.svg";
        f4.src = "../../assets/numeros/dos.svg";
        f5.src = "../../assets/numeros/cuatro.svg";
        f6.src = "../../assets/numeros/seis.svg";
        break;
      case "animales":
        this.categoria = "animales";
        fondo.src='../../assets/images/animal.svg';
        f1.src = "../../assets/animales/ballena.svg";
        f2.src = "../../assets/animales/cocodrilo.svg";
        f3.src = "../../assets/animales/jirafa.svg";
        f4.src = "../../assets/animales/mono.svg";
        f5.src = "../../assets/animales/pulpo.svg";
        f6.src = "../../assets/animales/vaca.svg";
        break;
      case "colores":
        this.categoria = "colores";
        fondo.src='../../assets/images/color.svg';
        f1.src = "../../assets/colores/azul.svg";
        f2.src = "../../assets/colores/amarillo.svg";
        f3.src = "../../assets/colores/rosa.svg";
        f4.src = "../../assets/colores/verde.svg";
        f5.src = "../../assets/colores/rojo.svg";
        f6.src = "../../assets/colores/naranja.svg";
        break;
      default:
        break;
    }
  }

  lenguaje(tipo, fondo) {
    switch (tipo) {
      case "espanol":
        this.idioma = "espanol";
        fondo.src='../../assets/images/espana.svg';
        console.log(tipo);
        break;
      case "ingles":
        console.log(tipo);
        fondo.src='../../assets/images/reino-unido.svg';
        this.idioma = "ingles";
        break;
      case "portugues":
        console.log(tipo);
        fondo.src='../../assets/images/portugal.svg';
        this.idioma = "portugues";
        break;
      default:
        break;
    }
  }


  


  // lenguaje(tipo) {
  //   switch (tipo) {
  //     case "espanol":
  //       this.idioma = "espanol";
  //       console.log(tipo);
  //       break;
  //     case "ingles":
  //       console.log(tipo);
  //       this.idioma = "ingles";
  //       break;
  //     case "portugues":
  //       console.log(tipo);
  //       this.idioma = "portugues";
  //       break;
  //     default:
  //       break;
  //   }
  // }



}
