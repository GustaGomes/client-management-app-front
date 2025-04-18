import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';

const routes: Routes = [
  { path: '', component: ClientsListComponent },
  { path: 'edit/:id', component: ClientsListComponent }, // temporário
  { path: 'new', component: ClientsListComponent }, // temporário
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
