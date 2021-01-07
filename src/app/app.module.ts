
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { DropdownModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule} from 'angular-bootstrap-md';
import { WavesModule} from 'angular-bootstrap-md';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Navbar2Component } from './shared/navbar/navbar.component';
import { FeaturedProductComponent } from './home/featured-product/featured-product.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';

//import { NavbarComponent } from 'ng-uikit-pro-standard';

import { TabsModule } from 'ng-uikit-pro-standard';

// canvas library
//import { fabric } from "fabric";

@NgModule({
  declarations: [
    AppComponent,
    Navbar2Component,
    FeaturedProductComponent,
    HomeComponent,
    SlideshowComponent,
    FooterComponent,
    CategoriaComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NavbarModule,
    WavesModule,
    TabsModule.forRoot(),
    AppRoutingModule,
    DropdownModule.forRoot(),
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
