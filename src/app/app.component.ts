import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalCounterComponent } from "./signals/signal-counter/signal-counter.component";
import { PostsComponent } from "./posts/posts.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SignalCounterComponent, PostsComponent, CommonModule]
})
export class AppComponent {
  title = 'ngrx-stores-and-signals-angular18';
}
