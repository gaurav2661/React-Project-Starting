import {CORE_CONCEPTS} from "../data.js";
import CoreConcept from "./CoreConcept.jsx";


export default function CoreConcepts() {
    return (
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
    );
}