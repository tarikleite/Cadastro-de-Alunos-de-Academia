import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TelaCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TelaCadastroComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
