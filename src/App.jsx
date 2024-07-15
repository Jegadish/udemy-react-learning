import {useState} from "react";
import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header"
import CoreConcept from "./components/CoreConcepts"
import TabButton from "./components/TabButton";
import {EXAMPLES} from "./data";

function App() {
    const [selectedAction, setSelectedAction] = useState();

    function handleSelect(selectedButton) {
        setSelectedAction(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedAction) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedAction].title}</h3>
                <p>{EXAMPLES[selectedAction].description}</p>
                <pre>
                      <code>{EXAMPLES[selectedAction].code}</code>
                  </pre>
            </div>
        );
    }
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        {
                            CORE_CONCEPTS.map(coreConcept => {
                                return <CoreConcept key={coreConcept.title} {...coreConcept} />
                            })
                        }
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedAction === "components"}
                                   onSelect={() => handleSelect("components")}>Components</TabButton>
                        <TabButton isSelected={selectedAction === "jsx"}
                                   onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedAction === "props"}
                                   onSelect={() => handleSelect("props")}>Props</TabButton>
                        <TabButton isSelected={selectedAction === "state"}
                                   onSelect={() => handleSelect("state")}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
