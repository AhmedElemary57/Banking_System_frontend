import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MakeTransactionComponent} from "./components/make-transaction/make-transaction.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {CustomerListComponent} from "./components/customer-list/customer-list.component";
import {CustomerComponent} from "./components/customer/customer.component";
import {TransactionsComponent} from "./components/transactions/transactions.component";
import {TransactionItemComponent} from "./components/transaction-item/transaction-item.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:email', component: CustomerComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transactions/:id', component: TransactionItemComponent },
  { path: 'make-transaction', component: MakeTransactionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
