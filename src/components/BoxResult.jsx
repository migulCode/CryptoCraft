import React from 'react'
import { convertValues, calculateLostProfits, totalDepartureAmount } from '../logic/loigc'

export const BoxResult = ({ calculatorValues }) => {
  const profitOrLoss = calculateLostProfits(calculatorValues)
  const totalInvestmentAmount = convertValues(calculatorValues)
  const totalOutputAmount = totalDepartureAmount(calculatorValues)

  return (
    <div className='boxResult'>
      <div className='boxField'>
        <h1>Resultado de la inversion</h1>
        <div className=''>
          <h3>Beneficio/Perdida</h3>
          <span>↑COP ${profitOrLoss} (0%) </span>
        </div>
        <div className='boxAmount'>
          <div>
            <h3>Importe total de la inversion</h3>
            <span>↑COP ${totalInvestmentAmount}</span>
          </div>
          <div>
            <h3>importe total de salida</h3>
            <span>↑COP ${totalOutputAmount} </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Pendiente a cambio
