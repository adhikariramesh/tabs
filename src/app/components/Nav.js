import Link from "next/link"
const Nav = () => {
  return (
    <nav className='mainNav'>
        <ul>
            <li><Link href="/tommey">tommey</Link></li>
            <li><Link href="/bigdrop">bigDrop</Link></li>
            <li><Link href="/cuker">cuker</Link></li>
        </ul>
    </nav>
  )
}

export default Nav
