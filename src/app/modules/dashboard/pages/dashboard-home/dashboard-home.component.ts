import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';

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

  clientsChartData = {
    labels: ['Ativos', 'Inativos'],
    datasets: [
      {
        data: [8, 3],
        backgroundColor: ['#25D366', '#FF5252'],
      },
    ],
  };

  projectsChartData = {
    labels: ['Em andamento', 'Concluídos', 'Atrasados'],
    datasets: [
      {
        label: 'Projetos',
        data: [4, 7, 2],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
      },
    ],
  };

  chartOptionsPie: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  chartOptionsBar: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
