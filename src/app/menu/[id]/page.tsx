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
              {food.preview ? (
                <Image
                  src={food.preview}
                  alt="food item"
                  height={500}
                  width={500}
                  className="img-fluid"
                />
              ) : (
                <p>Image coming soon</p>
              )}
            </div>

            <div className="col-lg">
              <h2 className="mt-3">{food.name}</h2>

              {food.options && food.options.length > 0 && (
                <div>
                  <h4 className="mt-2">
                    <i>Options:</i>
                  </h4>
                  <ul>
                    {food.options &&
                      food.options.map(
                        (
                          option: { name: string; price: number | string },
                          index: number
                        ) => (
                          <li key={index}>
                            {option.name} - £{option.price}
                          </li>
                        )
                      )}
                  </ul>
                </div>
              )}

              {food.allergy && (
                <h4>
                  <i>Allergy Information: {food.allergy}</i>
                </h4>
              )}

              {food.quantity && (
                <h4>
                  <i>Quantity: {food.quantity}</i>
                </h4>
              )}

              {food.description && (
                <p className="m5-5">Description: {food.description}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
