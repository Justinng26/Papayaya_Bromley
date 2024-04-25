import "../styles/menuItem.css";
// import Image from "next/image";
import Link from "next/link";

export default function MenuItem({
  item,
}: {
  item: {
    id: string | number;
    name: string;
    preview?: string;
    price: number | string;
  };
}) {
  return (
    <div className="col-lg-6 menu-item">
      <p>{item.id}.</p>
      <div className="menu-content">
        <Link href={`/menu/${item.id}`}>{item.name}</Link>
        <span>£{item.price}</span>
      </div>
    </div>
  );
}
