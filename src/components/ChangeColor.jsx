import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

import '../styles/components.css'
import { changeColor } from '../styles/motion'

const ChangeColor = () => {
  const [colorMode, setColorMode] = useState(window.localStorage.getItem('colorMode'))

  const handlerClick = () => {
    if (colorMode) {
      setColorMode('')
    } else {
      setColorMode('--dark-theme-background-color: #2B3F4A; --dark-theme-background-secundary: #243239; --secondary-text-color: #CBCBCB')
    }
  }

  useEffect(() => {
    document.body.style = colorMode
    window.localStorage.setItem('colorMode', colorMode)

    return () => {
      document.body.style = null
    }
  }, [colorMode])

  return (
    <motion.div onClick={handlerClick} className='containerMode' animate={{ background: colorMode ? '#0F0F0F' : '#2B3F4A' }}>
      {!colorMode
        ? (
          <motion.div
            key='sun'
            variants={changeColor.sun}
            style={changeColor.sun.style}
            initial='initial'
            animate='animate'
            transition={changeColor.sun.transition}
          >
            <FaSun className='icon sun' />
          </motion.div>
          )
        : (
          <motion.div
            key='moon'
            variants={changeColor.moon}
            style={changeColor.moon.style}
            initial='initial'
            animate='animate'
            transition={changeColor.moon.transition}
          >
            <FaMoon className='icon moon' />
          </motion.div>
          )}

    </motion.div>
  )
}

export default ChangeColor
