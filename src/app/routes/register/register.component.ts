import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  NonNullableFormBuilder,
  FormControl,
} from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { HeaderComponent } from '../../components/header/header.component';

type Form = FormGroup<{
  nombre: FormControl<string>;
  nombreUsuario: FormControl<string>;
  correo: FormControl<string>;
  clave: FormControl<string>;
  confirmarClave: FormControl<string>;
}>;
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  //Esta linea permitira que nada de lo que se envie en el formulario sera null
  formBuilder = inject(NonNullableFormBuilder);
  //inject en Angular se utiliza para inyectar servicios o dependencias dentro de componentes,
  //  directivas o funciones sin necesidad de pasarlos a través del constructor.
  private productServices = inject(ProductsService);

  form: Form = this.formBuilder.group({
    nombre: this.formBuilder.control(''),
    nombreUsuario: this.formBuilder.control(''),
    correo: this.formBuilder.control(''),
    clave: this.formBuilder.control(''),
    confirmarClave: this.formBuilder.control(''),
  });

  onSubmit() {
    console.log(this.form.value);
    this.productServices.setUserName(this.form.value.nombre);
    this.form.reset();
    console.log(this.form.valid);
  }
}
