import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header"
import CoreConcept from "./components/CoreConcepts"
import TabButton from "./components/TabButton";

function App() {
    let tabContent = "Please click a button";
    function handleSelect(selectedButton) {
        tabContent = selectedButton;
    }
  return (
    <div>
      <Header />
      <main>
          <section id="core-concepts">
            <h2>Time to get started!</h2>
            <ul>
                {
                    CORE_CONCEPTS.map( coreConcept => {
                            return <CoreConcept key={coreConcept.title} {...coreConcept} />
                    })
                }
            </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
                <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
                <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
              </menu>
              {tabContent}
          </section>
      </main>
    </div>
  );
}

export default App;
