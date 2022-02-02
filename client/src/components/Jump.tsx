import React from 'react';
import { Photo, JumpProps } from "../tools/photos.model";

const Jump = ({ photos, setIndex, visible }:JumpProps) => {
    // passed in photos JSON and the setIndex state from App
    return (
        <div className="flex-wrap px-3 py-3 gap-2 ml-10 md:flex-row lg:flex-nowrap" style={{display: (visible ? 'flex' : 'none')}}>
            {photos.map((photo:Photo, n:number) => {
                return (
                    <div key={n}>
                        <img className="hover:opacity-50 max-w-fit border-blue-300 max-h-24 border-2 border-sky-600 rounded-lg" src={"/images/photos/" + photo.source} alt={photo.title} onClick={() => setIndex(n)} />
                    </div>
                );
            })}
        </div>
    )
}

export default Jump;