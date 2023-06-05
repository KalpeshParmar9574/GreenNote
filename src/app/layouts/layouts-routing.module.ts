import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home'
                , component: HomeComponent,
                
           }
       ]
    },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
