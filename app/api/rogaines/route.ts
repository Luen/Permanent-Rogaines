import { getSortedRogainesData } from "@/lib/rogaines"

export async function GET() {
  return new Response(JSON.stringify(getSortedRogainesData()), {
    headers: { "content-type": "application/json" },
  })
}
