import './App.css'
import reactImg from './assets/react-core-concepts.png'
import componentImg from './assets/components.png'
import {CORE_CONCEPTS} from "./data.js";

const reactDescription = ["Fundamental","Crucial","Core"]
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
function Header() {
    const description = reactDescription[getRandomInt(2)];
    return <header>
        <img src={reactImg} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
            {description} react concepta you will need for almost any app you are going to build
        </p>
    </header>
}

// eslint-disable-next-line react/prop-types
function CoreConcept({image,title,description}) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>

            </main>
        </div>
    )
}

export default App
