

import React from 'react';

const MainContent = ({ name, age, bio }) => {
    return (
        <div>
            <h1>Main Content</h1>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
};

export default MainContent;
