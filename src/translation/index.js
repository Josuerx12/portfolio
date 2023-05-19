import {i18n} from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './languages/en/en-US.json'
import pt from './languages/pt/pt-BR.json'

const resources = {
    en: {
        translation: en
    },
    pt:{
        translation: pt
    }
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'pt',
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
