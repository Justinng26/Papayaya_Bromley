// import { menu } from "../../data/data";
import { menu } from "../../../../lib/menu";
export async function GET() {
  return Response.json(menu);
}
