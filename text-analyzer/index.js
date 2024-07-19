/**
* index.js
* This file serves as the main entry point for our Text Analyzer application.
* It will contain the core logic for analyzing the text input and providing insights.
*/

const inputText = "The quick brown fox jumps over the lazy dog.";
console.log(`Input Text: ${inputText}`);

//char count
const countCharacters = (text) => {
    let characterCount = 0;

    for (let i = 0; i < text.length; i++) {
        characterCount++;
    }

    return characterCount;
};

const characterCount = countCharacters(inputText);
console.log(`Character Count: ${characterCount}`);

//words count
const countWords = (text) => {
    let wordCount = 0;
    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        wordCount++;
    }

    return wordCount;
};

const wordCount = countWords(inputText);
console.log(`Word Count: ${wordCount}`);

//sentence count
const countSentences = (text) => {
    let sentenceCount = 0;

    text.split('').forEach((char) => {
        if (['.', '!', '?'].includes(char)) {
            sentenceCount++;
        }
    });

    return sentenceCount;
};

const sentenceCountResult = countSentences(inputText);
console.log(`Sentence Count: ${sentenceCountResult}`);

//word frequency
const wordFrequency = (text) => {
    const words = text.split(' ');
    const wordCount = {};

    words.forEach((word) => {
        const lowerCaseWord = word.toLowerCase();

        if (wordCount[lowerCaseWord]) {
            wordCount[lowerCaseWord]++;
        } else {
            wordCount[lowerCaseWord] = 1;
        }
    });

    return wordCount;
};

const wordFrequencyResult = wordFrequency(inputText);
console.log('Word Frequency:', wordFrequencyResult);

// longest word
const findLongestWord = (text) => {
    const words = text.split(' ');
    let longestWord = '';

    words.forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
};

const longestWordResult = findLongestWord(inputText);
console.log(`The longest word is "${longestWordResult}" with a length of ${longestWordResult.length}.`);


//shortest word
const findShortestWord = (text) => {
    const words = text.split(' ');
    let shortestWord = words[0];

    words.forEach((word) => {
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    });

    return shortestWord;
};

const shortestWordResult = findShortestWord(inputText);
console.log(`The shortest word is "${shortestWordResult}" with a length of ${shortestWordResult.length}.`);

//ARI
const analyzeReadability = (text) => {
    const characters = countCharacters(text);
    const words = countWords(text);
    const sentences = countSentences(text);

    const ari = (4.71 * (characters / words)) + (0.5 * (words / sentences)) - 21.43;
    const roundedAri = Math.round(ari);

    return roundedAri;
};

const readabilityScore = analyzeReadability(inputText);
console.log(`The readability score is ${readabilityScore}.`);

const displaySummary = (text, characters, words, sentences, readabilityScore) => {
    const summary = `
        Text: ${text}
        Characters: ${characters}
        Words: ${words}
        Sentences: ${sentences}
        Readability Score: ${readabilityScore}
    `;

    console.log(summary);
};

displaySummary(inputText, countCharacters(inputText), countWords(inputText), countSentences(inputText), readabilityScore);

const handleUserInput = (text) => {
    const trimmedInput = text.trim();

    try {
        if (trimmedInput.length === 0) {
            throw new Error("Error: Please enter a non-empty text.");
        }
        const characters = countCharacters(text);
        const words = countWords(text);
        const sentences = countSentences(text);
        const wordFrequency_ = wordFrequency(text);
        const longestWord = findLongestWord(text);
        const shortestWord = findShortestWord(text);
        const readabilityScore = analyzeReadability(text);

        displaySummary(text, characters, words, sentences, readabilityScore);
    } catch (error) {
        console.log(error.message);
    }

};

handleUserInput(""); // Error: Please enter a non-empty text.
handleUserInput("    "); // Error: Please enter a non-empty text.
const sampleText = "The quick brown fox jumps over the lazy dog.";
handleUserInput(sampleText);
handleUserInput("¿Qué hora es? ¡Hasta luego!");
