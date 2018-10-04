import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatabaseComponent } from './database/database.component';
import { WizardComponent } from './wizard/wizard.component';
import { SourceComponent } from './source/source.component';
import { TargetComponent } from './target/target.component';
import { CompareComponent } from './compare/compare.component';
import { HttpClientModule } from '@angular/common/http';
import { CompareService } from './compare.service';
import { ConnectformComponent } from './connectform/connectform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatabaseComponent,
    WizardComponent,
    SourceComponent,
    TargetComponent,
    CompareComponent,
    ConnectformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CompareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
