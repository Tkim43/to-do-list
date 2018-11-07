import React from 'react'

export function randomString(length){
    const values='AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
    let randomString ="";
    for(let i =0; i<length; i++){
        const randIndex = Math.floor(Math.random() * values.length);
        randomString += values[randIndex];
    }
    return randomString;
}

export default randomString;