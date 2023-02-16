import './Scores.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import axios from 'axios';

type ScoresDB = {
  id: number,
  winner: string,
  userScore: number,
  computerScore: number,
  moves: number
}

export const Scores = () => {
  const { t } = useTranslation();
  const [scoresData, setScoresData] = useState<ScoresDB[]>([]);

  useEffect(() => {
    axios.get<ScoresDB[]>('http://localhost:3004/scores').then(({ data }) => {
      console.log(data)
      setScoresData(data)
    })
  }, [])

  if (!scoresData) {
    return null
  };

  return (
    <div className='scores__container'>
      <h1 className='scores__title'>
        {t('scores')}
      </h1>
      <section className='table'>
        <table className='table__container'>
          <tr>
            <th className='table__head'>{t('winner')}</th>
            <th className='table__head'>{t('resultUser')}</th>
            <th className='table__head'>{t('resultComputer')}</th>
            <th className='table__head'>{t('moves')}</th>
          </tr>
          {scoresData.map((result) => {
            return (
              <>
                <tr key={result.id}>
                  <td className='table__data'>{result.winner}</td>
                  <td className='table__data'>{result.userScore}</td>
                  <td className='table__data'>{result.computerScore}</td>
                  <td className='table__data'>{result.moves}</td>
                </tr>
              </>
            )
          })}
        </table>
      </section>
    </div>
  )
}