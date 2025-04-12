import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/core/services/client.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  clientId!: number;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      status: ['ativo', Validators.required],
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.clientId = +id;
      const client = this.clientService.getClientById(this.clientId);
      if (client) {
        this.form.patchValue(client);
      } else {
        alert('Cliente não encontrado.');
        this.router.navigate(['/clients']);
      }
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const clientData: Client = {
      ...this.form.value,
      id: this.clientId || 0,
    };

    if (this.isEdit) {
      this.clientService.updateClient(clientData);
    } else {
      this.clientService.addClient(clientData);
    }

    this.router.navigate(['/clients']);
  }

  cancelar() {
    this.router.navigate(['/clients']);
  }
}
