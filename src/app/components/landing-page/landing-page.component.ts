import {Component, OnInit, signal} from '@angular/core';
import {Router} from '@angular/router';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {merge} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-landing-page',
  imports: [
    MatFormField, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, ReactiveFormsModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements  OnInit {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');
ngOnInit(): void {

}
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
  constructor(private router:Router){
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  goToSnap():void {
    this.router.navigateByUrl('snaps');
  }
}
