import Image from "next/image";
import Link from "next/link";

export default function BrandButton({ brand }) {
  return (
    <Link
      href={`/search?brand=${brand.name.toLowerCase()}`}
      className="flex flex-col items-center gap-2 min-w-[70px]"
    >
      <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
        <Image
          src={brand.logo || "/placeholder.svg"}
          alt={brand.name}
          width={30}
          height={30}
        />
      </div>
      <span className="text-sm">{brand.name}</span>
    </Link>
  );
}
