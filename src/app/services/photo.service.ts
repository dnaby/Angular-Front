import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: '../assets/galleria/galleria1.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria1s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria2.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria2s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria3.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria3s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria4.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria4s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria5.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria5s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria6.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria6s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria7.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria7s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria8.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria8s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria9.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria9s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria10.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria10s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria11.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria11s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria12.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria12s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria13.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria13s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria14.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria14s.jpg'
            },
            {
                itemImageSrc: '../assets/galleria/galleria15.jpg',
                thumbnailImageSrc: '../assets/galleria/galleria15s.jpg'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};