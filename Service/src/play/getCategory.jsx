import React from "react";

export default function getWord() {
    let categories = ['red', 'happy', 'unhappy','angry', 'big', 'small', 
        'fast', 'slow', 'good', 'bad', 'beautiful', 'ugly', 'weak', 'smart', 'lazy', 'rich', 'poor', 'friendly', 
        'cold', 'hot', 'bright', 'dark', 'easy', 'hard', 'quiet', 'loud','clean', 'dirty', 'soft', 'hard', 'sharp', 
        'dull', 'old', 'new', 'early', 'late', 'long', 'short', 'tall', 'low', 'thick', 'thin', 'kind', 'mean', 
        'funny', 'serious', 'warm', 'cool', 'wide', 'narrow', 'calm', 'nervous', 'young', 'old', 'open', 'closed']
    
    const randomIndex = Math.floor(Math.random() * data.length);

    let randomWord = categories[randomIndex];
    return randomWord;

};
