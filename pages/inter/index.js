import React from 'react';
import { withNamespaces } from 'react-i18next';

function Inter({ t }) {

    return (
        <div>

            <h1>{t('inter.title.t1')}</h1>

            <p>{t('inter.description.pt1')}</p>
            <p>{t('interdescription.pt2')}</p>

            <hr />

            <h1>{t('inter.title.t2')}</h1>

            <p>{t('inter.description.pt3')}</p>

            <p>{t('inter.description.pt4')}</p>

            <a href="#">{t('inter.description.link1')}</a>
        </div>
    )
}

export default withNamespaces()(Inter)