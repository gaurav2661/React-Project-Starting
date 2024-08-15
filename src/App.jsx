import './App.css'
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {useState} from "react";
import {EXAMPLES} from "./data.js";

function App() {

    const [selectedTopic,setSelectedTopic] = useState('Components');
    function handleSelect(selectedButton) {
        setSelectedTopic( selectedButton)
        console.log(selectedButton)
    }
    console.log("Inside APP")
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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                              {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App
