import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "../data.js";
import {useState} from "react";
import Section from "./Section.jsx";


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
        console.log(selectedButton)
    }

    return (
        <Section  title = "Examples" id="examples">
            <menu>
                <TabButton isSelected={selectedTopic === "Components"}
                           onClick={() => handleSelect('Components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === "JSX"}
                           onClick={() => handleSelect('JSX')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === "Props"}
                           onClick={() => handleSelect('Props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === "State"}
                           onClick={() => handleSelect('State')}>State</TabButton>
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
        </Section>
    );
}