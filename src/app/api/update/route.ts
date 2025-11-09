import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidatePath("/parndorf");
  revalidatePath("/salzburg");
  return NextResponse.json({ message: 'Parndorf and Salzburg hours updated' });
}
