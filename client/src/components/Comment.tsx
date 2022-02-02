import React, { useState } from 'react';
import { sendJSONData } from "../tools/Toolkit";
import { CommentProps } from "../tools/photos.model";

// send url of Web API to add new comment
const SEND_SCRIPT:string = "http://localhost/addComment.php";

const Comment = ({ photo, setLoading, refresh, visible }:CommentProps) => {

    // ---------------------------------------------- event handlers
    const onSubmit = (e:any) => {
        // enable loading overlay
        setLoading(true);
        // construct JSON data to send as a string
        let sendJSON:Object = {"photoId": photo.id, "author": author, "comment": comment};
        setAuthor("");
        setComment("");
        // send data to update database
        sendJSONData(SEND_SCRIPT, JSON.stringify(sendJSON), refresh, onError);
    }

    const onError = (message:string) => console.log("*** Error has occured during comment AJAX data transmission: " + message);

    // --------------------------------------------- state variables 
    const [author, setAuthor] = useState<string>("");
    const [comment, setComment] = useState<string>("");

  // --------------------------------------------- rendering to DOM  
    return (
        <div className="py-4" style={{display: (visible ? 'block' : 'none')}}>
            <div className="py-2 block text-gray-200 text-sm font-bold mb-2">Author:</div>
            <div>
                <input type="text" className="focus:ring-2 focus:ring-blue-600  shadow appearance-none border rounded h-8 w-52 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:w-52" maxLength={50} value={author} 
                    onChange={(e:any) => setAuthor(e.target.value)} />
            </div>
            <div className="py-2 block text-gray-200 text-sm font-bold mb-2">Comment (200 Characters):</div>
            <div>
                <textarea className="focus:ring-2 focus:ring-blue-600  shadow appearance-none border rounded h-40 w-52 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:w-80" maxLength={200} value={comment} 
                    onChange={(e:any) => setComment(e.target.value)}></textarea>
            </div>
            <div className="">
                <button className="btn btn-green py-4 hover:bg-green-700 disabled:bg-gray-300 disabled:text-gray-500" onClick={onSubmit}
                    // disable button if author or comment is empty
                    disabled={(author==='') || (comment==='') ? true : false}>Submit</button>
            </div>
        </div>
    )
}

export default Comment;