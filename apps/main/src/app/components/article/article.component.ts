import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ArticlesService, IArticle } from "src/app/service/articles.service";

@Component({
	selector: 'article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    id?: string | null;
    article$?: Observable<any>;

    constructor(
        private route: ActivatedRoute,
        private articlesService: ArticlesService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');

        if(this.id) {
            this.article$ = this.articlesService.getArticle$(this.id);
        }
    }
}
