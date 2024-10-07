"use client"

import { useSession } from "next-auth/react";

export default function Contact() {
    const session = useSession();
    return (
      <div>
        This is a Contact page
        {JSON.stringify(session)}
      </div>
    );
  }