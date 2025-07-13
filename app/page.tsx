"use client";
import { GetToKnowCarousel } from "@/components/shared/get-to-know-company";
import TopNavigation from "@/components/shared/navigation";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { cn } from "@/lib/utils";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="relative">
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600 text-sm">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Still in development
        </p>
      </StickyBanner>
      <TopNavigation />

      <div className="relative max-sm:flex-col flex flex-col min-h-[50rem] w-full gap-0 items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#0d9488] text-white overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
          )}
        />

        {/* Radial dots */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0" />

        {/* Faded radial mask */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className=" !pt-10 ">
          <h1 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 drop-shadow-md">
            Dorie's Catering Services
          </h1>
          <h1 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 drop-shadow-md">
            Portal
          </h1>
        </div>
      </div>
      <GetToKnowCarousel />

      <div className="bg-foreground h-[40rem] px-64 flex gap-10 flex-col py-10">
        <div>
          <h2 className=" text-primary-pink font-bold">
            Frequently Asked Questions
          </h2>
          <h1 className="text-background font-bold text-4xl w-[50rem]">
            Everything you need to know about our Company.
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
