import React from 'react'
import { motion } from 'framer-motion'
import { inView } from '../styles/motion'

export const About = ({ array }) => {
  return (
    <motion.div
      variants={inView}
      initial='initial'
      whileInView='whileInView'
      transition={inView.transition} viewport={inView.viewport} className='containerAbout'
    >
      {array.map(({ title, description }, index) => {
        return (
          <div key={index} className='boxAbout'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        )
      })}
    </motion.div>
  )
}
