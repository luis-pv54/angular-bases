import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // constructor(public dbzService: DbzService) {}
  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name: '',
      power: 0,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   // TODO: Emitir el ID del personaje
  //   console.log(index);
  //   this.onDelete.emit(index);

  //   // this.characterList.splice(index, 1);
  // }

  onDeleteCharacter(id: string): void {
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(id);
  }
}
