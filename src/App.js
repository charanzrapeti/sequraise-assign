import * as React from "react";
import { useState, useEffect } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebaseConfig";
import { Navbar } from "./components/Navbar";
import { Details } from "./components/Details";
import { ExpenseList } from "./components/ExpenseList";
import axios from "axios";
const XLSX = require("xlsx");

function App() {
  var [jsonData, setjsonData] = useState([]);
  const imagesListRef = ref(storage);
  const excel_data = ref(storage, "excel");
  const [details, setdetails] = useState({
    ID: "firstid",
    Name: "initial",
    Date: "firstdata",
    Time: "firstime",
    Gender: "firstgender",
    Location: "firstlocation",
  });
  const [images, setimages] = useState([]);
  const [currentImage, setcurrentImage] = useState("");
  async function GetData(url) {
    const options = {
      url,
      responseType: "arraybuffer",
    };
    let axiosResponse = await axios(options);
    const workbook = XLSX.read(axiosResponse.data);

    let worksheets = workbook.SheetNames.map((sheetName) => {
      return {
        sheetName,
        data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]),
      };
    });

    var temp = worksheets[0].data;
    setjsonData(temp);
  }

  useEffect(() => {
    // list urls ----------------------
    listAll(excel_data).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          GetData(url);
        });
      });
    });

    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          var imageState = images;

          imageState.push(url);

          setimages(imageState);
        });
      });
    });
  }, []);

  function handleClick(detail) {
    setdetails({
      ...details,
      ...detail,
    });

    for (var j = 0; j < images.length; j++) {
      if (images[j].includes(detail.Name)) {
        setcurrentImage(images[j]);
        console.log(images[j]);
      }
    }

    // console.log(Details);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Details event={details} url={currentImage} />

        <ExpenseList events={jsonData} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
