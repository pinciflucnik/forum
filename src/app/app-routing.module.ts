import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewThemeComponent } from './themes/new-theme/new-theme.component';
import { UserPostsComponent } from './themes/user-posts/user-posts.component';
import { UserThemesComponent } from './themes/user-themes/user-themes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'auth',
  loadChildren: () => import('./user-auth/user-auth.module').then(m => m.UserAuthModule)
  },
  {
    path: 'newTheme', component: NewThemeComponent
  },
  {
    path: 'user-posts', component: UserPostsComponent
  },
  {
    path: 'user-themes', component: UserThemesComponent
  },
  {path: 'themes',
  loadChildren: () => import('./themes/themes.module').then(m => m.ThemesModule)
},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//UserRoutingModule, ThemesRoutingModule