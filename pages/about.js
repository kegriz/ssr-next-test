import Link from 'next/link'

export default () => (
  <div>
    <Link href="/">
      <a>Home </a>
    </Link>
    
    <Link href="/about">
      <a>About </a>
    </Link>

    <p>This is the about page</p>
  </div>
)