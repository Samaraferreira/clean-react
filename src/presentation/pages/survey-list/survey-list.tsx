import React, { useEffect } from 'react'
import Styles from './survey-list-styles.scss'
import { MainHeader } from '@/presentation/components'
import {
  SurveyItem,
  SurveyItemEmpty
} from '@/presentation/pages/survey-list/components'
import { LoadSurveyList } from '@/domain/usecases'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  useEffect(() => {
    (async function () {
      loadSurveyList.loadAll()
    })()
  }, [])

  return (
    <div className={Styles.surveyListWrap}>
      <MainHeader />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul data-testid="survey-list">
          {/* <SurveyItem /> */}
          <SurveyItemEmpty />
        </ul>
      </div>
    </div>
  )
}

export default SurveyList
