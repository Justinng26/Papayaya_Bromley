import "../styles/appBtn.css";

export default function AppBtn({ name }: { name: string }) {
  const handleScrollTo = (section: string) => {};
  return (
    <a
      className="app-btn  scrollto d-none d-lg-flex"
      onClick={() => handleScrollTo("book online")}
    >
      {name}
    </a>
  );
}
