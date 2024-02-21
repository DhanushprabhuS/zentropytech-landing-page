import Link from "next/link";
import clsx from "clsx";
import Image from 'next/image';

export default function NotFound() {
  return (
    <div
    className={clsx(
      "dark",
      "main-wrapper",
      "min-h-[100dvh]",
      "flex flex-col",
      "bg-slate-900",
      "scroll-smooth",
    )}
  >
    <div
        className={clsx(
          "mt-12",
          "flex flex-col",
          "items-center",
          'justify-center',
          "space-y-4",
          "mx-12",
        )}
      >
       

            <Image width={500} height={500} src={'/404.jpg'} alt="404 Error!" className="rounded-xl"/>

            <Link href="/" className="text-lg text-white font-bold px-6 py-4 bg-refine-red rounded-xl bg-landing-noise">
              Go Home
            </Link>

      </div>
  </div>
  );
}

