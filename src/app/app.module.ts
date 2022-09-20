import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { MakeTransactionComponent } from './components/make-transaction/make-transaction.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    CustomerListComponent,
    CustomerComponent,
    TransactionsComponent,
    TransactionItemComponent,
    MakeTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
