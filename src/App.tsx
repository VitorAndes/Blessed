import { Separator } from './components/ui/separator';
import { Header } from './components/header';
import { Products } from './components/products';
import { Button } from './components/ui/button';
import { Phone, Mail, Instagram } from 'lucide-react'

export function App() {
  return (
    <div className='space-y-12 scroll-smooth tracking-wide'>
      <header>
        <Header/>
      </header>
      <Separator/>
      <div>
        <section className='flex lg:flex-row flex-col items-center justify-between space-y-6 py-48 mx-12'>
            <div className='flex-1 flex items-center flex-col mx-auto'>
                <img src="src\assets\Blessed_logo.jpeg" alt="" className='rounded-[15%] w-[600px]'/>
            </div>
            <div className='text-left space-y-2 flex-1'>
              <h1 className='font-bold text-2xl md:text-5xl'>Sobre Nós</h1>
              <p className='md:text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi harum tenetur nesciunt cupiditate porro sed assumenda iste odio, soluta quas odit unde, voluptas rerum sapiente alias reprehenderit commodi fugiat impedit?</p>
              <p className='md:text-3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi harum tenetur nesciunt cupiditate porro sed assumenda iste odio, soluta quas odit unde, voluptas rerum sapiente alias reprehenderit commodi fugiat impedit?</p>
            </div>
        </section>
      </div>
      <Separator/>
      <div>
        <section className='space-y-6 py-24 mx-12'>
          <Products/>
        </section>
      </div>
      <Separator/>
        <footer>
          <div className='flex flex-col m-auto items-center py-24 mx-12 space-y-8'>

          <div className='text-left space-y-8'>
            <h1 className='font-bold text-2xl md:text-5xl'>Entre em contato com a gente!</h1>
            <p className='text-lg md:text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae incidunt at, ducimus ad veritatis, culpa vitae laborum reiciendis, corporis praesentium? Laudantium, sint debitis id quos ab aperiam hic corporis.</p>
            <Button className='flex items-center p-6 gap-2 hover:text-green-500 h-24 rounded-lg'>
            <Phone/>
              <a href="tel:9298559-6497" target='_blank' className='text-lg'>Entrar em contato</a>
            </Button>
          </div>
          <div>
            <ul className='flex flex-row gap-7'>
              <li className='flex gap-2 items-center hover:text-red-600'>
                <Mail/>
                <a href="maito:@" target='_blank' className='text-lg md:text-3xl'>Blessedfm</a>
              </li>
              <li className='flex gap-2 items-center hover:text-pink-500'>
                <Instagram/>
                <a href="https://www.instagram.com/blessedfm22/" target='_blank' className='text-lg md:text-3xl'>Blessedfm</a>
              </li>
            </ul>
          </div>
          </div>
        </footer>

      
    </div>
  )
}