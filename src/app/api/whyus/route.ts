import { whyUs } from "../../data/data";

export async function GET() {
  return Response.json(whyUs);
}
