import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/">
      <a>Home </a>
    </Link>

    <Link href="/about">
      <a>About </a>
    </Link>

    <p>Hello Next.js</p>
  </div>
);

export default Index;
