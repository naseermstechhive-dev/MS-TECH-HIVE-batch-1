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
//Contact
import cont_en from '../public/Locales/English/contact.json'
import cont_hi from '../public/Locales/हिन्दी/contact.json'
import cont_ta from '../public/Locales/தமிழ்/contact.json'
import cont_tl from '../public/Locales/తెలుగు/contact.json'
import cont_ka from '../public/Locales/ಕನ್ನಡ/contact.json'
import cont_ml from '../public/Locales/മലയാളം/contact.json'
//about
import abt_en from '../public/Locales/English/about.json'
import abt_hi from '../public/Locales/हिन्दी/about.json'
import abt_ta from '../public/Locales/தமிழ்/about.json'
import abt_tl from '../public/Locales/తెలుగు/about.json'
import abt_ka from '../public/Locales/ಕನ್ನಡ/about.json'
import abt_ml from '../public/Locales/മലയാളം/about.json'



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

        //Contact Page
        cont:cont_en,

        //About Page
        abt:abt_en,

      },
    },
    हिन्दी:{
      translation: {
        //navbar
        nav1:nav_hi,

        //Home page 
        home:home_hi,

        //Contact Page
        cont:cont_hi,

        //About Page
        abt:abt_hi,
      },
    },
    తెలుగు:{
      translation: {
        //navbar
        nav1:nav_tl,

        //Home Page
        home:home_tl,

        //Contact Page
        cont:cont_tl,

        //About Page
        abt:abt_tl,
        }
      },
    ಕನ್ನಡ:{
      translation: {
        //navbar
        nav1:nav_ka,

        //Home Page
        home:home_ka,

        //Contact Page
        cont:cont_ka,

        //About Page
        abt:abt_ka,
      },
    },
    മലയാളം:{
      translation: {
        //navbar
        nav1:nav_ml,

         //Home Page
        home:home_ml,

        //Contact Page
        cont:cont_ml,

        //About Page
        abt:abt_ml,
      },
    },
    தமிழ்:{
      translation: {
        //navbar
        nav1:nav_ta,

         //Home Page
        home:home_ta,

        //Contact Page
        cont:cont_ta,

        //About Page
        abt:abt_ta,
      },
    },
    
  }
})