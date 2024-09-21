import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav>

            <Link to={"/"}>
                <h1>Example Navbar Title</h1>
            </Link>

            <Link to={"/"} className={({isActive}) => {
                return isActive ? "active" : ""
            }}>
                <h3>Home</h3>
            </Link>
            <Link to={"/about"} className={({isActive}) => {
                return isActive ? "active" : ""
            }}>
                <h3>About</h3>
            </Link>
            <Link to={"/contact"} className={({isActive}) => {
                return isActive ? "active" : ""
            }}>
                <h3>Contact</h3>
            </Link>
        </nav>
    )
}