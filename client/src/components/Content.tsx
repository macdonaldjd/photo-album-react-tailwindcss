import React from 'react';
import { Comment, ContentProps } from "../tools/photos.model";

const Content = ({ photo }:ContentProps) => {

    // rendering out to DOM
    return (
        (photo === undefined) ? <div className="pt-2 text-base">Photo album is empty</div>
        :
        // if album is not empty then render out the content
        <div className="max-w-xl rounded overflow-hidden shadow-2xl shadow-black bg-white">
            <img src={"/images/photos/" + photo.source} alt={photo.title} />
            <div className="px-3 font-bold text-xl">{photo.title}</div>
            <div className="px-3 font-bold text-gray-600 text-lg mb-2">{photo.caption}</div>
            <div>
                {photo.comments.map((comment:Comment, i:number) => {
                    return (
                        <div className="p-2 text-gray-700 text-base" key={i}>
                            <div className="font-bold">{comment.author}</div>
                            <div>{comment.comment}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Content;