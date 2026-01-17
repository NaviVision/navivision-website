import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      <Image
        src="/navivision-logo.png"
        alt={`${siteConfig.name} logo`}
        width={151}
        height={36}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}
