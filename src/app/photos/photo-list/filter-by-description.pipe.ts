import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';


@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {

    // primeiro parâmetro do transform sempre será o valor que vai ser transformado e nesse caso a lista de imagens
    // já o segundo são os argumentos que usaremos para a transforamção, nesse caso como será apenas uma string, mudaremos o nome

    transform(photos: Photo[], descriptionQuery: string) {

        descriptionQuery ? descriptionQuery = descriptionQuery :  descriptionQuery = '';

        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if (descriptionQuery) {

            return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
        } else {
            return photos;
        }
    }
}