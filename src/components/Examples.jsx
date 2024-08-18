import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "../data.js";
import {useState} from "react";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedButton)
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic === "Components"}
                           onSelect={() => handleSelect('Components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === "JSX"} onSelect={() => handleSelect('JSX')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === "Props"}
                           onSelect={() => handleSelect('Props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === "State"}
                           onSelect={() => handleSelect('State')}>State</TabButton>
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
    );
}