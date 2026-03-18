import Link from "next/link";
import Image from "next/image";

export function AppStoreButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link
        href="/download"
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src="/assets/download.svg"
          alt="Download on the App Store"
          width={132}
          height={44}
        />
      </Link>

      <Link
        href="/download"
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src="/assets/play.png"
          alt="Get it on Google Play"
          width={132}   // official Google Play badge actual dimensions
          height={44}
          className="rounded-lg bg-black"
        />
      </Link>
    </div>
  );
}