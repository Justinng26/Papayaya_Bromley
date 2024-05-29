import { useRouter, usePathname } from "next/navigation";
import "../styles/heroBtn.css";
import { handleScrollTo } from "../../../lib/utils";

export default function HeroBtn({
  name,
  target,
}: {
  name: string;
  target: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <a
      onClick={() => handleScrollTo(target, pathname, router)}
      className={`btn-hero animated fadeInUp scrollto ${name.includes("book") ? "ms-4" : undefined}`}
    >
      {name}
    </a>
  );
}
