import React, { useEffect, useState } from 'react'
import { BoxCalculator } from './BoxCalculator'
import { BoxResult } from './boxResult'
import { getValueCrypto } from '../services/getValueCrypto'

export default function Calculator () {
  const [cryptoName, setCryptoName] = useState('')

  const [valueStore, setValueStore] = useState({
    precioCompra: '',
    inversion: '',
    precioVenta: '',
    comisionCompra: '',
    comisionVenta: ''
  })

  useEffect(() => {
    (async () => {
      const { bid = '' } = await getValueCrypto(cryptoName)
      setValueStore(prevState => ({ ...prevState, precioCompra: bid, precioVenta: bid }))
    })()
  }, [cryptoName])

  return (
    <div className='containerCalculator'>

      <BoxCalculator getValues={valueStore} getCrypto={cryptoName} putValues={setValueStore} putCrypto={setCryptoName} />

      <BoxResult calculatorValues={valueStore} />

    </div>

  )
}
