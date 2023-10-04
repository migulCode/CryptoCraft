import logo from './assets/logo.png'
import bitcoin from './assets/bitcoin.png'
import xrp from './assets/xrp.png'

import { inView } from './styles/motion'
import './styles/app.css'

import { motion, useScroll, useSpring } from 'framer-motion'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoTelegram, BiLogoDiscordAlt, BiLogoLinkedin, BiLogoReddit, BiLogoYoutube, BiLogoTiktok } from 'react-icons/bi'
import { Link, Element, animateScroll as scroll } from 'react-scroll'

import { Links } from './components/Links'
import { CryptoEnableb } from './components/CryptoEnabled'
import { About } from './components/About'
import Calculator from './components/Calculator'
import ChangeColor from './components/ChangeColor.jsx'

import about from './utils/about.json'

function App () {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { bounce: 0.2 })

  return (
    <>
      <motion.div className='progressBar' style={{ scaleX }} />

      <header>
        <div className='containerHeader'>
          <div className='containerLogo'>
            <img src={logo} alt='logo ' />
            <h1>CryptoCraft</h1>
          </div>
          <nav className='containerNav'>
            <Link to='#' className='hoverLinkHeader' onClick={() => scroll.scrollToTop()} smooth> <h2> Calculadora </h2></Link>
            <Link smooth className='hoverLinkHeader' offset={-50} to='Acerca'><h2>Acerca</h2> </Link>
            <Link smooth className='hoverLinkHeader' offset={-50} to='Mapa'><h2>Mapa</h2></Link>
            <Link smooth className='hoverLinkHeader' to='Conectate'><h2>Conectate</h2> </Link>
            <ChangeColor />
          </nav>
        </div>
      </header>

      <main>
        <motion.div
          variants={inView}
          initial='initial'
          whileInView='whileInView'
          transition={inView.transition} className='mainIdeaContainer'
        >
          <div className='containerPresentation'>
            <h1>Calculadora de ganancias de Crypto</h1>
            <p>Calculadora de criptoinversión para facilitar tus cálculos de ganancias y pérdidas en cripto.</p>
            <div className='cryptoEnableb'>
              <CryptoEnableb src={bitcoin}>BTC</CryptoEnableb>
              <CryptoEnableb src={xrp}>XRP</CryptoEnableb>
            </div>
          </div>
          <Calculator />
        </motion.div>

        <Element name='Acerca'>
          <About array={about} />
        </Element>

        <Element name='Mapa' />
        <motion.div
          variants={inView}
          initial='initial'
          whileInView='whileInView'
          transition={inView.transition} className='containerMap'
        >
          <h1>¡Te encuentras aqui!</h1>
          <iframe className='map' src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8141022.450671207!2d-75.32449920681518!3d4.921489077771276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1696425662420!5m2!1sen!2sco' loading='lazy' referrerpolicy='no-referrer-when-downgrade' />
        </motion.div>
      </main>

      <Element name='Conectate' />
      <footer>
        <div className='containerFooter'>
          <h2>¡Mantente conectado!</h2>
          <div className='containerSocial'>
            <Links url='https://twitter.com/'> <BiLogoTwitter /> </Links>
            <Links url='https://www.instagram.com/'> <BiLogoInstagram /> </Links>
            <Links url='https://telegram.org/'> <BiLogoTelegram /> </Links>
            <Links url='https://discord.com/'> <BiLogoDiscordAlt /> </Links>
            <Links url='https://www.linkedin.com/'> <BiLogoLinkedin /> </Links>
            <Links url='https://www.facebook.com/'> <BiLogoFacebook /> </Links>
            <Links url='https://www.reddit.com/'> <BiLogoReddit /> </Links>
            <Links url='https://www.youtube.com/'> <BiLogoYoutube /> </Links>
            <Links url='https://www.tiktok.com/'> <BiLogoTiktok /> </Links>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
