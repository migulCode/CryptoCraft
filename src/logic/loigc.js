function convertValues ({ inversion, comisionCompra }) {
  if (!inversion) return 0
  const valueToNumber = inversion - (comisionCompra * inversion / 100)
  const newValuer = parseFloat(valueToNumber).toLocaleString('co-CO', { minimumFractionDigits: 2 })
  return newValuer
}

function calculateLostProfits (value) {
  for (const key in value) {
    if (value[key] !== '') {
      value[key] = parseFloat(value[key])
    }
  }

  const { precioCompra, inversion, precioVenta, comisionCompra = 0, comisionVenta = 0 } = value

  if (inversion === '' || precioCompra === '') return 0

  const comisionValue = (comisionVenta * inversion / 100.00) + (comisionCompra * inversion / 100.00)

  const totalCoins = (inversion - (comisionCompra * inversion / 100)) / precioCompra
  const totalPaid = totalCoins * precioCompra
  const totalSale = totalCoins * precioVenta

  return (totalSale - totalPaid - comisionValue).toLocaleString('co-CO', { minimumFractionDigits: 2 })
}

function totalDepartureAmount (value) {
  for (const key in value) {
    if (value[key] !== '') {
      value[key] = parseFloat(value[key])
    }
  }

  console.log()

  const { precioCompra, inversion, precioVenta, comisionCompra = 0, comisionVenta = 0 } = value

  if (inversion === '' || precioCompra === '') return 0

  const comisionValue = (comisionVenta * inversion / 100.00) + (comisionCompra * inversion / 100.00)
  const newValueInversion = inversion - (comisionCompra * inversion / 100.00)

  const totalCoins = (inversion - (comisionCompra * inversion / 100)) / precioCompra
  const totalPaid = totalCoins * precioCompra
  const totalSale = totalCoins * precioVenta

  return (((totalSale - totalPaid) - comisionValue) + newValueInversion).toLocaleString('co-CO', { minimumFractionDigits: 2 })
}

export { convertValues, calculateLostProfits, totalDepartureAmount }
