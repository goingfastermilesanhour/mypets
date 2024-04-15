import Header from "./components/Header/Header";
import { pets_info } from "./data.js";
import PetComponent from "./components/PetComponent.jsx";

import TabMeetMe from "./components/tabMeetme.jsx";
import { MEETME } from "./data.js";
import { useState } from "react";
import { useRef } from "react";

function App() {
  // pentru state:
  const [selectedTab, setSelectedTab] = useState();
  const [file, setFile] = useState();
  const [imagesPreview, setImagesPreview] = useState([]);

  function handleSelect(ceamselectat) {
    setSelectedTab(ceamselectat);
  }

  const fileInputRef = useRef();
  const handleUpload = (event) => {
    setFile(event.target.files[0])
    const newArray = [...imagesPreview, URL.createObjectURL(event.target.files[0]) ];
    setImagesPreview(newArray)
  } 
  return (
    <div>
      <Header />
      <main>
        
        <section id="ManagingState">
          <h2>Get to know me(folosesc useState aici)</h2>
          {!selectedTab && <p>Please get to know my pets</p>}
          <menu>
            <TabMeetMe onSelect={() => handleSelect('Harbuz')}>Harbuz</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect('Charlie')}>Charlie</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect('Miefi')}>Miefi</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect('Lola')}>Lola</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect('Rocky')}>Rocky</TabMeetMe>
          </menu>
          
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

        <section id="addNew" >
          <button onClick={()=>fileInputRef.current.click()} type="button">Import a picture of your own pet</button>
          {file &&
          <button onClick={()=>{setFile(null); setImagesPreview([])}} type="button">Delete all pictures</button>
          }
          <input onChange={handleUpload} multiple={false} ref={fileInputRef} type="file"hidden></input>
        </section>
        <div className="picturesContainer">
        {imagesPreview.map((image) => {
            return <img width="130px" height="200px" src={image}></img>
          })}        
        </div>
      </main>
    </div>
  );
}

export default App;
