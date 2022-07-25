import React from 'react';
import PostComment, { Comment } from '../PostComment';
import { Container } from './style';


interface Post {
    image: string;
    name: string;
    text: string;
    date: string;
    comments: Comment[];
}

const PostItem: React.FC<Post> = ({ image, text, name, date, comments }) => (
    <Container>
        <header>
            <img src={image} />
            <div>
                <h2>{name}</h2>
                <p>{date}</p>
            </div>
        </header>
        <p>{text}</p>
        {
            comments.map(comment => (
                <PostComment key={comment.id} author={comment.author} content={comment.content} />
            ))
        }
    </Container>
);

export default PostItem;
