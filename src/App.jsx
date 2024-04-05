import Header from "./components/Header/Header";
import { pets_info } from "./data.js";
import PetComponent from "./components/PetComponent.jsx";

import TabMeetMe from "./components/tabMeetme.jsx";
import { MEETME } from "./data.js";
import { useState } from "react";


function App() {
  // pentru state:
  const [selectedTab, setSelectedTab] = useState();
console.log(selectedTab)
  function handleSelect(ceamselectat) {
    setSelectedTab(ceamselectat);
  }



  return (
    <div>
      <Header />
      <main>
        <section id="ManagingState">
          <h2>Get to know me(folosesc useState aici)</h2>
          <menu>
            <TabMeetMe onSelect={() => handleSelect('Harbuz')}>Harbuz</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect('Charlie')}>Charlie</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect('Miefi')}>Miefi</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect('Lola')}>Lola</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect('Rocky')}>Rocky</TabMeetMe>
          </menu>
          {!selectedTab && <p>Please get to know my pets</p>}
          {selectedTab && (
            <div id="tab-content">
              <h3>{MEETME[selectedTab].title}</h3>
              <p>{MEETME[selectedTab].description}</p>
            </div>
          )}
        </section>


        <section id="Mapping">
          <h2>My pets (foloesesc .map method)</h2>
          <ul>
            {pets_info.map((petComponent) => <PetComponent key={PetComponent.title} {...petComponent} />)}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
