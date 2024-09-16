import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterModule],
  template: `
    <h1>{{ title }}</h1>

    <nav>
      <a routerLink="">Root</a>
      <a routerLink="Component1">Component 1</a>
      <a routerLink="Component2">Component 2</a>
    </nav>

    <router-outlet />
  `,
  styles: ["a { margin-right: 1em }"],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular18 Pre-loading Strategies';
}
