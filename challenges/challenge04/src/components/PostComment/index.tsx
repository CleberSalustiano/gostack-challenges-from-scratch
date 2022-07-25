import React from 'react';
import { Container } from './style';

export interface Comment {
    id?: number;
    author: { name: string; avatar: string };
    content: string;
}

const PostComment: React.FC<Comment> = ({ author, content }) => (
    <Container>
        <img src={author.avatar} />
        <p>
            <strong>{author.name}</strong> {content}
        </p>
    </Container>
);

export default PostComment;
