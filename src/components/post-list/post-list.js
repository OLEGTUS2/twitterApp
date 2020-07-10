import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map((item) => {
        const {id, ...itemsProps} = item;
        return (
            <li key= {id} className='list-group-item'>
                {/* {...item} */}
                {/* <PostListItem 
                label={item.label}
                important={item.important}/> */}
                <PostListItem 
                    {...itemsProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    });

    return (
        <ListGroup  className = "app-list ">
            {elements}
        </ListGroup>
    )
}

export default PostList;