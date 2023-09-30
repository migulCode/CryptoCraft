import { AiOutlineSearch } from 'react-icons/ai'

export const BoxCalculator = ({ putValues, getValues, putCrypto, getCrypto }) => {
  return (
    <div className='boxCalculator'>

      <div className='containerField'>
        <label htmlFor='Moneda'>Moneda</label>
        <div className='boxInput'>
          <select id='Moneda' value={getCrypto} className='boxInput select' onChange={(e) => putCrypto(e.target.value)}>
            <option value='' className='option'>Moneda</option>
            <option value='BTC' className='option'>BTC</option>
            <option value='XRP' className='option'>XRP</option>
          </select>
          <AiOutlineSearch className='iconField' />
        </div>
      </div>

      <div className='containerField'>
        <label htmlFor='Precio de compra'>Precio de compra</label>
        <div className='boxInput'>
          <div className='currency'><span>COP$</span></div>
          <input id='Precio de compra' type='number' placeholder='0' min={0} value={getValues.precioCompra} onChange={ev => putValues(prevState => ({ ...prevState, precioCompra: ev.target.value }))} />
        </div>
      </div>

      <div className='containerField'>
        <label htmlFor='Inversion'>Inversion</label>
        <div className='boxInput'>
          <div className='currency'><span>COP$</span></div>
          <input id='Inversion' type='number' placeholder='0' min={0} value={getValues.inversion} onChange={ev => putValues(prevState => ({ ...prevState, inversion: ev.target.value }))} />
        </div>
      </div>

      <div className='containerField'>
        <label htmlFor='Precio de venta'>Precio de venta</label>
        <div className='boxInput'>
          <div className='currency'><span>COP$</span></div>
          <input id='Precio de venta' type='number' placeholder='0' min={0} value={getValues.precioVenta} onChange={ev => putValues(prevState => ({ ...prevState, precioVenta: ev.target.value }))} />
        </div>
      </div>

      <div className='containerField'>
        <label htmlFor='Comision de compra'>Comision de compra</label>
        <div className='boxInput'>
          <div className='currency'><span>COP$</span></div>
          <input id='Comision de compra' type='number' placeholder='0' min={0} value={getValues.comisionCompra} onChange={ev => putValues(prevState => ({ ...prevState, comisionCompra: ev.target.value }))} />
        </div>
      </div>

      <div className='containerField'>
        <label htmlFor='Comision de venta'>Comision de venta</label>
        <div className='boxInput'>
          <div className='currency'><span>COP$</span></div>
          <input id='Comision de venta' type='number' placeholder='0' min={0} value={getValues.comisionVenta} onChange={ev => putValues(prevState => ({ ...prevState, comisionVenta: ev.target.value }))} />
        </div>
      </div>

    </div>
  )
}
