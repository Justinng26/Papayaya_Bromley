// import Link from "next/link";
import "../styles/menuCard.css";

interface MenuCardProps {
  name: string;
  url: string;
}

export default function MenuCard({ name, url }: MenuCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="menu-card"
    >
      <strong> {name} </strong>
    </a>
  );
}
