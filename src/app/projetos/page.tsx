import Image from "next/image"
import { LuConstruction } from "react-icons/lu"

const page = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 flex-auto gap-2 p-4 w-full">
        <article className="flex flex-col gap-2 justify-center items-center p-2 md:row-span-2 text-center border-4 border-red-300 border-dashed">
            <h3 className="text-2xl">PROJETO FINAL - CENTRO WEG</h3>
            <p className="text-lg md:w-3/4">Construção de uma aplicação WEB completa de um pet shop e clínica veterinária. Feito durante os anos de 2023 e 2024</p>
            <Image className="drop-shadow-lg" src="/projeto-petshop.png" alt="" width={500} height={0} />
            <Image className="drop-shadow-lg" src="/projeto-clinica.png" alt="" width={500} height={0} />
        </article>
        <article className="text-center flex flex-col gap-2 p-2 border-4 border-dashed border-green-300 md:col-start-2 md:row-start-1">
            <h3 className="text-2xl md:text-xl">PROJETO FINAL - CS50</h3>
            <p className="m-auto text-lg md:text-base">Projeto de escolha livre. Decidi criar um site para se comunicar com amigos em Flask.</p>
            <iframe className="w-full flex-auto" 
                src="https://www.youtube.com/embed/uXM7jneHkSA">
            </iframe>
        </article>
        <article className="flex justify-center items-center gap-2 p-2 border-4 border-dashed border-blue-300 md:col-start-2 md:row-start-2">
            <LuConstruction size={48} className="text-orange-400"/><p className="tracking-widest text-3xl">EM CONSTRUÇÃO</p><LuConstruction size={48} className="text-orange-400"/>
        </article>
    </main>
)
}

export default page