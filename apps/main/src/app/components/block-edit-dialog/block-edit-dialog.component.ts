import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DatabaseService, HabbitBlock } from "src/app/service/database.service";

@Component({
	selector: 'block-edit-dialog',
	templateUrl: 'block-edit-dialog.component.html',
})
export class BlockEditDialogComponent implements OnInit {

	habbits: string[] = [];
	isCreateHabbitVisible: boolean = false;
	habbitsBlockForm: any;
	dayTitles: string[] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

	constructor(
		public dialogRef: MatDialogRef<BlockEditDialogComponent>,
		private fb: FormBuilder,
		private databaseService: DatabaseService,
		@Inject(MAT_DIALOG_DATA) public habbitBlock: any,
	) {}

	ngOnInit(): void {
		console.log('this.habbit', this.habbitBlock)
		this.habbits = [...this.habbitBlock.habbits];
		this.habbitsBlockForm = this.fb.group({
			title: this.habbitBlock.title,
			days: this.fb.array(this.habbitBlock.days),
			reward: this.habbitBlock.reward
		});

		console.log('this.habbitsBlockForm = ', this.habbitsBlockForm)
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

		this.databaseService.updateHabbitBlock(this.habbitBlock.id, newHabbitBlock);
	}
}
