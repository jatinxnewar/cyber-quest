import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Users, Gamepad2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import placeholder from "../../public/placeholder.svg";
import phish from "../../public/phish.jpg";
import pass from "../../public/pass.jpg";
import surfer from "../../public/surfer.jpg";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-400">
                    Discover Cybersecurity Through Play
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Embark on an exciting journey into the world of
                    cybersecurity. Learn concepts, understand attacks, and
                    become a digital defender through interactive games and fun
                    challenges.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={"/adventure"}>
                    <Button className="bg-blue-500 text-white hover:bg-blue-600">
                      Start Your Adventure
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                alt="Cybersecurity Illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="550"
                src={placeholder}
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-400">
              Why CyberQuest?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-100">
                  Interactive Learning
                </h3>
                <p className="text-gray-400">
                  Engage with hands-on simulations and games that make complex
                  concepts easy to grasp.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-100">
                  Community Driven
                </h3>
                <p className="text-gray-400">
                  Join a community of learners and experts to share knowledge
                  and experiences.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Gamepad2 className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-100">
                  Gamified Approach
                </h3>
                <p className="text-gray-400">
                  Turn learning into an adventure with our gamified
                  cybersecurity challenges.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-400">
              Featured Games
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Phishing Frenzy",
                  description:
                    "Spot the fake emails and websites in this fast-paced challenge.",
                  url: "/phish",
                  image: phish,
                },
                {
                  title: "Pass Quest",
                  description: "Level up your password game with us.",
                  url: "/pass",
                  image: pass,
                },
                {
                  title: "Safe Surfing Adventure",
                  description:
                    "Build and manage firewalls to protect against cyber attacks.",
                  url: "/surfer",
                  image: surfer,
                },
              ].map((game, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-700"
                >
                  <Image
                    alt={game.title}
                    className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                    height="240"
                    src={game.image}
                    width="360"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-2">
                      <Link href={game.url}>{game.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-300">{game.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-400">
                Ready to Start Your Cybersecurity Journey?
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Join thousands of learners who are discovering the exciting
                world of cybersecurity through CyberQuest.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-gray-800 text-gray-100 border-gray-700 focus:border-blue-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-blue-500 text-white hover:bg-blue-600"
                    type="submit"
                  >
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our{" "}
                  <Link
                    className="underline underline-offset-2 hover:text-blue-400"
                    href="#"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500">
          © 2024 CyberQuest. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:text-blue-400 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:text-blue-400 transition-colors"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
