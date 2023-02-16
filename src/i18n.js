import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: 'Home',
          game: 'Game',
          scores: 'Scores',
          RCP: 'ROCK - PAPER - SCISSORS',
          "Game description": 'Rock paper scissors is a hand game, in which each player simultaneously forms one of three shapes with an outstretched hand. The earliest form of "rock paper scissors"-style game originated in China and was subsequently imported into Japan, where it reached its modern standardized form, before being spread throughout the world in the early 20th century.',
          "Game rules title": 'Game rules:',
          Rule1: 'SCISSORS beats PAPER',
          Rule2: 'PAPER beats ROCK',
          Rule3: 'ROCK beats SCISSORS',
          START: 'START',
          user: 'User: ',
          computer: 'Computer: ',
          restart: 'RESTART',
          winner: 'Winner',
          resultUser: "User result",
          resultComputer: 'Computer result',
          moves: 'Moves',
          winningGame: 'Great! You won the game!',
          loosingGame: 'Game over. You lost'
        }
      },
      lv: {
        translation: {
          home: 'Sākums',
          game: 'Spēle',
          scores: 'Rezultāti',
          RCP: 'AKMENS - ŠĶĒRES - PAPĪRĪTS',
          "Game description": 'Akmens šķēres papīrīts ir roku spēle, kurā katrs spēlētājs vienlaikus ar izstieptu roku veido vienu no trim formām. Agrākā "akmens šķēres papīrīts" stila spēļu forma radās Ķīnā un pēc tam tika ieviesta Japānā, kur tā sasniedza standartizēto formu. 20. gadsimta sākumā spēle izplatījās visā pasaulē.',
          "Game rules title": 'Spēles noteikumi:',
          Rule1: 'ŠĶĒRES uzveic PAPĪRĪTI',
          Rule2: 'PAPĪRĪTS uzveic AKMENI',
          Rule3: 'AKMENS uzveic ŠĶĒRES',
          START: 'SĀKT',
          user: 'Lietotājs: ',
          computer: 'Dators: ',
          restart: 'NO SĀKUMA',
          winner: 'Uzvarētājs',
          resultUser: "Lietotāja rezultāts",
          resultComputer: 'Datora rezultāts',
          moves: 'Gājieni',
          winningGame: 'Lieliski! Tu uzvarēji spēli!',
          loosingGame: 'Spēle beigusies. Tu zaudēji'
        }
      },
      es: {
        translation: {
          home: 'Hogar',
          game: 'Juego',
          scores: 'Puntaje',
          RCP: 'PIEDRA - PAPEL - TIJERAS',
          "Game description": 'Piedra, papel o tijera es un juego de manos, en el que cada jugador forma simultáneamente una de tres formas con la mano extendida. La primera forma de juego estilo "piedra, papel o tijera" se originó en China y posteriormente se importó a Japón, donde alcanzó su forma estandarizada moderna, antes de extenderse por todo el mundo a principios del siglo XX.',
          "Game rules title": 'Reglas del juego:',
          Rule1: 'TIJERAS gana PAPEL',
          Rule2: 'EL PAPEL le gana a la ROCA',
          Rule3: 'ROCA gana a TIJERAS',
          START: 'COMENZAR',
          user: 'Usuario: ',
          computer: 'Computadora: ',
          restart: 'REANUDAR',
          winner: 'Ganador',
          resultUser: "Resultado del usuario",
          resultComputer: 'Resultado de la computadora',
          moves: 'Mueve',
          winningGame: 'Excelente! Ganaste el juego',
          loosingGame: 'Se acabó el juego: perdiste'
        }
      }
    }
  });

export default i18n;