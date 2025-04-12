import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent implements OnInit {
  metrics = [
    { label: 'Clientes', value: 42, icon: 'groups', color: 'primary' },
    { label: 'Projetos', value: 15, icon: 'work', color: 'accent' },
    { label: 'Atendimentos', value: 58, icon: 'support', color: 'warn' },
    {
      label: 'Status Geral',
      value: 'Operacional',
      icon: 'check_circle',
      color: 'primary',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
