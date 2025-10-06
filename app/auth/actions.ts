"use server";

import { auth } from "@/lib/auth";
import { makeError } from "@/lib/utils";
import { LoginSchemaValues } from "@/lib/zod/login.schema";
import { RegisterSchemaValues } from "@/lib/zod/register.schema";
import { AppResponse } from "@/types/AppResponse";
import { redirect } from "next/navigation";

export async function signUp(form: RegisterSchemaValues): Promise<void> {
  try {
    await auth.api.signUpEmail({ body: form });
  } catch (error) {
    throw error;
  }

  redirect("/");
}

export async function signIn(form: LoginSchemaValues): Promise<AppResponse> {
  try {
    await auth.api.signInUsername({ body: form });
  } catch (error) {
    return makeError({ code: 401, message: "Wrong credentials" });
  }

  redirect("/");
}
