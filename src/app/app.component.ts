import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { RegisterFormComponent } from './page/register-form/register-form.component';
import { TinNumberFormComponent } from './page/tin-number-form/tin-number-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,RegisterFormComponent,TinNumberFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'persion-registration-frontEnd';
}
