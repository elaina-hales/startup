import React from "react";

export default function getWord() {
    let categories = ['red', 'happy', 'unhappy','angry', 'big', 'small', 
        'fast', 'slow', 'good', 'bad', 'beautiful', 'ugly', 'weak', 'smart', 
        'lazy', 'rich', 'poor', 'sociable', 
        'frigid', 'warm', 'bright', 'simple', 'difficult', 
        'silent', 'loud','clean', 'dirty', 'soft', 'sharp', 
        'dull', 'old', 'modern', 'long', 'short', 'tall', 'thick', 
        'thin', 'strong', 'important', 'brave', 'tough',
        'funny', 'serious', 'warm', 'wide', 'narrow', 'calm', 'nervous',
        'old', 'closed']
    
    const randomIndex = Math.floor(Math.random() * categories.length);

    let randomWord = categories[randomIndex];
    return randomWord;
};
