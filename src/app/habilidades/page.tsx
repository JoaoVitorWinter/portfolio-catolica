import { FaJava } from "react-icons/fa"
import { SiAmazonwebservices, SiAnsible, SiC, SiGo, SiKubernetes, SiNextdotjs, SiRust, SiSvelte, SiTerraform } from "react-icons/si"

const page = () => {
  return (
    <main className="w-full my-10">
        <h2 className="text-2xl font-semibold text-blue-900 text-center">MINHAS HABILIDADES</h2>
        <div>
            <section className="mt-8">
                <p className="text-center">ATUAIS</p>
                <div className="flex gap-4 m-auto w-fit mt-4 flex-wrap justify-center">
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <SiNextdotjs size={64}/>
                        <p>Next.js</p>
                    </article>
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <FaJava size={64}/>
                        <p>Java</p>
                    </article>
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <SiTerraform size={64}/>
                        <p>Terraform</p>
                    </article>
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <SiAnsible size={64}/>
                        <p>Ansible</p>
                    </article>
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <SiC size={64}/>
                        <p>C</p>
                    </article>
                </div>
            </section>
            <section className="mt-8">
                <p className="text-center">DESEJADAS</p>
                <div className="flex gap-4 m-auto w-fit mt-4 flex-wrap justify-center">
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <SiSvelte size={64}/>
                        <p>Svelte</p>
                    </article>
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <SiAmazonwebservices size={64}/>
                        <p>AWS</p>
                    </article>
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <SiRust size={64}/>
                        <p>Rust</p>
                    </article>
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <SiGo size={64}/>
                        <p>Golang</p>
                    </article>
                    <article className="drop-shadow-sm bg-white w-fit p-4 flex flex-col gap-2 items-center justify-center sm:hover:mt-[-1rem] transition-all">
                        <SiKubernetes size={64}/>
                        <p>Kubernetes</p>
                    </article>
                </div>
            </section>
        </div>
    </main>
)
}

export default page