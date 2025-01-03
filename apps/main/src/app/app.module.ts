import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { CreateHabbitComponent } from './components/create-habbit/create-habbit.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { BlockComponent } from './components/block/block.component';
import { BlockEditDialogComponent } from './components/block-edit-dialog/block-edit-dialog.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { BlockCreateDialogComponent } from './components/block-create-dialog/block-create-dialog.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { TruncatePipe } from './pipes/truncate.pipe';

// определение маршрутов
const appRoutes: Routes =[
	{ path: '', component: HomeComponent},
	{ path: 'blocks', component: BlocksComponent},
	{ path: 'articles', component: ArticlesComponent},
	{ path: 'article/:id', component: ArticleComponent},
	{ path: '**', component: HomeComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		CategoriesComponent,
		CreateHabbitComponent,
		HeaderComponent,
		HomeComponent,
		BlocksComponent,
  		BlockComponent,
		BlockEditDialogComponent,
		BlockCreateDialogComponent,
		ArticlesComponent,
		ArticleComponent,
		TruncatePipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		RouterModule.forRoot(appRoutes),
		BrowserAnimationsModule,
		MatCardModule,
		MatSelectModule,
		MatCheckboxModule,
		MatInputModule,
		MatButtonModule,
		MatRadioModule,
		MatExpansionModule,
		MatIconModule,
		MatIconModule,
		MatIconModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFirestoreModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
