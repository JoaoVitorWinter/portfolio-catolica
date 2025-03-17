import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const page = () => {
  return (
    <main className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 w-full flex-auto">
        <form className="flex flex-col gap-2 items-center p-4 bg-blue-300">
            <h2 className="text-2xl self-start text-blue-900 font-medium tracking-widest">Contate-me por e-mail!</h2>
            <input className="bg-white w-full drop-shadow-lg p-1 pl-2" type="email" placeholder="Seu e-mail de contato"/>
            <input className="bg-white w-full drop-shadow-lg p-1 pl-2" type="text" placeholder="Assunto do e-mail"/>
            <textarea className="bg-white w-full flex-auto drop-shadow-lg p-1 pl-2" placeholder="Sua mensagem"/>
            <button type="submit" className="w-full bg-blue-900 text-blue-100 p-8 py-2 hover:text-blue-900 hover:bg-blue-100 transition-all cursor-pointer">ENVIAR</button>
        </form>
        <div className="relative grid grid-rows-3 h-fit w-72 self-center justify-self-center">
            <Link href="https://github.com/JoaoVitorWinter"><FaGithub size={96} className=""/></Link>
            <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-winter-21589a293"><FaLinkedin size={96} className="text-blue-500 justify-self-center"/></Link>
            <Link href="https://www.youtube.com/@chettus"><FaYoutube size={96} className="text-red-500 justify-self-end"/></Link>
        </div>
    </main>
  )
}

export default page