import './App.css'
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {useState,Fragment} from "react";
import {EXAMPLES} from "./data.js";

function App() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedButton)
    }

    console.log("Inside APP")
    return (
        <Fragment>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {/* eslint-disable-next-line react/jsx-key */}
                        {CORE_CONCEPTS.map((coreItem) => <CoreConcept{...coreItem}/>)}
                        {/*<CoreConcept {...CORE_CONCEPTS[0]}/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[1]}/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[2]}/>*/}
                        {/*<CoreConcept {...CORE_CONCEPTS[3]}/>*/}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === "Components"} onSelect={() => handleSelect('Components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === "JSX"} onSelect={() => handleSelect('JSX')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === "Props"} onSelect={() => handleSelect('Props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === "State"} onSelect={() => handleSelect('State')}>State</TabButton>
                    </menu>
                    {!selectedTopic ? <p>Please Select a Topic</p> : <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                              {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>}
                </section>
            </main>
        </Fragment>
    )
}

export default App
