import '../styles/components.css'

export const CryptoEnableb = ({ src, children }) => (
  <div className='containCrypto'>
    <img src={src} alt={children} />
    {children}
  </div>
)
