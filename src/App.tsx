import { Separator } from "./components/ui/separator";
import { Header } from "./components/header";
import { Products } from "./components/products";
import { Button } from "./components/ui/button";
import { Phone, Mail, Instagram } from "lucide-react";
import { Reveal } from "./components/reveal";

export function App() {
  return (
    <div className="scroll-smooth tracking-wider max-w-6xl m-auto bg-sky-700/30">
      <header className="fixed top-0 m-auto text-center w-full lg:w-[1152px]  z-50">
        <Header />
      </header>
      <Reveal>
        <section
          className="flex lg:flex-row flex-col items-center space-y-6 py-24 mx-12 mt-24 lg:h-screen"
          id="Sobre"
        >
          <div className="flex-1 items-center">
            <img
              src="https://i.imgur.com/cPbtH0v.png?1"
              alt="Logo da loja blessed"
              className="rounded-[20%] w-[200px] md:w-[270px] m-auto flex hover:shadow-sky-600 shadow-[10px_-2px_10px_0px] shadow-zinc-800 transition-all animate-in fade-in duration-1000"
            />
          </div>
          <div className="flex-1 text-left space-y-3 ">
            <h1 className="font-bold text-2xl text-black transition-all animate-in fade-in duration-1000">
              Sobre Nós
            </h1>
            <p className="font-medium transition-transform translate-x-3 duration-1000 fade-in animate-in">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              harum tenetur nesciunt cupiditate porro sed assumenda iste odio,
              soluta quas odit unde, voluptas rerum sapiente alias reprehenderit
              commodi fugiat impedit?
            </p>
          </div>
        </section>
      </Reveal>
      <Separator id="Produtos" className="mb-12" />
      <Reveal>
        <section className="space-y-6 py-24 mx-12 lg:h-screen">
          <Products />
        </section>
      </Reveal>
      <Separator id="Contatos" />
      <Reveal>
        <footer className="lg:h-screen flex">
          <div className="flex flex-col m-auto items-center py-24 mx-12 space-y-8">
            <div className="text-left space-y-8">
              <h1 className="font-bold text-2xl text-black">
                Entre em contato com a gente!
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                quae incidunt at, ducimus ad veritatis, culpa vitae laborum
                reiciendis, corporis praesentium? Laudantium, sint debitis id
                quos ab aperiam hic corporis.
              </p>
              <Button
                className="flex items-center p-8 gap-2 hover:text-green-500 rounded-lg"
                variant="default"
              >
                <Phone />
                <a
                  href="https://api.whatsapp.com/send?phone=5592985596497"
                  target="_blank"
                  className="text-lg"
                >
                  Entrar em contato
                </a>
              </Button>
            </div>
            <div>
              <ul className="flex">
                <li>
                  <Button
                    variant="link"
                    className="hover:text-red-600 transition-colors flex items-center text-slate-100 gap-2"
                  >
                    <Mail />
                    <a href="maito:@" target="_blank" className="text-lg">
                      Blessedfm
                    </a>
                  </Button>
                </li>
                <li className="flex gap-2 items-center ">
                  <Button
                    variant="link"
                    className="hover:text-pink-500 transition-colors flex items-center text-slate-100 gap-2"
                  >
                    <Instagram />
                    <a
                      href="https://www.instagram.com/blessedfm22/"
                      target="_blank"
                      className="text-lg"
                    >
                      Blessedfm
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </Reveal>
    </div>
  );
}
