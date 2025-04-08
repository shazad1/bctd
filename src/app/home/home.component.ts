import { Component, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatCardModule} from '@angular/material/card';
import { PictureBoxComponent } from "../picture-box/picture-box.component";
import { Aspect, Stage } from '../PictureModel';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-home',
  imports: [MatCardModule, PictureBoxComponent, MatFormFieldModule, MatSelectModule, MatInputModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public aspect: Aspect = Aspect.CIELING;
  stages: Stage[] = [Stage.DROP_OFF, Stage.YARD_ENTRY, Stage.MID_EAY]
  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}
