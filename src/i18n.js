import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
//navbar
import nav_en from '../public/locales/English/nav.json'
import nav_hi from '../public/locales/हिन्दी/nav.json'
import nav_ta from '../public/locales/தமிழ்/nav.json'
import nav_tl from '../public/locales/తెలుగు/nav.json'
import nav_ka from '../public/locales/ಕನ್ನಡ/nav.json'
import nav_ml from '../public/locales/മലയാളം/nav.json'
//Home
import home_en from '../public/locales/English/home.json'
import home_hi from '../public/locales/हिन्दी/home.json'
import home_ta from '../public/locales/தமிழ்/home.json'
import home_tl from '../public/locales/తెలుగు/home.json'
import home_ka from '../public/locales/ಕನ್ನಡ/home.json'
import home_ml from '../public/locales/മലയാളം/home.json'



i18n.use(LanguageDetector).use(initReactI18next).init({
  debugg:true,
  fallbackLng:"English",
  returnObjects:true,
  resources: {
    English:{
      translation: {
        //navbar
        nav1:nav_en,
        
        //Home Page
        home:home_en,

      },
    },
    हिन्दी:{
      translation: {
        //navbar
        nav1:nav_hi,

        //Home page 
        home:home_hi,

      },
    },
    తెలుగు:{
      translation: {
        //navbar
        nav1:nav_tl,

        //Home Page
        home:home_tl,
        }
      },
    ಕನ್ನಡ:{
      translation: {
        //navbar
        nav1:nav_ka,

        //Home Page
        home:home_ka,
      },
    },
    മലയാളം:{
      translation: {
        //navbar
        nav1:nav_ml,

         //Home Page
        home:home_ml,
      },
    },
    தமிழ்:{
      translation: {
        //navbar
        nav1:nav_ta,

         //Home Page
        home:home_ta,
      },
    },
    
  }
})