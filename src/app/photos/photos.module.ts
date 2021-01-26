import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
    imports: [HttpClientModule, CommonModule, PhotoListModule, PhotoFormModule],
})
export class PhotosModule { }
