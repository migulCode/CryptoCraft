export const inView = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.5 },
  viewport: { margin: '-100px 0px -100px 0px' }
}

export const changeColor = {
  sun: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  },
  moon: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  }
}

export const chatBot = {
  initial: { opacity: 0, y: '-100%' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '100%' },
  transition: { type: 'tween', duration: 1 }
}
