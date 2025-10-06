"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaValues } from "@/lib/zod/login.schema";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { signIn } from "@/app/auth/actions";
import { toast } from "sonner";
import { Toaster } from "./ui/sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useForm<LoginSchemaValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginSchemaValues) => {
    const { error } = await signIn(values);
    // this fucking shit is not red for some fucking reason
    if (error) {
      toast.error(error.code, {
        description: error.message,
        duration: 5000,
        action: {
          label: "Dismiss",
          onClick: () => toast.dismiss(),
        },
      });
    }
  };

  return (
    <Form {...form}>
      <Toaster position="top-center" />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="john.doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Password</FormLabel>
                <a
                  href="#"
                  className="text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
