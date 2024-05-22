import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <p>My home</p>
      <Link href="/sign/up">to Singup page</Link>
    </div>
  );
}
