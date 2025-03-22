// Define the supported languages
export type Language = 'en' | 'ja' | 'ko';

// Define the menu categories
export type Category = 'soup' | 'main' | 'shashlik' | 'salad' | 'dessert' | 'bread' | 'drink';

// Interface for a menu item with translations
export interface MenuItem {
  id: string;
  category: Category;
  price: number;
  image: string;
  translations: Record<Language, {
      name: string;
      description: string;
      ingredients: string[]; // Array of ingredients in each language
    }>;
}

// Interface for category information with translations
export interface CategoryInfo {
  id: Category;
  translations: Record<Language, {
      name: string;
    }>;
}
