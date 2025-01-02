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
        name: "projects",
        path: "/#projects"
    },
    {
        name: "contact",
        path: "/#contact"
    },
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className='flex gap-8 z-10 relative'>
            {links.map((link, index) => {
                return <Link className='text-muted-foreground' href={link.path} key={index}>{link.name}</Link>
            })}
        </nav>
    )
}

export default Nav