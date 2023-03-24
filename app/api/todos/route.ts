import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export async function POST(request: Request) {
  const { title } = await request.json();

  console.log(title);

  const supabase = createRouteHandlerSupabaseClient({
    headers,
    cookies,
  });

  const { data, error } = await supabase.from("todos").insert({ title });

  if (error) {
    console.log(error);
  }

  if (data) {
    return NextResponse.json(data);
  }
}

export async function PUT(request: Request) {
  const { id } = await request.json();

  const supabase = createRouteHandlerSupabaseClient({
    headers,
    cookies,
  });

  const { data, error } = await supabase
    .from("todos")
    .update({ is_complete: true })
    .match({ id });

  if (error) {
    console.log(error);
  }

  return NextResponse.json(data);
}
