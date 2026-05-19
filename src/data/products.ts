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
  { id: 1, name: "Хинкали", price: 85, category: "main", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Khinkali.jpg/800px-Khinkali.jpg", weight: 300, time_to_cook: 20 },
  { id: 2, name: "Хачапури по-аджарски", price: 120, category: "main", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Adjaruli_khachapuri.jpg/800px-Adjaruli_khachapuri.jpg", weight: 350, time_to_cook: 25 },
  { id: 3, name: "Шашлык из свинины", price: 180, category: "grill", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop", weight: 400, time_to_cook: 35 },
  { id: 4, name: "Долма", price: 95, category: "main", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dolma_1.jpg/800px-Dolma_1.jpg", weight: 280, time_to_cook: 30 },
  { id: 5, name: "Чахохбили", price: 145, category: "main", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop", weight: 350, time_to_cook: 40 },
  { id: 6, name: "Пхали", price: 75, category: "appetizer", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Pkhali.jpg/800px-Pkhali.jpg", weight: 200, time_to_cook: 15 },
  { id: 7, name: "Мцвади", price: 200, category: "grill", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop", weight: 450, time_to_cook: 40 },
  { id: 8, name: "Аджапсандали", price: 90, category: "appetizer", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop", weight: 250, time_to_cook: 20 },
  { id: 9, name: "Сациви", price: 130, category: "main", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop", weight: 320, time_to_cook: 45 },
  { id: 10, name: "Харчо", price: 110, category: "soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop", weight: 350, time_to_cook: 50 },
  { id: 11, name: "Лобиани", price: 80, category: "bakery", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", weight: 300, time_to_cook: 30 },
  { id: 12, name: "Чурчхела", price: 55, category: "dessert", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Churchkhela_2.jpg/800px-Churchkhela_2.jpg", weight: 150, time_to_cook: 5 },
  { id: 13, name: "Оджахури", price: 160, category: "main", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop", weight: 380, time_to_cook: 35 },
  { id: 14, name: "Бадриджани нигвзит", price: 85, category: "appetizer", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Badrijani_nigvzit.jpg/800px-Badrijani_nigvzit.jpg", weight: 200, time_to_cook: 20 },
  { id: 15, name: "Мтиулури хачапури", price: 100, category: "bakery", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop", weight: 280, time_to_cook: 25 },
  { id: 16, name: "Шкмерули", price: 175, category: "main", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop", weight: 400, time_to_cook: 40 },
];