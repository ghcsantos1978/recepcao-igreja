import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Cadastros',
          icon:'pi pi-fw pi-wallet',
          items:[
              {
                  label:'Usuários',
                  routerLink:'/usuarios',
                  icon:'pi pi-fw pi-user-plus',
              },
              {
                  label:'Alergias',
                  routerLink:'/alergias',
                  icon:'pi pi-fw pi-plus'
              },
              {
                  label:'Restrições',
                  routerLink:'/restricoes',
                  icon:'pi pi-fw pi-plus'
              }
          ]
      },
      {
          label:'Relatorios',
          icon:'pi pi-fw pi-table',
          items:[
              {
                  label:'Presença',
                  icon:'pi pi-fw pi-thumbs-up'
              },
          ]
      },
  ];
  }

}
