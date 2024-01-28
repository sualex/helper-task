import Image, { ImageProps } from "next/image";

export function Logo({ ...props }: Omit<ImageProps, "src" | "alt">) {
  return <Image alt="Logo" src="/logo.png" width={80} height={50} {...props} />;
}
