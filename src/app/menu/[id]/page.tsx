import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";

async function getFoodData(id: string) {
  const res = await fetch(`http://localhost:3000/api/menu/${id}`);
  return res.json();
}

export default async function MenuCard({ params }: { params: { id: string } }) {
  const id = params.id;

  const food = await getFoodData(id);

  return (
    <main id="main">
      <Breadcrumb page="Menu" />

      <section className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image
                src={food.preview}
                alt="food item"
                height={500}
                width={500}
                className="img-fluid"
              />
            </div>

            <div className="col-lg">
              <h2 className="mt-3">{food.name}</h2>
              <h4 className="mt-2">
                <i>{food.options}</i>
              </h4>

              <h4>
                <i>{food.allergy}</i>
              </h4>
              <p className="m5-5">{food.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
