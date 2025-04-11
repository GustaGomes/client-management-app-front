import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'src/app/modules/clients/models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientsMock: Client[] = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '11999990001',
      status: 'ativo',
    },
    {
      id: 2,
      name: 'Maria Oliveira',
      email: 'maria@email.com',
      phone: '11999990002',
      status: 'inativo',
    },
    {
      id: 3,
      name: 'Carlos Santos',
      email: 'carlos@email.com',
      phone: '11999990003',
      status: 'ativo',
    },
  ];

  private clientsSubject = new BehaviorSubject<Client[]>(this.clientsMock);

  constructor() {}

  getClients(): Observable<Client[]> {
    return this.clientsSubject.asObservable();
  }

  getClientById(id: number): Client | undefined {
    return this.clientsSubject.value.find((client) => client.id === id);
  }

  addClient(client: Client) {
    const updated = [
      ...this.clientsSubject.value,
      { ...client, id: Date.now() },
    ];
    this.clientsSubject.next(updated);
  }

  updateClient(updatedClient: Client) {
    const updated = this.clientsSubject.value.map((client) =>
      client.id === updatedClient.id ? updatedClient : client
    );
    this.clientsSubject.next(updated);
  }

  deleteClient(id: number) {
    const updated = this.clientsSubject.value.filter(
      (client) => client.id !== id
    );
    this.clientsSubject.next(updated);
  }
}
