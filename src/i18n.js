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
//service
import serv_en from '../public/Locales/English/service.json'
import serv_hi from '../public/Locales/हिन्दी/service.json'
import serv_ta from '../public/Locales/தமிழ்/service.json'
import serv_tl from '../public/Locales/తెలుగు/service.json'
import serv_ka from '../public/Locales/ಕನ್ನಡ/service.json'
import serv_ml from '../public/Locales/മലയാളം/service.json'

//hospital 
import hos_en from '../public/Locales/English/hospital.json'
import hos_hi from '../public/Locales/हिन्दी/hospital.json'
import hos_ta from '../public/Locales/தமிழ்/hospital.json'
import hos_tl from '../public/Locales/తెలుగు/hospital.json'
import hos_ka from '../public/Locales/ಕನ್ನಡ/hospital.json'
import hos_ml from '../public/Locales/മലയാളം/hospital.json'

//school
import sch_en from '../public/Locales/English/school.json'
import sch_hi from '../public/Locales/हिन्दी/school.json'
import sch_ta from '../public/Locales/தமிழ்/school.json'
import sch_tl from '../public/Locales/తెలుగు/school.json'
import sch_ka from '../public/Locales/ಕನ್ನಡ/school.json'
import sch_ml from '../public/Locales/മലയാളം/school.json'

//college
import clg_en from '../public/Locales/English/college.json'
import clg_hi from '../public/Locales/हिन्दी/college.json'
import clg_ta from '../public/Locales/தமிழ்/college.json'
import clg_tl from '../public/Locales/తెలుగు/college.json'
import clg_ka from '../public/Locales/ಕನ್ನಡ/college.json'
import clg_ml from '../public/Locales/മലയാളം/college.json'

//restaurant
import rest_en from '../public/Locales/English/restaurant.json'
import rest_hi from '../public/Locales/हिन्दी/restaurant.json'
import rest_ta from '../public/Locales/தமிழ்/restaurant.json'
import rest_tl from '../public/Locales/తెలుగు/restaurant.json'
import rest_ka from '../public/Locales/ಕನ್ನಡ/restaurant.json'
import rest_ml from '../public/Locales/മലയാളം/restaurant.json'

//office
import ofc_en from '../public/Locales/English/office.json'
import ofc_hi from '../public/Locales/हिन्दी/office.json'
import ofc_ta from '../public/Locales/தமிழ்/office.json'
import ofc_tl from '../public/Locales/తెలుగు/office.json'
import ofc_ka from '../public/Locales/ಕನ್ನಡ/office.json'
import ofc_ml from '../public/Locales/മലയാളം/office.json'

//retailshop
import retl_en from '../public/Locales/English/retailshop.json'
import retl_hi from '../public/Locales/हिन्दी/retailshop.json'
import retl_ta from '../public/Locales/தமிழ்/retailshop.json'
import retl_tl from '../public/Locales/తెలుగు/retailshop.json'
import retl_ka from '../public/Locales/ಕನ್ನಡ/retailshop.json'
import retl_ml from '../public/Locales/മലയാളം/retailshop.json'

//construction
import cnt_en from '../public/Locales/English/construction.json'
import cnt_hi from '../public/Locales/हिन्दी/construction.json'
import cnt_ta from '../public/Locales/தமிழ்/construction.json'
import cnt_tl from '../public/Locales/తెలుగు/construction.json'
import cnt_ka from '../public/Locales/ಕನ್ನಡ/construction.json'
import cnt_ml from '../public/Locales/മലയാളം/construction.json'

//logistics
import log_en from '../public/Locales/English/logistics.json'
import log_hi from '../public/Locales/हिन्दी/logistics.json'
import log_ta from '../public/Locales/தமிழ்/logistics.json'
import log_tl from '../public/Locales/తెలుగు/logistics.json'
import log_ka from '../public/Locales/ಕನ್ನಡ/logistics.json'
import log_ml from '../public/Locales/മലയാളം/logistics.json'

//it company
import it_en from '../public/Locales/English/itcompany.json'
import it_hi from '../public/Locales/हिन्दी/itcompany.json'
import it_ta from '../public/Locales/தமிழ்/itcompany.json'
import it_tl from '../public/Locales/తెలుగు/itcompany.json'
import it_ka from '../public/Locales/ಕನ್ನಡ/itcompany.json'
import it_ml from '../public/Locales/മലയാളം/itcompany.json'

//e commerce
import ecom_en from '../public/Locales/English/ecommerce.json'
import ecom_hi from '../public/Locales/हिन्दी/ecommerce.json'
import ecom_ta from '../public/Locales/தமிழ்/ecommerce.json'
import ecom_tl from '../public/Locales/తెలుగు/ecommerce.json'
import ecom_ka from '../public/Locales/ಕನ್ನಡ/ecommerce.json'
import ecom_ml from '../public/Locales/മലയാളം/ecommerce.json'

//clinic / lab
import cli_en from '../public/Locales/English/clinic_lab.json'
import cli_hi from '../public/Locales/हिन्दी/clinic_lab.json'
import cli_ta from '../public/Locales/தமிழ்/clinic_lab.json'
import cli_tl from '../public/Locales/తెలుగు/clinic_lab.json'
import cli_ka from '../public/Locales/ಕನ್ನಡ/clinic_lab.json'
import cli_ml from '../public/Locales/മലയാളം/clinic_lab.json'










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
        //service PAge
        serv:serv_en,
        //industry
        hos:hos_en,
        sch:sch_en,
        clg:clg_en,
        rest:rest_en,
        ofc:ofc_en,
        retl:retl_en,
        cnt:cnt_en,
        log:log_en,
        it:it_en,
        ecom:ecom_en,
        cli:cli_en

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

        //service PAge
        serv:serv_hi,
        //industry
        hos:hos_hi,
        sch:sch_hi,
        clg:clg_hi,
        rest:rest_hi,
        ofc:ofc_hi,
        retl:retl_hi,
        cnt:cnt_hi,
        log:log_hi,
        it:it_hi,
        ecom:ecom_hi,
        cli:cli_hi
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

        //service PAge
        serv:serv_tl,
        //industry
        hos:hos_tl,
        sch:sch_tl,
        clg:clg_tl,
        rest:rest_tl,
        ofc:ofc_tl,
        retl:retl_tl,
        cnt:cnt_tl,
        log:log_tl,
        it:it_tl,
        ecom:ecom_tl,
        cli:cli_tl
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

        //service PAge
        serv:serv_ka,
        //industry
        hos:hos_ka,
        sch:sch_ka,
        clg:clg_ka,
        rest:rest_ka,
        ofc:ofc_ka,
        retl:retl_ka,
        cnt:cnt_ka,
        log:log_ka,
        it:it_ka,
        ecom:ecom_ka,
        cli:cli_ka
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

        //service PAge
        serv:serv_ml,
        //industry
        hos:hos_ml,
        sch:sch_ml,
        clg:clg_ml,
        rest:rest_ml,
        ofc:ofc_ml,
        retl:retl_ml,
        cnt:cnt_ml,
        log:log_ml,
        it:it_ml,
        ecom:ecom_ml,
        cli:cli_ml
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

        //service PAge
        serv:serv_ta,
        //industry
        hos:hos_ta,
        sch:sch_ta,
        clg:clg_ta,
        rest:rest_ta,
        ofc:ofc_ta,
        retl:retl_ta,
        cnt:cnt_ta,
        log:log_ta,
        it:it_ta,
        ecom:ecom_ta,
        cli:cli_ta
      },
    },
    
  }
})