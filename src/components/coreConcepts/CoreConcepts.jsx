import CoreConcept from "../coreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Section from "../section/Section";

export default function CoreConcepts(){

    return(
        <Section title="Time to get started!" id="core-concepts">
            <ul>
                {/* <CoreConcept
                        title={CORE_CONCEPTS[0].title}
                        description={CORE_CONCEPTS[0].description}
                        image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/> */}

                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept key={conceptItem.id} {...conceptItem} />
                ))}
            </ul>
        </Section>
    );
}