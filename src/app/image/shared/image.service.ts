import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id);
    }
}

const IMAGES = [
    {"id": 1, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat1.jpg"},
    {"id": 2, "category": "boats", "caption": "Trip to Dahab", "url": "assets/img/boat2.jpg"},
    {"id": 3, "category": "boats", "caption": "Was a great day", "url": "assets/img/boat3.jpg"},

    {"id": 4, "category": "camping", "caption": "view from above", "url": "assets/img/camping1.jpg"},
    {"id": 5, "category": "camping", "caption": "That lake", "url": "assets/img/camping2.jpg"},
    {"id": 6, "category": "camping", "caption": "For the love of camping", "url": "assets/img/camping3.jpg"},
    {"id": 7, "category": "camping", "caption": "Was a great day", "url": "assets/img/camping4.jpg"},

    {"id": 8, "category": "library", "caption": "That place <3", "url": "assets/img/library1.jpg"},
    {"id": 9, "category": "library", "caption": "For the love of books", "url": "assets/img/library2.jpg"}
]