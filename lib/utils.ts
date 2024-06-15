import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleScrollTo = (
  section: string,
  pathname: string,
  router: AppRouterInstance
) => {
  if (typeof window !== "undefined") {
    // Check if running on client-side
    const header: HTMLElement | null = document.querySelector("#header");
    const offset = header ? header.offsetHeight : 0;
    const targetEl: HTMLElement | null = document.querySelector("#" + section);

    if (targetEl) {
      if (pathname === "/") {
        const elementPosition = targetEl.offsetTop;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      } else {
        router.push("/#" + section);
      }
    }
  }
};
