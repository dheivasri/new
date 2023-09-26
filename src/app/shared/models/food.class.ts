export class Food {
  // ? = optional, ! = mandatory
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  favorite: boolean = false;
  stars: number = 0;
  imageUrl!: string;
  cookTime!: string;
}
