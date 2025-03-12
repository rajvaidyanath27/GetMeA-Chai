"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [session, router]);

  if (!session) return null; // Prevent rendering while redirecting

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
