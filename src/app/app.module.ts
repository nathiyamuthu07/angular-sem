import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { RightComponent } from './right/right.component';
import { MiddleComponent } from './middle/middle.component';
import { LeftComponent } from './left/left.component';
import { MyfirstroutingComponent } from './myfirstrouting/myfirstrouting.component';
// import { HomeComponent } from './home/home.component';
// import { AboutMeComponent } from './about-me/about-me.component';
// import { ContactMeComponent } from './contact-me/contact-me.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    RightComponent,
    MiddleComponent,
    LeftComponent,
    MyfirstroutingComponent,
    // HomeComponent,
    // AboutMeComponent,
    // ContactMeComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
