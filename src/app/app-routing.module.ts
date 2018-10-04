import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { SourceComponent } from './source/source.component';
import { TargetComponent } from './target/target.component';
import { CompareComponent } from './compare/compare.component';
import { ConnectformComponent } from './connectform/connectform.component';

const routes: Routes = [
  { path: 'database' , component: DatabaseComponent ,
    children:[
      { path: 'source' , component: SourceComponent,
        children:[
          { path: 'form' , component: ConnectformComponent }
        ]
      },
      { path: 'target' , component: TargetComponent ,
        children:[
          { path: 'form' , component: ConnectformComponent }
        ]
      },
      { path: 'compare' , component: CompareComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
