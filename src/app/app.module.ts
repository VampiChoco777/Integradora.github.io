import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FinanceComponent } from './components/finance/finance.component';
import { CheckerComponent } from './components/checker/checker.component';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    CheckerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FinanceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
