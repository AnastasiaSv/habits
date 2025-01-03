import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'create-habbit',
	templateUrl: './create-habbit.component.html',
	styleUrls: ['./create-habbit.component.scss']
})
export class CreateHabbitComponent {

	@Output() createHabbit: EventEmitter<string> = new EventEmitter<string>();

	onCreate(value: string): void {
		this.createHabbit.emit(value);
	}

	onCancel(): void {
		this.createHabbit.emit();
	}
}
