import axios from 'axios'

const getValueCrypto = async (crypto) => {
  try {
    if (!crypto) {
      return ''
    } else {
      const url = `https://criptoya.com/api/bitsoalpha/${crypto}/cop`
      const response = await axios.get(url)
      const { data } = response
      return data
    }
  } catch (error) {
    console.log(error.message)
    return ''
  }
}

export { getValueCrypto }
