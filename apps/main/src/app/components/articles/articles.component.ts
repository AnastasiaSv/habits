import { Component } from "@angular/core";
import { Observable, of } from "rxjs";
import { ArticlesService, IArticle } from "src/app/service/articles.service";

@Component({
	selector: 'articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

    articles$: Observable<IArticle[]> = of([]);

    constructor(private articlesService: ArticlesService) {}

    ngOnInit() {
        this.articles$ = this.articlesService.getArticles$();
    }
}
