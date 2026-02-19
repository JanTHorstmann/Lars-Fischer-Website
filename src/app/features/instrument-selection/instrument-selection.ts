import { Component } from '@angular/core';

@Component({
  selector: 'app-instrument-selection',
  imports: [],
  templateUrl: './instrument-selection.html',
  styleUrl: './instrument-selection.scss',
})
export class InstrumentSelection {

  instruments = ['gitarre', 'bass', 'schlagzeug',]

  toCapitalize(str: string) {
    return str.toLowerCase()
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.substr(1))
  }

  selectInstrument(instrument: string) {
    console.log('Choosen Instrument:', instrument);    
  }

}
