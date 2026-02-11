"use server";

import { cookies } from "next/headers";

export const createAuthCookie = async (role = "admin") => {
  // Create a token that includes the user role
  const token = JSON.stringify({ role, timestamp: Date.now() });
  const cookieStore = await cookies();
  cookieStore.set("userAuth", token, {
    secure: true,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7 // 1 week
  });
};

export const deleteAuthCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("userAuth");
};

export const getUserRole = async () => {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("userAuth");
  
  if (!authCookie || !authCookie.value) {
    return null;
  }
  
  try {
    const userData = JSON.parse(authCookie.value);
    return userData.role;
  } catch (error) {
    // If the cookie is the old format (just a string token)
    return "admin"; // Default to admin for backwards compatibility
  }
};