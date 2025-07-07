'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './navbar.css' 

export default function Navbar() {
  const pathname = usePathname()

//   const isActive = (path: string) => pathname === path ? 'active' : ''


  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={80} height={80} />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/skills" >Skills</Link></li>
        <li><Link href="/projects">Projects</Link></li>
      </ul>

      {/* Socials & Hire Button */}
      <div className="nav-right">
        <a href="https://github.com/Ritik01417/"><Image src="/github.svg" alt="GitHub" width={25} height={25} /></a>
        <a href="https://www.linkedin.com/in/ritik-kamwal-9968b4250/"><Image src="/linkedin.svg" alt="LinkedIn" width={25} height={25} /></a>
        <a href="https://www.instagram.com/__rit.ik.__/"><Image src="/instagram.svg" alt="Instagram" width={25} height={25} /></a>
        <Link href="/hire" className="btn">
          <span className="hire-me">
            <Image src="/calling.svg" alt="Hire Me" width={25} height={25} />
          </span>
          Hire
        </Link>
      </div>
    </nav>
  )
}
