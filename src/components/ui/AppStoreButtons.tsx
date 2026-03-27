import Link from "next/link";
import Image from "next/image";

// Define an interface for the props
interface AppStoreButtonsProps {
  align?: "left" | "center";
}

export function AppStoreButtons({ align = "center" }: AppStoreButtonsProps) {
  // Map the prop to Tailwind classes
  const alignmentClass = align === "left" ? "justify-start" : "justify-center";

  return (
    <div className={`flex flex-wrap items-center ${alignmentClass} gap-4`}>
      <Link
        href="/download"
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src="/assets/download.svg"
          alt="Download on the App Store"
          width={132}
          height={44}
          className="w-auto h-auto"
        />
      </Link>

      <Link
        href="/download"
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src="/assets/play.png"
          alt="Get it on Google Play"
          width={80}
          height={25}
          className="rounded-lg bg-black w-auto h-auto"
        />
      </Link>
    </div>
  );
}