"use client";

import { useSupabase } from "./supabase-context";

export function Login() {
  const { supabase } = useSupabase();

  const signUp = () => {
    supabase.auth.signUp({
      email: "kidkhayo@gmail.com",
      password: "sup3rs3cur3",
    });
  };

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: "kidkhayo@gmail.com",
      password: "sup3rs3cur3",
    });
    console.log("Signed in!");
  };

  const signOut = () => {
    supabase.auth.signOut();
    console.log("Signed out!");
  };

  return (
    <div className="justify-end flex text-white gap-4 mb-6">
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
