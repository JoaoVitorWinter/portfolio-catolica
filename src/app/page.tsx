import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 w-full flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 my-10">
      <div className="flex flex-col items-center sm:items-end p-2">
        <p className="font-bold text-3xl text-center sm:text-right">Portfólio de João Vitor Winter</p>
        <p className="mt-2 font-normal text-lg w-96 text-center sm:text-right">Estudante de Engenharia de Software na Católica e programador na WEG</p>
        <Link href="/sobre" className="mt-10 bg-blue-900 text-blue-100 p-8 py-2 hover:text-blue-900 hover:bg-blue-100 transition-all cursor-pointer">VER MAIS</Link>
      </div>
      <Image src="/home.png" width="600" height="600"alt="" />
    </main>
  );
}
