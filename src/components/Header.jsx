import reactEssentialImage from "../assets/react-core-concepts.png";

const reactDescription = ["Fundamental","Crucial","Core"]
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
    const description = reactDescription[getRandomInt(2)];
    return <header>
        <img src={reactEssentialImage} alt="Stylized atom"/>
        <h1>React Essentials</h1>
        <p>
            {description} react concepta you will need for almost any app you are going to build
        </p>
    </header>
}