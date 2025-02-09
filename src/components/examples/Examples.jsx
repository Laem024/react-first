import { useState } from "react";

import TabButton from "../tabButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../section/Section";
import Tabs from "../tabs/Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const buttonMenu = (
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onClick={() => handleSelect("components")}
      >
        Components
      </TabButton>

      <TabButton
        isSelected={selectedTopic === "jsx"}
        onClick={() => handleSelect("jsx")}
      >
        Jsx
      </TabButton>

      <TabButton
        isSelected={selectedTopic === "props"}
        onClick={() => handleSelect("props")}
      >
        Props
      </TabButton>

      <TabButton
        isSelected={selectedTopic === "state"}
        onClick={() => handleSelect("state")}
      >
        State
      </TabButton>
    </>
  );

  function handleSelect(selectedButton) {
    //selectedButton => 'Components', 'Jsx', 'Props', 'State'
    setSelectedTopic(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs ButtonsContainer="menu" buttons={buttonMenu}>{tabContent}</Tabs>
    </Section>
  );
}
