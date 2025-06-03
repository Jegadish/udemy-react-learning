import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
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
        <Section title="Examples" id="examples">
            <Tabs
                buttons={<>
                <TabButton isSelected={selectedAction === "components"}
                           onClick={() => handleSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedAction === "jsx"}
                           onClick={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedAction === "props"}
                           onClick={() => handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedAction === "state"}
                           onClick={() => handleSelect("state")}>State</TabButton>
            </>}>
                {tabContent}
            </Tabs>
        </Section>
    );
}