import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form: FormGroup<any>;

  constructor(
    private fb: FormBuilder,
    public productServices: ProductsService
  ) {
    this.form = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        nombreUsuario: ['', [Validators.required, Validators.minLength(5)]],
        correo: ['', [Validators.required, Validators.email]],
        clave: ['', [Validators.required, Validators.minLength(6)]],
        confirmarClave: ['', [Validators.required]],
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('clave')?.value;
    const confirmPass = group.get('confirmarClave')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.productServices.setUserName(this.form.value.nombre);
    } else {
      console.log('Invalido');
      console.log(this.form.value.nombre);
      this.productServices.setUserName(this.form.value.nombre);
      this.form.reset();
    }
  }
}
