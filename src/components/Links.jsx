export const Links = ({ children, url }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer' className='hoverLinkFooter'>
      <h2>{children}</h2>
    </a>
  )
}
