import { Component, OnInit, ViewChild } from '@angular/core';
import { GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent } from 'ngx-image-gallery';
import { IPhotoVO, IConfigurationVO } from '../../../services/configuration/IConfigurations';
import { ConfigurationService } from '../../../services/configuration/configuration.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

  public photos: Array<IPhotoVO> = [];

  public gallery_config: GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showImageTitle: false,
    showThumbnails: false,
  };

  public gallery_images: GALLERY_IMAGE[] = [];

  constructor(private configurationService: ConfigurationService) { }

  protected updateGallery() {
    this.photos = this.configurationService.configurationVO.photos;
    this.gallery_images = [];
    this.photos.forEach((photo: IPhotoVO) => {
      this.gallery_images.push({
        url: photo.fullSizeUrl,
        thumbnailUrl: photo.previewUrl
      });
    });
  }

  public openGallery(index: number = 0) {
    this.gallery_config.showArrows = false;
    this.ngxImageGallery.open(index);
  }

  ngOnInit() {
    this.updateGallery();
  }

}
