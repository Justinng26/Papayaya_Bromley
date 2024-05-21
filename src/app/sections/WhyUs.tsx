import { BASE_API_URL } from "../utils/constants";
import SectionTitle from "../components/SectionTitle";
import WhyUsCard from "../components/WhyUsCard";
import "../styles/whyUs.css";

async function getWhyUsData() {
  const res = await fetch(`${BASE_API_URL}/api/whyus`);
  return res.json();
}

export default async function WhyUs() {
  const items: [] = await getWhyUsData();
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="Why Us" subtitle="Why choose Papayaya" />
        <div className="row">
          {items &&
            items.length > 0 &&
            items.map(
              (item: { id: number; title: string; content: string }) => (
                <WhyUsCard key={item.id} item={item} />
              )
            )}
        </div>
      </div>
    </section>
  );
}
