import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ServiciosService } from '../services/servicios.service';
import { TabsetComponent } from 'ng-uikit-pro-standard';
//import { fabric } from "fabric";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit  {

  @ViewChild('myCanvas')
  myCanvas: ElementRef<HTMLCanvasElement>;
  //@ViewChild('myCanvas2')
  //myCanvas2: ElementRef<HTMLCanvasElement>;
  @ViewChild('staticTabs', { static: true }) staticTabs: TabsetComponent;


  descripcion: any;
  imagen: any;
  precio: any;
  serviciotitulo: any;
  titulo: any;
  opciones: any;
  opcioncustom: any;
  custom: any;

  nombrecolor: any = 1;

  // slider
  public myInterval: number = 3000;
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;

  // para las opciones
  opcion: any = 1;
  color: any = 1;
  // para el canvas

  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D | null;
  public imageObj: HTMLImageElement;

  // para el text Front
  public mytexto: any = '';
  public myfont: any = 'Arial';

  // para el text Back
  public mytexto2: any = 'Text';
  public myfont2: any = 'Arial';

  //public misFuentes: any = ['Arial', 'rockwell-bold', 'akzidenz-grotesk', 'nexa-script', 'script-mt-bold', 'itc-modern', 'ltc-square-face', 'sackers-gothic'];
  public misFuentes: any = ['Arial', 'rockwell-bold'];
  public misFuentes2: any = ['Arial', 'rockwell-bold'];

  // producto seleccionado

  // imagen front
  suimagen: any;
  // imagen back
  suimagen2: any;

  constructor(
    private rutaActiva: ActivatedRoute,
    private ServiciosInyected: ServiciosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.rtzProducto(this.rutaActiva.snapshot.params.titulo,this.rutaActiva.snapshot.params.color);
    console.log('mis parametros', this.rutaActiva.snapshot.params.color);
    // const myModal = new mdb.Modal(document.getElementById('myModal'), options) 

  }



  // slider
  activeSlideChange(){
    this.opcion = this.activeSlideIndex;
  }

  changeActiveTab(fuente,i) {
    //this.staticTabs.setActiveTab(i);
    console.log(this.staticTabs,' la fuente ', fuente);
    this.myfont = fuente;
  }
  changeActiveTab2(fuente,i) {
    //this.staticTabs.setActiveTab(i);
    console.log(this.staticTabs,' la fuente ', fuente);
    this.myfont2 = fuente;
  }

  rtzProducto(titulo,color) {
    this.ServiciosInyected.leerUnProducto(titulo,color).subscribe(
      (producto) => {
        this.descripcion = producto['result'][0].descripcion;
        this.imagen = producto['result'][0].imagen;
        // this.precio = producto['result'][0].precio;
        this.serviciotitulo = producto['result'][0].serviciotitulo;
        this.titulo = producto['result'][0].titulo;
        this.opciones = producto['opciones'];
        this.opcioncustom = producto['opcioncustom'];
        this.custom = producto['custom'];

        for (var colorBD of producto['opciones']) {
          if(colorBD.id == color){
            console.log('el color es', colorBD.titulo);
            this.nombrecolor = colorBD.titulo;
            this.precio = colorBD.precio;
          }


        }

        console.log('easdasd v', color);
        console.log('el color es', this.nombrecolor);
        console.log(producto);
      },
      error => {
        console.log('error');
      }
    );
  }
  seleccionarProducto(){
    this.activeSlideChange();
    this.suimagen = this.custom[0].imagen;
    this.suimagen2 = this.custom[1].imagen;
    document.getElementById('imagenanterior').style.display = "block";
    document.getElementById('imagenanterior2').style.display = "block";
    console.log(this.custom[0]);
    //carouselRef.pause();
  }

  seleccionarColor(color){
    this.color = color;
    this.rtzProducto(this.rutaActiva.snapshot.params.titulo,color);
    var myruta = '/producto/'+this.rutaActiva.snapshot.params.titulo+'/'+color;
    this.router.navigateByUrl(myruta);
  }

  previewimgfirst(texto, fuente,texto2, fuente2){
    // canvas 1
    //var canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('myCanvas');
    //var ctx: CanvasRenderingContext2D = canvas.getContext("2d");

    //canvas 2
    //var canvas2: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('myCanvas2');
    //var ctx2: CanvasRenderingContext2D = canvas2.getContext("2d");

    

    document.getElementById('imagenanterior').style.display = "none";
    document.getElementById('imagenanterior2').style.display = "none";
    //canvas 2 imagenes
    document.getElementById('myCanvas').style.display = "block";
    document.getElementById('myCanvascontent1').style.display = "block";
    document.getElementById('myCanvas2').style.display = "block";
    document.getElementById('myCanvascontent2').style.display = "block";

    // para front
    texto = this.mytexto;
    fuente = this.myfont;
    // para back
    texto2 = this.mytexto2;
    fuente2 = this.myfont2;

    // para front
    var anchotexto = texto.length / 2;
    var img = new Image();
    /*img.onload = function() {
        ctx.drawImage(img, 0, 0, img.width, img.height);
        //ctx.font = fuente;
        ctx.font = (ctx.canvas.width/anchotexto)-20 + "px "+fuente;
        ctx.fillText(texto, 125, 260);
        ctx.fillStyle = "#d5d6d3";
        ctx.textAlign="center";
        ctx.textBaseline="middle";
        var width = ctx.canvas.width;
        console.log('hancho del texto',width);
    }
    */
    //img.src = this.custom[0].imagen;

  //FOR CANVAS 1

  var canvastest1 = new fabric.Canvas('myCanvas',{
    //backgroundColor: 'lightgrey',
    //width: 250,
    //height: 538
  });
  var text1 = new fabric.Textbox('insert text', {
    left: 50,
    top: 50,
    //width: 150,
    fontSize: 50
  });
  fabric.Image.fromURL(this.custom[1].imagen, function(img) {
    img.set({ 
      left: 0, 
      top: 0,
      //width: 250,
      //height:538
    });
    canvastest1.backgroundImage = img;
    canvastest1.add(text1);
  });


// funcione
    

    //fabric back
    var canvastest = new fabric.Canvas('myCanvas2',{
      //backgroundColor: 'lightgrey',
      //width: 250,
      //height: 538
    });
   // canvas 
    var text = new fabric.Textbox('texto2', {
      left: 50,
      top: 50,
      //width: 150,
      fontSize: 50
    });
    fabric.Image.fromURL(this.custom[1].imagen, function(img) {
      img.set({ 
        left: 0, 
        top: 0,
        //width: 250,
        //height:538
      });
      canvastest.backgroundImage = img;
      canvastest.add(text);
    });

// Apply selected font on change
/*
document.getElementById('font-family').onchange = function() {
  if (this.value !== 'Times New Roman') {
    loadAndUse(this.value);
  } else {
    canvastest.getActiveObject().set("fontFamily", this.value);
    canvastest.requestRenderAll();
  }
};

function loadAndUse(font) {
  var myfont = new FontFaceObserver(font)
  myfont.load()
    .then(function() {
      // when font is loaded, use it.
      canvastest.getActiveObject().set("fontFamily", font);
      canvastest.requestRenderAll();
    }).catch(function(e) {
      console.log(e)
      alert('font loading failed ' + font);
    });
}*/
    
  }

  previewimg(texto, fuente, texto2, fuente2){
 

    document.getElementById('imagenanterior').style.display = "none";
    document.getElementById('imagenanterior2').style.display = "none";

    // canvas
    document.getElementById('myCanvas').style.display = "block";
    document.getElementById('myCanvascontent1').style.display = "block";
    document.getElementById('myCanvas2').style.display = "block";
    document.getElementById('myCanvascontent2').style.display = "block";

    // para front
    texto = this.mytexto;
    fuente = this.myfont;
    // para back
    texto2 = this.mytexto2;
    fuente2 = this.myfont2;

    // para front
 
    // para back

  }
  // carouselRef.pause() para pausar
  cerrarmodal(){
    document.getElementById('imagenanterior').style.display = "none";
    document.getElementById('imagenanterior2').style.display = "none";
    // canvas
    document.getElementById('myCanvas').style.display = "none";
    document.getElementById('myCanvascontent1').style.display = "none";
    document.getElementById('myCanvas2').style.display = "none";
    document.getElementById('myCanvascontent2').style.display = "none";

    document.getElementById('tabsprimeravista').style.display = "block";
    document.getElementById('tabssegundaavista').style.display = "none";
    document.getElementById('btnPreview').style.display = "none";

    


  }

  actibartabsegundavista(){
    document.getElementById('tabsprimeravista').style.display = "none";
    document.getElementById('tabssegundaavista').style.display = "block";
    document.getElementById('btnPreview').style.display = "block";
  }



}
