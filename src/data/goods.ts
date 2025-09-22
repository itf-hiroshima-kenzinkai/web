import type { GoodsItem } from '../models/goods';

export const goodsData: GoodsItem[] = [
  {
    id: 1,
    imageUrl: "/public/ex1.png" ,
    price: 22000,
    description: "カープ「空調服」(R) ファンバッテ...",
    linkUrl: "/public/ex1.png" 
  },
  {
    id: 2,
    imageUrl: "/images/goods-earrings.jpg",
    price: 2500,
    description: "Carpマヤイアリング(スリイリー/ヘ...",
    linkUrl: "https://example.com/item/2"
  },
  {
    id: 3,
    imageUrl: "/images/goods-tshirt-ver3.jpg",
    price: 3000,
    description: "ファビアンTシャツ ver.3",
    linkUrl: "https://example.com/item/3"
  },
  {
    id: 4,
    imageUrl: "/images/goods-tshirt-ver2.jpg",
    price: 3000,
    description: "ファビアンTシャツ ver.2",
    linkUrl: "https://example.com/item/4"
  },
  {
    id: 5,
    imageUrl: "/images/goods-bat.jpg",
    price: 750,
    description: "カンフーバット(ロゴ)",
    linkUrl: "https://example.com/item/5"
  }
];