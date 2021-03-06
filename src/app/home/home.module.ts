import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    imports: [HttpClientModule, CommonModule, ReactiveFormsModule, VMessageModule ],
    declarations: [SigninComponent]
})
export class HomeModule { }
