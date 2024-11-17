"use client"

import { ModeToggle } from "../mode-toggle"

export default function Nav() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <ModeToggle />
                    </li>
                </ul>
            </nav>
        </header>
    )
}