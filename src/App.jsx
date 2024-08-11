import './App.css'


function Header() {
    return <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>Fundamental react concepta you will need for almost any app you are going to build</p>
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
