import { Separator } from './components/ui/separator';
import { Header } from './components/header';
import { Products } from './components/products';
import { Button } from './components/ui/button';
import { Phone, Mail, Instagram } from 'lucide-react'

export function App() {
  return (
    <div className='scroll-smooth tracking-wider max-w-6xl m-auto'>
      <header className='fixed top-0 m-auto text-center w-full md:w-[1150px] z-50'>
        <Header/>
      </header>
        <section className='flex lg:flex-row flex-col items-center space-y-6 py-24 mx-12 mt-24 h-screen' id='Sobre'>
          <div className='flex-1 items-center'>
            <img src="src\assets\Blessed_logo.jpeg" alt="Logo blessed" className='rounded-[5%] w-[300px] shadow-lg'/>
          </div>
          <div className='flex-1 text-left space-y-3'>
            <h1 className='font-bold text-2xl text-black'>Sobre Nós</h1>
            <p className='font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi harum tenetur nesciunt cupiditate porro sed assumenda iste odio, soluta quas odit unde, voluptas rerum sapiente alias reprehenderit commodi fugiat impedit?</p>
          </div>
        </section>
        <Separator id='Produtos'/>

        <section className='space-y-6 py-24 mx-12'>
          <Products/>
        </section>
      <Separator/>

        <footer id='Contatos'>
          <div className='flex flex-col m-auto items-center py-24 mx-12 space-y-8'>
          <div className='text-left space-y-8'>
            <h1 className='font-bold text-2xl text-black'>Entre em contato com a gente!</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae incidunt at, ducimus ad veritatis, culpa vitae laborum reiciendis, corporis praesentium? Laudantium, sint debitis id quos ab aperiam hic corporis.</p>
            <Button className='flex items-center p-8 gap-2 hover:text-green-500 rounded-lg' variant="default">
            <Phone/>
              <a href="https://web.whatsapp.com/send?phone=559298559-6497" target='_blank' className='text-lg'>Entrar em contato</a>
            </Button>
          </div>
          <div>
            <ul className='flex'>
              <li>
                <Button variant="link" className='hover:text-red-600 transition-colors flex items-center text-slate-100 gap-2'>
                  <Mail/>
                  <a href="maito:@" target='_blank' className='text-lg'>Blessedfm</a>
                </Button>
              </li>
              <li className='flex gap-2 items-center '>
                <Button variant="link" className='hover:text-pink-500 transition-colors flex items-center text-slate-100 gap-2'>
                   <Instagram/>
                  <a href="https://www.instagram.com/blessedfm22/" target='_blank' className='text-lg'>Blessedfm</a>
                </Button>
              </li>
            </ul>
          </div>
          </div>
        </footer>
    </div>
  )
}