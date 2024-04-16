import Header from "./components/Header/Header";
import { pets_info } from "./data.js";
import PetComponent from "./components/PetComponent.jsx";

import TabMeetMe from "./components/tabMeetme.jsx";
import { MEETME } from "./data.js";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  // pentru state:
  const [selectedTab, setSelectedTab] = useState();
  const [file, setFile] = useState();
  const [imagesPreview, setImagesPreview] = useState([]);
  const [cardsPreview, setCardsPreview] = useState(pets_info);

  function handleSelect(ceamselectat) {
    setSelectedTab(ceamselectat);
  }

  const fileInputRef = useRef();

  const handleUpload = (event) => {
    setFile(event.target.files[0]);
    const newArray = [
      ...imagesPreview,
      URL.createObjectURL(event.target.files[0]),
    ];
    setImagesPreview(newArray);
  };

  const removePicture = (picIndex) => {
    var filteredArray = imagesPreview.filter((picture, index) => {
      return index !== picIndex;
    });
    setImagesPreview(filteredArray);
  };

  function pets_info_display() {
    console.log(pets_info);
    const result = pets_info.filter((itemArray, index) => {
      console.log(itemArray, index);
      return index !== Math.floor(Math.random(index));
    });
    console.log(result);
    setCardsPreview(result);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="ManagingState">
          <h2>Get to know me(folosesc useState aici)</h2>
          {!selectedTab && <p>Please get to know my pets</p>}
          <menu>
            <TabMeetMe onSelect={() => handleSelect("Harbuz")}>
              Harbuz
            </TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect("Charlie")}>
              Charlie
            </TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect("Miefi")}>Miefi</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect("Lola")}>Lola</TabMeetMe>
            <TabMeetMe onSelect={() => handleSelect("Rocky")}>Rocky</TabMeetMe>
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
          <ul onClick={pets_info_display}>
            {/* {pets_info.map((petComponent) => (
              <PetComponent key={PetComponent.title} {...petComponent} />
            ))} */}
            {cardsPreview.map((petComponent) => (
              <PetComponent key={PetComponent.title} {...petComponent} />
            ))}
          </ul>
        </section>

        <section id="addNew">
          <button onClick={() => fileInputRef.current.click()} type="button">
            Import a picture of your own pet
          </button>
          {file && (
            <button
              onClick={() => {
                setFile(null);
                setImagesPreview([]);
              }}
              type="button"
            >
              Delete all pictures
            </button>
          )}
          <input
            onChange={handleUpload}
            multiple={false}
            ref={fileInputRef}
            type="file"
            hidden
          ></input>
        </section>
        <div className="picturesContainer">
          {imagesPreview.map((image, index) => {
            return (
              <div className="pictureContainer">
                <img width="130px" height="200px" src={image}></img>;
                <svg
                  width="13"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => removePicture(index)}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"
                    fill="#1C274C"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
