import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './comps/navi/navi';
import { Login } from './comps/login/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports:[Navi,Login,RouterOutlet],
})
export class App {
 title ='my-app';
}
