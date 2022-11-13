import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBarsStaggered, faXmark, faHouse, faUser, faRocket, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import {defineNuxtPlugin} from "#imports";

// @ts-ignore
library.add(faBarsStaggered)
library.add(faXmark)
library.add(faHouse)
library.add(faUser)
library.add(faRocket)
library.add(faEnvelope)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
