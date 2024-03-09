import "../styles/menuItem.css";
// import Image from "next/image";
import Link from "next/link";

export default function MenuItem({
  item,
}: {
  item: {
    id: string | number;
    name: string;
    // preview: string;
    price: number | string;
  };
}) {
  return (
    <div className="col-lg-6 menu-item">
      {/* <Image src={item.preview} alt="food item" className="menu-img" /> */}
      <p>insert image</p>
      <div className="menu-content">
        <Link href={`/menu/${item.id}`}>{item.name}</Link>
        <span>£{item.price}</span>
      </div>
      {/* <div className="menu-ingredients">{item.quantity}</div> */}
    </div>
  );
}

// export default function MenuItem({
//   item,
// }: {
//   item: {
//     id: number;
//     name: string;
//     // preview: string;
//     price?: number;
//     // ingredients?: string;
//     allergy?: "Vegetarian | Vegan | Nut";
//     quantity?: number;
//     options?: Array<{
//       name: string;
//       price: number;
//     }>;
//     servingSize?: number;
//   };
