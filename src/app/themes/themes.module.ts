import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllThemesComponent } from './all-themes/all-themes.component';
import { ThemesRoutingModule } from './themes-routing';
import { SharedModule } from "../shared/shared.module";
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserThemesComponent } from './user-themes/user-themes.component';
import { TitleDecoratorPipe } from './title-decorator.pipe';
import { NewPostComponent } from './new-post/new-post.component';
import { PostEditComponent } from './post-edit/post-edit.component';



@NgModule({
    declarations: [
        AllThemesComponent,
        ThemeDetailsComponent,
        NewThemeComponent,
        UserPostsComponent,
        UserThemesComponent,
        TitleDecoratorPipe,
        NewPostComponent,
        PostEditComponent
    ],
    imports: [
        CommonModule,
        ThemesRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ThemesModule { }
