import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Client } from '../../models/client.model';
import { ClientService } from 'src/app/core/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'status', 'actions'];
  dataSource = new MatTableDataSource<Client>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.dataSource.data = clients;
      this.dataSource.paginator = this.paginator;
    });
  }

  editClient(id: number) {
    this.router.navigate(['/clients/edit', id]);
  }

  deleteClient(id: number) {
    if (confirm('Deseja realmente excluir este cliente?')) {
      this.clientService.deleteClient(id);
    }
  }

  createClient() {
    this.router.navigate(['/clients/new']);
  }
}
