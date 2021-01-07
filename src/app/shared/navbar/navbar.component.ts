import { Component, OnInit } from '@angular/core';
import { HostListener, ViewChild, Renderer2, AfterViewInit, ElementRef } from '@angular/core';
import { NavbarComponent } from 'ng-uikit-pro-standard';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class Navbar2Component implements OnInit{

  //@ViewChild('nav', { static: true }) nav: NavbarComponent;

  allCategorias: any;
  constructor(
    private ServiciosInyected: ServiciosService,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    //this.rtzCategorias();
  }
/*
  transformDropdowns() {
    const dropdownMenu = Array.from(this.el.nativeElement.querySelectorAll('.dropdown-menu'));
    const navHeight = this.nav.navbar.nativeElement.clientHeight + 'px';

    dropdownMenu.forEach((dropdown) => {
      this.renderer.setStyle(dropdown, 'transform', `translateY(${navHeight})`);
    });
    }

    @HostListener('click', ['$event'])
    onClick(event) {
    const toggler = this.el.nativeElement.querySelector('.navbar-toggler');
    const togglerIcon = this.el.nativeElement.querySelector('.navbar-toggler-icon');
    if (event.target === toggler || event.target === togglerIcon) {
      console.log('test');
      setTimeout(() => {
        this.transformDropdowns();
      }, 351);
    }
    }

    @HostListener('document:scroll', ['$event'])
    onScroll() {
    this.transformDropdowns();
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
      this.transformDropdowns();
    }

    ngAfterViewInit() {
      this.transformDropdowns();
    }*/


    /*
    rtzCategorias() {
      this.ServiciosInyected.leerCategoria().subscribe(
        (categorias) => {
          this.allCategorias = categorias;
        },
        error => {
          console.log('error');
        }
      );
    }
    onClickCategoria(){
      setTimeout( function(){
        location.reload();
      }, 1000);
    }*/

}
