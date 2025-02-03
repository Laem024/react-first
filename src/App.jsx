import { useState } from "react";

import { CORE_CONCEPTS } from "./data.jsx";
import Header from "./components/header/Header.jsx";
import CoreConcept from "./components/coreConcept/CoreConcept.jsx";
import TabButton from "./components/tabButton/TabButton.jsx";
import { EXAMPLES } from "./data.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  function handleSelect(selectedButton){
    //selectedButton => 'Components', 'Jsx', 'Props', 'State'
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}

            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key= {conceptItem.id} {...conceptItem}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => handleSelect('components')}
            >Components</TabButton>

            <TabButton 
              isSelected={selectedTopic === 'jsx'} 
              onSelect={() => handleSelect('jsx')}
            >Jsx</TabButton>

            <TabButton 
              isSelected={selectedTopic === 'props'} 
              onSelect={() => handleSelect('props')}
            >Props</TabButton>

            <TabButton 
              isSelected={selectedTopic === 'state'} 
              onSelect={() => handleSelect('state')}
            >State</TabButton>
          </menu>
          {/* {!selectedTopic ? <p>Please select a topic.</p> : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
