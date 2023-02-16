import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useTranslation } from 'react-i18next';


const lngs: any = {
  en: { nativeName: 'EN' },
  lv: { nativeName: 'LV' },
  es: { nativeName: 'ES' }
};

export const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/board")
  };


  return (
    <div className="home__container">
      <header className='header'>
        {Object.keys(lngs).map((lng) => (
          <button 
            className='button button_lng'
            key={lng} 
            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} 
            type="submit" 
            onClick={() => i18n.changeLanguage(lng)}
            >
            {lngs[lng].nativeName}
          </button>
        ))}
      </header>
      <h1 className="home__title">
        {t('RCP')}
      </h1>
      <div className="home__info">
        <div className="home__info--description">
          <p className="home__paragraph">
            {t('Game description')}
          </p>
        </div>
        <div className="home__info--rules">
          <p className="home__paragraph home__paragraph--rules">
            {t('Game rules title')}
          </p>
          <p className="home__paragraph">
            {t('Rule1')}
          </p>
          <p className="home__paragraph">
            {t('Rule2')}
          </p>
          <p className="home__paragraph">
            {t('Rule3')}
          </p>
        </div>
      </div>
      <button
        className="button"
        onClick={() => {
          handleStartClick()
        }}
      >
        {t('START')}
      </button>
    </div>
  )
}