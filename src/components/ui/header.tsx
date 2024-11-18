import { ModeToggle } from "../mode-toggle";
import Nav from "./nav";

const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto flex justify-between">
                <ModeToggle />
                <Nav />
            </div>
        </header>
    )
}

export default Header