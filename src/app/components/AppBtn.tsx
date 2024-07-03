import "../styles/appBtn.css";

export default function AppBtn({ name }: { name: string }) {
  return (
    <a href="https://papayayabromley.co.uk/order" className="app-btn d-lg-flex">
      {name}
    </a>
  );
}
