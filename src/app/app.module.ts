import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { SideComponent } from './components/side/side.component';
import { DemandesComponent } from './components/demandes/demandes.component';
import { ModalModule } from 'ngx-bootstrap';
import { routing } from './app.routing';
import { DemandesService } from './services/demandes.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SideComponent,
    DemandesComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    routing
  ],
  providers: [
    DemandesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
