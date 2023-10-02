import React from 'react'
import { convertValues, calculateLostProfits, totalDepartureAmount } from '../logic/loigc'
import { FaArrowsAltH, FaArrowUp, FaArrowDown } from 'react-icons/fa'

export const BoxResult = ({ calculatorValues }) => {
  const profitOrLoss = calculateLostProfits(calculatorValues)
  const totalInvestmentAmount = convertValues(calculatorValues)
  const totalOutputAmount = totalDepartureAmount(calculatorValues)
  const isProfit = profitOrLoss >= 0
  const profitStyle = isProfit ? { '': '' } : { '--amount-up': '#ff4d4d', '--amount-background-up': '#ff353533' }

  const valuePercentage = (profitOrLoss / totalInvestmentAmount * 100).toFixed(2)
  const percentage = valuePercentage !== 'NaN' ? Math.abs(valuePercentage) : 0

  return (
    <div className='boxResult'>
      <div className='boxField'>
        <h1>Resultado de la inversion</h1>
        <div style={profitStyle}>
          <h3>Beneficio/Perdida</h3>
          <span> {isProfit ? <FaArrowUp className='iconResult' /> : <FaArrowDown className='iconResult' />} COP ${Math.abs(profitOrLoss).toLocaleString('co-CO', { minimumFractionDigits: 2 })} ({percentage}%) </span>
        </div>
        <div className='boxAmount'>
          <div>
            <h3>Importe total de la inversion</h3>
            <span> <FaArrowsAltH className='iconResult' /> COP ${totalInvestmentAmount.toLocaleString('co-CO', { minimumFractionDigits: 2 })}</span>
          </div>
          <div style={profitStyle}>
            <h3>importe total de salida</h3>
            <span> {isProfit ? <FaArrowUp className='iconResult' /> : <FaArrowDown className='iconResult' />} COP ${totalOutputAmount.toLocaleString('co-CO', { minimumFractionDigits: 2 })} </span>
          </div>
        </div>
      </div>
    </div>
  )
}
