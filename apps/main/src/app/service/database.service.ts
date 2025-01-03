import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface HabbitBlock {
    title: string,
    habbits: string[],
    days: boolean[],
    reward: string
}

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    constructor(private db: AngularFirestore) {}

    getHabbitBlocks() {
        return this.db.collection('blocks').valueChanges({ idField: 'id' }) as Observable<any>;
    }

    addHabbitBlock(habbitBlock: HabbitBlock) {
        this.db.collection('blocks').add(habbitBlock);
    }

    updateHabbitBlock(blockId: string, habbitBlock: HabbitBlock) {
        this.db.collection('blocks').doc(blockId).set(
            habbitBlock,
            { merge: true }
        );
    }

    deleteHabbitBlock(blockId: string) {
        this.db.collection('blocks').doc(blockId).delete();
    }
}
