import React, {useState, useEffect} from 'react';
import { getJSONData } from "./tools/Toolkit";
import { JSONData, Photo } from "./tools/photos.model";

import LoadingOverlay from "./LoadingOverlay/LoadingOverlay";
import Content from "./components/Content";
import Jump from "./components/Jump";
import Comment from "./components/Comment";

// request url of Web API to retrieve JSON
const RETRIEVE_SCRIPT:string = "http://localhost/retrieveAlbum.php?count=11";

const App = () => {

  // ---------------------------------------------- event handers
  const onNext = (e:any) => {
    if (index < photos.length - 1) {
      setIndex(index + 1);
    }
  }

  const onPrev = (e:any) => {
    if (index > 0) { 
      setIndex(index - 1); 
    }
  }
  
  const onResponse = (result:JSONData) => {
    setPhotos(result.photos);
    setLoading(false);
  };

  const onError = (message:string) => console.log("*** Error has occured during photos AJAX data transmission: " + message);

  // ---------------------------------------------- private methods
  const load = () => {
    // loading JSON data when root component mounts
    getJSONData(RETRIEVE_SCRIPT, onResponse, onError);
  };

  // ---------------------------------------------- lifecycle hooks
  // run load method as soon as root component mounted
  useEffect(() => load(), []); // eslint-disable-line react-hooks/exhaustive-deps

  // --------------------------------------------- state setup
  const [photos, setPhotos] = useState<Array<Photo>>([]);
  const [index, setIndex] = useState<number>(0);
  const [jumpSection, setJumpSection] = useState<boolean>(false);
  const [commentSection, setCommentSection] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // --------------------------------------------- rendering to DOM  
  return (
    <div className="column-1 sm:grid p-5 place-content-center">
      <LoadingOverlay bgColor="#FFFFFF" spinnerColor="#505050" enabled={loading} />

      <div className="text-white">
          <div className="font-serif text-2xl font-bold sm:grid place-content-center ">Dream Car Photo Album</div>
          <div className="font-serif text-lg sm:grid place-content-center ">Full Stack Programming with React.js & Tailwind CSS</div>
      </div>

      <div>
          <div className="flex place-content-center space-x-1 pt-2">
            <button className="btn btn-blue hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500" id="PrevBtn" onClick={onPrev}
              disabled={(index===0) ? true : false}>Previous</button>

            <button className="btn btn-blue hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500" id="NextBtn"
              onClick={onNext} disabled={(index===(photos.length-1)
              || (photos.length===0)) ? true : false}>Next</button>

            <button className="btn btn-green hover:bg-green-700" id="JumpBtn" onClick={() =>
              setJumpSection(!jumpSection)} disabled={photos.length===0}>Jump</button>

            <button className="btn btn-green hover:bg-green-700" id="CommentBtn" onClick={() =>
              setCommentSection(!commentSection)} disabled={photos.length===0}>Comment</button>
          </div>
          <div className="flex place-content-center pt-2"> 
            {/* counter of current photo index that is displayed */}
            {(photos.length===0) ? <></> : 
            <div className="text-white">
              <div>Photo {index+1} of {photos.length}</div>
            </div>}
          </div>
          <div>
            <Jump photos={photos} setIndex={setIndex} visible={jumpSection}></Jump> 
          </div>
          <div className="px-3 flex place-content-center">
            <Comment photo={photos[index]} setLoading={setLoading} refresh={load} visible={commentSection}></Comment>
          </div>
      </div>
      <div className="py-3 grid place-content-center">
        <Content photo={photos[index]}></Content>
      </div>
    </div>
  );
}

export default App;