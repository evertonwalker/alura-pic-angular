import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  title = 'Fotos Pic';
  photos: Photo[] = [];
  filter: string;
  debounce: Subject<string> = new Subject<string>();
  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {

    this.userName = this.activatedRoute.snapshot.params.userName;

    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce.pipe(
      debounceTime(300)
    ).subscribe((value: string) => this.filter = value);

  }

  load(): void {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(resultPhotos => {
        this.filter = '';
        const photosNews = [];
        photosNews.push(...this.photos);
        photosNews.push(...resultPhotos);
        this.photos = photosNews;
        if (!resultPhotos.length) {
          this.hasMore = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
