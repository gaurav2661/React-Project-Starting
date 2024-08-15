import './App.css'
import reactImg from './assets/react-core-concepts.png'

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

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <h2>Time to get Started</h2>
            </main>
        </div>
    )
}

export default App
