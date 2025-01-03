import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

export interface IArticle {
    id: string;
    title: string;
    text: string;
}

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {

    constructor(private db: AngularFirestore) {}

    getArticles$() {
        return this.db.collection('articles').valueChanges({ idField: 'id' }) as Observable<any>;
    }

    getArticle$(id: string) {
        return this.db.collection('articles').doc(id).valueChanges({ idField: 'id' });
    }
}