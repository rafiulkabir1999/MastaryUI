"use client";
import React, { useRef } from "react";
import profile from "@public/image/profile.jpg";
import Image from "next/image";
import Form1 from "@/components/forms/Form1";
import Form2 from "@/components/forms/Form2";
function page() {
  return (
    <div className="container">
      <div className="rounded w-full">
        <div className="flex text-base p-3 text-white font-bold bg-sky-300 gap-2">
          <p>Edit</p>
          <p>&gt;</p>
          <p>Profile</p>
        </div>

        <div className="grid grid-cols-1 md:gap-5 md:grid-cols-2">
          <Form1 />
          <Form2 />
        </div>
      </div>
    </div>
  );
}

export default page;
