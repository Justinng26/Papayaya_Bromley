"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "../styles/breadcrumb.css";

export default function Breadcrumb({ page }: { page: string }) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <a onClick={handleGoBack} style={{ cursor: "pointer" }}>
            <h2>{page}</h2>
          </a>

          <ol>
            <li>
              <Link href="/">
                <i className="bi bi-house-door-fill"></i>
              </Link>
            </li>

            <li onClick={handleGoBack} style={{ cursor: "pointer" }}>
              {page}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
