import { useRouter, usePathname } from "next/navigation";
import "../styles/heroBtn.css";

export default function HeroBtn({
  name,
  target,
}: {
  name: string;
  target: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollTo = (section: string) => {
    const header: HTMLElement = document.querySelector("#header")!;
    const offset = header.offsetHeight;
    const targetEl: HTMLElement = document.querySelector("#" + section)!;
    if (pathname === "/") {
      const elementPosition = targetEl.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    } else {
      router.push(`/#${section}`);
    }
  };

  return (
    <a
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollto ${name.includes("book") ? "ms-4" : undefined}`}
    >
      {name}
    </a>
  );
}
