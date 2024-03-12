import { menu } from "../../../data/data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const food = menu.find(
    (item: { id: number | string }) => item.id.toString() === params.id
  );
  return Response.json(food);
}
