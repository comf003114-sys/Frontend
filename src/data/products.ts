export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  weight: number;
  time_to_cook: number;
};

export const products: Product[] = [
  { id: 1, name: "Хинкали", price: 85, category: "main", image: "https://picsum.photos/seed/khinkali/300/200", weight: 300, time_to_cook: 20 },
  { id: 2, name: "Хачапури по-аджарски", price: 120, category: "main", image: "https://picsum.photos/seed/khachapuri/300/200", weight: 350, time_to_cook: 25 },
  { id: 3, name: "Шашлык из свинины", price: 180, category: "grill", image: "https://picsum.photos/seed/shashlik/300/200", weight: 400, time_to_cook: 35 },
  { id: 4, name: "Долма", price: 95, category: "main", image: "https://picsum.photos/seed/dolma/300/200", weight: 280, time_to_cook: 30 },
  { id: 5, name: "Чахохбили", price: 145, category: "main", image: "https://picsum.photos/seed/chakhokhbili/300/200", weight: 350, time_to_cook: 40 },
  { id: 6, name: "Пхали", price: 75, category: "appetizer", image: "https://picsum.photos/seed/pkhali/300/200", weight: 200, time_to_cook: 15 },
  { id: 7, name: "Мцвади", price: 200, category: "grill", image: "https://picsum.photos/seed/mtsvadi/300/200", weight: 450, time_to_cook: 40 },
  { id: 8, name: "Аджапсандали", price: 90, category: "appetizer", image: "https://picsum.photos/seed/ajapsandali/300/200", weight: 250, time_to_cook: 20 },
];