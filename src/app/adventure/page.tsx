import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import phish from "../../../public/phish.jpg";
import pass from "../../../public/pass.jpg";
import surfer from "../../../public/surfer.jpg";
import Navbar from "../Navbar";

import { ShieldCheck, Zap, Users, Gamepad2 } from "lucide-react";

function Adventure() {
  return (
    <>
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-1 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-400">
                  Phishing Frenzy{" "}
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Description goes here
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={"/phish"}>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 px-10">
                    Play
                  </Button>
                </Link>
              </div>
            </div>
            <Link href={"/phish"}>
              <Image
                alt="Cybersecurity Illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="650"
                src={phish}
                width="550"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-1 md:py-24 lg:py-32 xl:py-10 bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-1 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Link href={"/pass"}>
              <Image
                alt="Cybersecurity Illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="650"
                src={pass}
                width="550"
              />
            </Link>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-400">
                  Pass Quest{" "}
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Description goes here
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={"/pass"}>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 px-10">
                    Play
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-1 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-400">
                  Safe Surfing Adventure{" "}
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Description goes here
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={"/phish"}>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 px-10">
                    Play
                  </Button>
                </Link>
              </div>
            </div>
            <Link href={"/surfer"}>
              <Image
                alt="Cybersecurity Illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="650"
                src={surfer}
                width="550"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Adventure;
