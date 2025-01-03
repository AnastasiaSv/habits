import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { DatabaseService, HabbitBlock } from "src/app/service/database.service";

@Component({
	selector: 'block-create-dialog',
	templateUrl: './block-create-dialog.component.html',
	styleUrls: ['./block-create-dialog.component.scss']
})
export class BlockCreateDialogComponent implements OnInit {

	habbits: string[] = [];
	isCreateHabbitVisible: boolean = false;
	habbitsBlockForm: any;
	dayTitles: string[] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

	constructor(
		public dialogRef: MatDialogRef<BlockCreateDialogComponent>,
		private fb: FormBuilder,
		private databaseService: DatabaseService
	) {}

	ngOnInit(): void {
		this.habbitsBlockForm = this.fb.group({
			title: '',
			days: this.fb.array([false, false, false, false, false, false, false]),
			reward: ''
		});
	}

	createHabbit(): void {
		this.isCreateHabbitVisible = true;
	}

	onCreateHabbit(habbit: string): void {
		if (habbit) {
			this.habbits.push(habbit);
		}
		this.isCreateHabbitVisible = false;
	}

	deleteHabbit(index: number): void {
		this.habbits.splice(index, 1);
	}

	save(): void {
		const newHabbitBlock: HabbitBlock = {
			title: this.habbitsBlockForm.controls.title.value,
			reward: this.habbitsBlockForm.controls.reward.value,
			days: this.habbitsBlockForm.controls.days.value,
			habbits: this.habbits
		};

		console.log('newHabbitBlock = ', newHabbitBlock)

		this.databaseService.addHabbitBlock(newHabbitBlock);
	}
}
