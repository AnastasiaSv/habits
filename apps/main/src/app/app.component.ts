import { AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

	selected: Date | null = null;

	@ViewChild('entry', { read: ViewContainerRef }) entry?: ViewContainerRef;
	@ViewChild('tmpl') tmpl?: TemplateRef<any>;

	ngOnInit() {
		// const observable = this.coldDate();

		// const s1 = observable.subscribe(console.log);

		// setTimeout(() => {
		// 	const s2 = observable.subscribe(console.log);
		// }, 2000);

		// setTimeout(() => {
		// 	const s3 = observable.subscribe(console.log);
		// }, 4000);

		// const observable = this.hotDate();

		// const n = 5;
		// const M = [...Array(n)].map(() => Array(n).fill(0));
		// let x = 0;
		// let y = 0;
		// let dx = 1;
		// let dy = 0;

		// for (let i = 1, nn = n**2; i <= nn; ++i) {
		// 	console.log('=============')
		// 	console.log('x = ', x)
		// 	console.log('y = ', y)
		// 	console.log('dx = ', dx)
		// 	console.log('dy = ', dy)
		// 	M[y][x] = i;
		// 	if (!M[y + dy] || M[y + dy][x + dx] !== 0) {
		// 		console.log('yes!!!');
		// 		[dx, dy] = [-dy, dx];
		// 	}
		// 	x += dx;
		// 	y += dy;
		// }

		// console.log('M = ', M)
		
		// const observable = new Observable(subscriber => {
		// 	const value = new Date();
		// 	subscriber.next(value);
		// });

		// const s1 = observable.subscribe(console.log)

		// setTimeout(() => {
		// 	const s2 = observable.subscribe(console.log);
		// }, 2000);

		// setTimeout(() => {
		// 	const s3 = observable.subscribe(console.log);
		// }, 4000);
	}

	ngAfterViewInit() {
		if (this.tmpl) this.entry?.createEmbeddedView(this.tmpl);
		// if (this.tmpl) this.entry?.createEmbeddedView(this.tmpl);
	}

	remove() {
		this.entry?.clear();
	}

	coldDate() {
		return new Observable(subscriber => {
			const value = new Date();
			subscriber.next(value);
		})
	}

	hotDate() {
		const value = new Date();

		return new Observable(subscriber => {
			subscriber.next(value);
		})
	}
}
