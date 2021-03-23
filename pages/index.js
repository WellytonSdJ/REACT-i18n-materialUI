import React from 'react'
import { withNamespaces } from 'react-i18next';
// import i18n from './i18n'

// import i18n from '../pages/i18next'

function Home({ t }) {

  return (
    <div>
      <center>
        <h1>{t('titlee.t1')}!</h1>
        {t('aoba')}
      </center>
    </div>
  )
}

export default withNamespaces()(Home);