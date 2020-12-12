import React from 'react'
import { MainHeader } from '@/presentation/components'
import Styles from './survey-list-styles.scss'
import { SurveyItem, SurveyItemEmpty } from './components'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <MainHeader />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul>
          <SurveyItem />
          <SurveyItemEmpty />
        </ul>
      </div>
    </div>
  )
}

export default SurveyList
