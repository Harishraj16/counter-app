import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-app';
  count = 0;

  increment(){
    this.count++;
  }
  decrement(){
    if(this.count>0){
      this.count--;
    }
  }

  name = "Harish";
  isDisabled = true;
}
