"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from "../mode-toggle"
import { Underline } from 'lucide-react'

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "resume",
        path: "/#resume"
    },
    {
        name: "work",
        path: "/#work"
    },
    {
        name: "contact",
        path: "/#contact"
    },
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                return <Link href={link.path} key={index}>{link.name}</Link>
            })}
        </nav>
    )
}

export default Nav