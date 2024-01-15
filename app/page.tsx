import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return <div className="flex-1 bg-black w-full"></div>;
}
