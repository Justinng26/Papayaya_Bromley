import { starters } from "../../data/data";

export async function GET() {
  return Response.json(starters);
}
