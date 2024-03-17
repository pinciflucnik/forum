import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllThemesComponent } from './all-themes/all-themes.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { ThemesRoutingModule } from './themes-routing';
import { SharedModule } from "../shared/shared.module";
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { FormsModule } from '@angular/forms';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserThemesComponent } from './user-themes/user-themes.component';



@NgModule({
    declarations: [
        AllThemesComponent,
        ThemeDetailsComponent,
        NewThemeComponent,
        UserPostsComponent,
        UserThemesComponent,
    ],
    imports: [
        CommonModule,
        ThemesRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class ThemesModule { }
