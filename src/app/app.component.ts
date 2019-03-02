import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  exampleForm = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    tdocu: new FormControl(),
    numero: new FormControl(),

  });


  public mostrarDatos($event) {
    
    alert("Nombre: " + this.exampleForm.get('nombre').value + "\n" +
    "Apellido: " + this.exampleForm.get('apellido').value + "\n" + 
    "Tipo documento: " + this.exampleForm.get('tdocu').value + "\n" + 
    "# Documento: " + this.exampleForm.get('numero').value + "\n");
  }
}
