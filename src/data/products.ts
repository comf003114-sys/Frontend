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
  { id: 1, name: "Хинкали", price: 85, category: "main", image: "https://www.russianfood.com/dycontent/images_upl/601/big_600809.jpg", weight: 300, time_to_cook: 20 },
  { id: 2, name: "Хачапури по-аджарски", price: 120, category: "main", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop", weight: 350, time_to_cook: 25 },
  { id: 3, name: "Шашлык из свинины", price: 180, category: "grill", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop", weight: 400, time_to_cook: 35 },
  { id: 4, name: "Долма", price: 95, category: "main", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop", weight: 280, time_to_cook: 30 },
  { id: 5, name: "Чахохбили", price: 145, category: "main", image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=200&fit=crop", weight: 350, time_to_cook: 40 },
  { id: 6, name: "Пхали", price: 75, category: "appetizer", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop", weight: 200, time_to_cook: 15 },
  { id: 7, name: "Мцвади", price: 200, category: "grill", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop", weight: 450, time_to_cook: 40 },
  { id: 8, name: "Аджапсандали", price: 90, category: "appetizer", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=200&fit=crop", weight: 250, time_to_cook: 20 },
];