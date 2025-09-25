import { useState } from 'react'
import './App.css'
import Suede from './assets/SuedeXL.avif'
import P180 from './assets/180.avif'
import MB4 from './assets/MB.04.avif'
import instagram from './assets/instagram.svg'
import discord from './assets/discord.svg'
import x from './assets/x.svg'
import youtube from './assets/youtube.svg'
import slider1 from './assets/slider1.jpg'
import slider2 from './assets/slider2.png'
import slider3 from './assets/slider3.png'
import slider4 from './assets/slider4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
          </SwiperSlide>
    </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Suede} alt="" className="img-card" />
              <h2 className="titulo-card">Tênis Suede XL</h2>
              <p className="desc">Esta nova abordagem ao clássico Suede inspira-se na herança da PUMA no breakdance e na sua influência no streetwear moderno.</p>
              <p className="preco">R$ 599,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={P180} alt="" className="img-card" />
              <h2 className="titulo-card">Tênis PUMA-180</h2>
              <p className="desc">O tênis PUMA-180 é uma silhueta ligada à cultura dos tênis de skate do final dos anos 90 e 2000</p>
              <p className="preco">R$ 699,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={MB4} alt="" className="img-card" />
              <h2 className="titulo-card">Tênis de Basquete MB.04 LM PUMA</h2>
              <p className="desc">Entre no universo Melo com o novo MB.04! Este tênis de basquete inspirado nas Tartarugas Ninja Mutantes </p>
              <p className="preco">R$ 1099,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

        <iframe src="https://www.youtube.com/embed/p7cDN1ofIw0?autoplay=1&mute=1&controls=0&loop=1&playlist=p7cDN1ofIw0&modestbranding=1&showinfo=0” frameborder=0" allow="autoplay; fullscreen"></iframe>


        </section>

        <footer>

          <img src="" alt=""className="logo-footer"/>

          <div className="social-icons">
            <div className="icon">
              <img src={instagram} alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src={discord} alt="" id="discord"/>
            </div>
            <div className="icon">
              <img src={x} alt="" id="x"/>
            </div>
            <div className="icon">
              <img src={youtube} alt="" id="youtube"/>
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
