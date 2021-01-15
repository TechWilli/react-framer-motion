import React, { useState, useEffect } from 'react'
import './App.css'
import { motion } from 'framer-motion'

const App = () => {

  const [show, setShow] = useState(false)
  const [showName, setShowName] = useState(false)
  const [showLine, setShowLine] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 600)
    setTimeout(() => setShowName(true), 1200)
    setTimeout(() => setShowLine(true), 2000)

  }, [])

  const spanVariants = {
    visible: {
      opacity: 1,
      x: -73,
      transition: { type: 'tween', duration: .8 }
    },
    hidden: {
      opacity: 0,
      x: -200
    }
  }

  const nameVariants = {
    visible: {
      opacity: 1,
      x: 110,
      y: -50,
      transition: {
        type: 'tween',
        duration: .8,
      },
    },
    hidden: {
      opacity: 0,
      x: 110,
      y: -120,
    }
  }

  const lineVariants = {
    visible: {
      opacity: 1,
      x: 110,
      width: 125,
      y: -50,
      transition: {
        type: 'tween',
        duration: .5,
      },
    },
    hidden: {
      opacity: 0,
      x: 110,
      width: 0,
      y: -50
    }
  }

  return (
    <div className="App">
      <motion.span
        initial={false}
        animate={show ? 'visible' : 'hidden'}
        variants={spanVariants}
        style={styles.span}
      >
        Hello, this is
      </motion.span>
      <motion.span
        initial={nameVariants.hidden}
        animate={showName ? 'visible' : 'hidden'}
        variants={nameVariants}
        style={{ ...styles.span, color: '#7D6394' }}
      >
        William
      </motion.span>
      <motion.hr
        animate={showLine ? 'visible' : 'hidden'}
        initial={lineVariants.hidden}
        variants={lineVariants}
        style={styles.hr}
      />
    </div>
  )
}

export default App

const styles = {
  span: {
    fontSize: '2.5rem'
  },
  hr: {
    height: 3,
    width: 125,
    backgroundColor: '#7D6394'
  }
}
