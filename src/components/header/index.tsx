import { Link } from "react-router-dom"
import { Section } from "./styles"

export const Header = () => {
    return (
        <Section>
            <div>
                <Link to='/'>
                    <h1>Dev Movie</h1>
                </Link>
            </div>

            <nav>
                <ul>        
                    <li><a href="#aventura">Aventura 🔥</a></li>
                    <li><a href="#terror">Terror 😱</a></li>
                    <li><a href="#ficção cientifica">Ficção cientifica 👨‍🔬</a></li>
                    <li><a href="#animação">Animação 🐱</a></li>
                    <li><a href="#suspense">Suspense 🧛‍♂️</a></li>
                    <li><a href="#comédia">Comedia 😂</a></li>
                </ul>
            </nav>
        </Section>
    )
}