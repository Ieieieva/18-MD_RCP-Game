import { useEffect, useState } from 'react';
import './Board.css';
import { useTranslation } from 'react-i18next';
import { GiRock, GiPaper, GiScissors } from "react-icons/gi";
import axios from 'axios';
import { useMutation } from '@tanstack/react-query'

export const Board = () => {
  const [usersChoice, setUsersChoice] = useState('');
  const [computersChoice, setComputersChoice] = useState('');
  const [result, setResult] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [userSymbol, setUserSymbol] = useState(<></>);
  const [computerSymbol, setComputerSymbol] = useState(<></>);
  const [winner, setWinner] = useState('');
  const [moves, setMoves] = useState(0);
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  const { t } = useTranslation();


  const handleClick = (value: any) => {
    setUsersChoice(value)
    getComputerChoice()
    setMoves(moves + 1)
  };

  const getComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputersChoice(randomChoice)
  };

  useEffect(() => {
    checkResults()
    handleUserSymbol()
    handleComputerSymbol()
  }, [usersChoice, computersChoice]);

  useEffect(() => {
    checkWinner()
  }, [userScore, computerScore]);

  const checkResults = () => {
    if (usersChoice === 'SCISSORS' && computersChoice === 'SCISSORS') {
      setResult('=')
    }
    if (usersChoice === 'SCISSORS' && computersChoice === 'ROCK') {
      setResult('<')
      setComputerScore(computerScore + 1)
    }
    if (usersChoice === 'SCISSORS' && computersChoice === 'PAPER') {
      setResult('>')
      setUserScore(userScore + 1)
    }
    if (usersChoice === 'PAPER' && computersChoice === 'PAPER') {
      setResult('=')
    }
    if (usersChoice === 'PAPER' && computersChoice === 'ROCK') {
      setResult('>')
      setUserScore(userScore + 1)
    }
    if (usersChoice === 'PAPER' && computersChoice === 'SCISSORS') {
      setResult('<')
      setComputerScore(computerScore + 1)
    }
    if (usersChoice === 'ROCK' && computersChoice === 'ROCK') {
      setResult('=')
    }
    if (usersChoice === 'ROCK' && computersChoice === 'SCISSORS') {
      setResult('>')
      setUserScore(userScore + 1)
    }
    if (usersChoice === 'ROCK' && computersChoice === 'PAPER') {
      setResult('<')
      setComputerScore(computerScore + 1)
    }
  }

  const handleUserSymbol = () => {
    if (usersChoice === 'ROCK') {
      setUserSymbol(<GiRock className='icon icon__large'/>)
    }
    if (usersChoice === 'SCISSORS') {
      setUserSymbol(<GiScissors className='icon icon__large'/>)
    }
    if (usersChoice === 'PAPER') {
      setUserSymbol(<GiPaper className='icon icon__large'/>)
    }
  }

  const handleComputerSymbol = () => {
    if (computersChoice === 'ROCK') {
      setComputerSymbol(<GiRock className='icon icon__large'/>)
    }
    if (computersChoice === 'SCISSORS') {
      setComputerSymbol(<GiScissors className='icon icon__large'/>)
    }
    if (computersChoice === 'PAPER') {
      setComputerSymbol(<GiPaper className='icon icon__large'/>)
    }
  }

  const checkWinner = () => {
    if (userScore === 5) {
      setIsDisabled(true)
      setResult(`${t('winningGame')}`)
      setWinner('user')
    }
    if (computerScore === 5) {
      setIsDisabled(true)
      setResult(`${t('loosingGame')}`)
      setWinner('computer')
    }
  }

  const sendDataToDB = () => {
    console.log({ winner, userScore, computerScore, moves })
    const dataToSend = { winner, userScore, computerScore, moves };
    mutate(dataToSend)
  }
  const handleData = (data: any) => {
    return axios.post('http://localhost:3004/scores', data)
  }
  const useHandleData = () => {
    return useMutation(handleData)
  }
  const { mutate } = useHandleData()

  const restartGame = () => {
    setUserScore(0);
    setComputerScore(0);
    setUsersChoice('');
    setComputersChoice('');
    setResult('');
    setIsDisabled(false);
    setUserSymbol(<></>);
    setComputerSymbol(<></>);
    setMoves(0);
    setWinner('');
    sendDataToDB()
  }

  return (
    <div className='game__container'>
      <h1 className='game__title'>
        {t('game')}
      </h1>
      <div className="board__container">
        <div className='boards'>
          <div className="board board__left">
            <div className="board__heading">{t('user')} {userScore}</div>
            <div className='player__container'>
              <div className='player__choice'>{userSymbol}</div>
            </div>
          </div>
          <div className='board__console'>
            <div className='result'>{result}</div>
            <span className='moves'>{t('moves')}: {moves}</span>
          </div>
          <div className="board board__right">
            <div className="board__heading">{t('computer')} {computerScore}</div>
            <div className='player__container'>
              <div className='player__choice'>{computerSymbol}</div>
            </div>
          </div>
        </div>
        <div className="game__buttons">
          <button 
            className='button'
            disabled={isDisabled}
            onClick={() => {
              handleClick('ROCK')
            }}
            >
              <GiRock className='icon'/>
          </button>
          <button
            className='button'
            disabled={isDisabled}
            onClick={() => {
              handleClick('PAPER')
            }}
            >
              <GiPaper className='icon'/>
          </button>
          <button
            className='button'
            disabled={isDisabled}
            onClick={() => {
              handleClick('SCISSORS')
            }}
            >
              <GiScissors className='icon'/>
          </button>
        </div>
        <button
          className='button'
          onClick={restartGame}
          >
          {t('restart')}
        </button>
      </div>
    </div>
  )
}