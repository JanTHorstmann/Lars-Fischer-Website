import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-imprint',
  imports: [Navbar, Footer],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {

}
