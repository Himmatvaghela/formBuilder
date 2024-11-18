import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forms',
    pathMatch: 'full',
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('../../src/app/forms/forms.module').then((m) => m.FormsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
