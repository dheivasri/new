import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food.class';
import { Tag } from '../shared/models/tag.class';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }


  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }


  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }


  getAll():Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        stars: 5.0,
        imageUrl: '/assets/img/food/pepparoni.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        stars: 4.0,
        imageUrl: '/assets/img/food/meatball.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        stars: 4.4,
        imageUrl: '/assets/img/food/hamburger.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'French Fries',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        stars: 4.5,
        imageUrl: '/assets/img/food/frenchfries.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        stars: 3.5,
        imageUrl: '/assets/img/food/soup.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetable Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: true,
        stars: 4.5,
        imageUrl: '/assets/img/food/vegpizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
}
