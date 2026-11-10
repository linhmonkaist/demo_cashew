"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LegacyBusinessRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/quy-trinh-san-xuat/");
  }, [router]);
  return null;
}
