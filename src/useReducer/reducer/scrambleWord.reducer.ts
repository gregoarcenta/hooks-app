import React from "react";

interface ScrambleWordState {
  words: string[];
  currentWord: string;
  scrambledWord: string;
  guess: string;
  points: number;
  errorCounter: number;
  maxAllowErrors: number;
  skipCounter: number;
  maxSkips: number;
  isGameOver: boolean;
  totalWords: number;
}

type ScrambleWordAction =
  | { type: "SET_GUESS"; payload: string }
  | { type: "CHECK_ANSWER" }
  | { type: "SKIP_WORD" }
  | { type: "START_NEW_GAME"; payload: ScrambleWordState };

const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = (): ScrambleWordState => {
  const shuffleWords = shuffleArray([...GAME_WORDS]);
  return {
    words: shuffleWords,
    currentWord: shuffleWords[0],
    scrambledWord: scrambleWord(shuffleWords[0]),
    guess: "",
    points: 0,
    errorCounter: 0,
    maxAllowErrors: 3,
    skipCounter: 0,
    maxSkips: 3,
    isGameOver: false,
    totalWords: shuffleWords.length,
  };
};

export const scrambleWordReducer: React.Reducer<
  ScrambleWordState,
  ScrambleWordAction
> = (state, action) => {
  switch (action.type) {
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload.trim().toUpperCase(),
      };

    case "CHECK_ANSWER": {
      if (state.guess === state.currentWord) {
        const newWords = state.words.slice(1);
        return {
          ...state,
          words: newWords,
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0]),
          points: state.points + 1,
          guess: "",
        };
      }
      return {
        ...state,
        guess: "",
        errorCounter: state.errorCounter + 1,
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
      };
    }

    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips) return state;

      const newWord =
        state.words.filter((word) => word !== state.currentWord)[
          Math.floor(Math.random() * state.words.length)
        ] || state.words[0];

      const reorderedWords = [
        newWord,
        ...state.words.filter((word) => word !== newWord),
      ];

      return {
        ...state,
        currentWord: newWord,
        words: reorderedWords,
        scrambledWord: scrambleWord(newWord),
        skipCounter: state.skipCounter + 1,
        guess: "",
      };
    }

    case "START_NEW_GAME":
      return action.payload;

    default:
      return state;
  }
};
