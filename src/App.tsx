import { Header } from './components/header';
import { Products } from './components/products';
import { Button } from './components/ui/button';
import { Separator } from "./components/ui/separator";
import { Phone, Mail, Instagram } from 'lucide-react'

export function App() {
  return (
    <div className='mx-auto w-full max-w-7xl  space-y-12 scroll-smooth'>
      <header>
        <Header/>
        <Separator/>
      </header>
      <main>
        <section className='flex md:flex-row flex-col items-center justify-between border-b border-slate-400 space-y-6 p-6 pb-20'>
            <div className='flex-1 flex items-center mx-auto flex-col'>
                <img src="src\assets\Blessed_logo.jpeg" alt="" className='size-72 rounded-[15%]'/>
            </div>
            <div className='text-left space-y-2 flex-1'>
              <h1 className='font-bold text-2xl'>Sobre Nós</h1>
              <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi harum tenetur nesciunt cupiditate porro sed assumenda iste odio, soluta quas odit unde, voluptas rerum sapiente alias reprehenderit commodi fugiat impedit?</p>
              <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi harum tenetur nesciunt cupiditate porro sed assumenda iste odio, soluta quas odit unde, voluptas rerum sapiente alias reprehenderit commodi fugiat impedit?</p>
            </div>
        </section>

        <section className='border-b border-slate-400 space-y-6 p-6 pb-20'>
          <Products/>
        </section>
      </main>
        <footer className='flex flex-col border-b p-6 pb-20 space-y-8'>
          <div className='text-left space-y-5'>
            <h1 className='font-bold text-2xl'>Entre em contato com a gente!</h1>
            <p className='md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae incidunt at, ducimus ad veritatis, culpa vitae laborum reiciendis, corporis praesentium? Laudantium, sint debitis id quos ab aperiam hic corporis.</p>
            <Button className='flex items-center justify-between p-6 gap-2 hover:text-green-500 '>
            <Phone/>
              <a href="tel:+928559-6497" target='_blank'>Entrar em contato</a>
            </Button>
          </div>
          <div>
            <ul className='flex flex-row gap-3 items-end '>
              <li className='flex gap-2 items-center hover:text-red-600'>
                <Mail/>
                <a href="maito:@" target='_blank'>Blessedfm</a>
              </li>
              <li className='flex gap-2 items-center hover:text-pink-500'>
                <Instagram/>
                <a href="https://www.instagram.com/blessedfm22/" target='_blank'>Blessedfm</a>
              </li>
            </ul>
          </div>
        </footer>
      
    </div>
  )
}