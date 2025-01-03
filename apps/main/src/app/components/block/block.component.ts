import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlockEditDialogComponent } from '../block-edit-dialog/block-edit-dialog.component';

@Component({
	selector: 'block',
	templateUrl: './block.component.html',
	styleUrls: ['./block.component.scss']
})
export class BlockComponent {

	@Input() habbitBlock: any;

	dayTitles: string[] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

	constructor(public dialog: MatDialog) {}

	editHabbit(): void {
		const dialogRef = this.dialog.open(BlockEditDialogComponent, {
			minWidth: 1000,
			data: this.habbitBlock,
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('res = ', result)
		});
	}

	delete() {
		// delete habbit
	}

	getActiveDayTitles() {
		return this.dayTitles.filter((title, i) => this.habbitBlock.days[i]);
	}
}
