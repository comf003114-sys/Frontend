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
  { id: 2, name: "Хачапури по-аджарски", price: 120, category: "main", image: "https://kulinarnia.ru/wp-content/uploads/2016/10/hachapuri-po-adzharski-re%D1%81ept-s-foto.jpg", weight: 350, time_to_cook: 25 },
  { id: 3, name: "Шашлык из свинины", price: 180, category: "grill", image: "https://www.gotovim.ru/pics/sbs/shashsvinlimonspez/rec.jpg", weight: 400, time_to_cook: 35 },
  { id: 4, name: "Долма", price: 95, category: "main", image: "https://vkusvill.ru/upload/resize/1395221/dolma_588x409x90_c.webp", weight: 280, time_to_cook: 30 },
  { id: 5, name: "Чахохбили", price: 145, category: "main", image: "https://myastoriya.com.ua/upload/resize_cache/iblock/04b/1000_800_1/gcmcy12ocbh1hnfrpcgrb7f5mbw5qqem.jpg", weight: 350, time_to_cook: 40 },
  { id: 6, name: "Пхали", price: 75, category: "appetizer", image: "https://vkusnoff.com/img/recepty/2506/big.webp", weight: 200, time_to_cook: 15 },
  { id: 7, name: "Мцвади", price: 200, category: "grill", image: "https://images.news.ru/2025/04/29/xE5MGHjlEtXg6A4lrjGE6Rq1jD41CiAWlUzBAEwL_780.jpg", weight: 450, time_to_cook: 40 },
  { id: 8, name: "Аджапсандали", price: 90, category: "appetizer", image: "https://zira.uz/wp-content/uploads/2019/08/adjabsandal-6-400x400.jpg", weight: 250, time_to_cook: 20 },
];
