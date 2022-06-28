import React from 'react';

const Release = ({ name, url }) => {
    return (
        <h1>
            <a href={url}>{name}</a>
        </h1>
    )
}
export default Release