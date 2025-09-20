import type { Metadata } from "next";
import ManganinLogin from "@/components/Auth/Signin";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return <ManganinLogin />;
}
