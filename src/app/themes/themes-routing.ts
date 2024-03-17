import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllThemesComponent } from './all-themes/all-themes.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';

const routes: Routes = [
    { 
      path: '',
      pathMatch: 'full',
      component: AllThemesComponent
    },
    {
      path: ':themeId', component: ThemeDetailsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesRoutingModule { }
