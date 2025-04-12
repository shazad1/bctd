import { Component, OnInit, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatCardModule} from '@angular/material/card';
import { PictureBoxComponent } from "../picture-box/picture-box.component";
import { Aspect, Stage } from '../PictureModel';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { Client } from '../dbModels';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, PictureBoxComponent,CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public currentAspect: number = 0;
  public clients: any = [];
  public drivers: any = [];
  public aspects: Aspect[] = [
    Aspect.BACK,
    Aspect.FRONT,
    Aspect.LEFT,
    Aspect.RIGHT,
    Aspect.CIELING,
    Aspect.FLOOR_CARPET,
    Aspect.FRIDGE,
    Aspect.MATTRESS,
  ]
  stages: Stage[] = [
    Stage.DROP_OFF,
    Stage.YARD_ENTRY,
    Stage.PICK_UP,
    Stage.MID_WAY]
  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
  receiveNavigation(direction: number) {
    if (direction < 0) {
      this.prev();
    } else {
      this.next();
    }
  }
  next() {
    if (this.currentAspect < this.aspects.length -1)
    this.currentAspect++;
  }

  prev() {
    if (this.currentAspect > 0)
    this.currentAspect--;
  }
  ngOnInit() {
    var databaseInstance = getDatabase();
    const clientRef = ref(databaseInstance, '1/clients');
    const driversRef = ref(databaseInstance, '1/drivers')
      onValue(clientRef, (snapshot) => {
        const data = snapshot.val();
        this.clients = Object.values(data);
      });
      onValue(driversRef, (snapshot) => {
        const data = snapshot.val();
        this.drivers = Object.values(data);

      });
  }
}
