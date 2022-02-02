export interface Comment {
    comment: string;
    author: string;
}

export interface Photo {
    id: string;
    title: string;
    caption: string;
    source: string;
    comments: Comment[];
}

export interface JSONData {
    photos: Photo[];
}

export interface CommentProps {
    photo:Photo;
    setLoading:Function;
    refresh:Function;
    visible:boolean;
}

export interface ContentProps {
    photo:Photo; 
}

export interface JumpProps {
    photos:Photo[]; 
    setIndex:Function;
    visible:boolean;
}