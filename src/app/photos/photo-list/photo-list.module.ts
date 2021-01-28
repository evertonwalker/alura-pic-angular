import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from '../photo/photo.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/dark-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        FilterByDescription,
        PhotosComponent,
        LoadButtonComponent,
        PhotoComponent,
        CardComponent,
        SearchComponent
    ],
    imports: [ CommonModule, DarkenOnHoverModule]
})
export class PhotoListModule {}
