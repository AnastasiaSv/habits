import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { DatabaseService } from 'src/app/service/database.service';
import { BlockCreateDialogComponent } from '../block-create-dialog/block-create-dialog.component';

@Component({
  selector: 'blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  habbitBlocks$: Observable<any> = of([]);

  constructor(
    public dialog: MatDialog,
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    this.habbitBlocks$ = this.databaseService.getHabbitBlocks();
  }

  createHabbit() {
    const dialogRef = this.dialog.open(BlockCreateDialogComponent, {
			minWidth: 1000
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('res = ', result)
		});
  }

  deleteHabbitBlock(id: string) {
    this.databaseService.deleteHabbitBlock(id);
  }
}
