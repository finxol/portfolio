import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import {defineNuxtPlugin} from "#imports";

// @ts-ignore
library.add(faSolid.faBarsStaggered)
library.add(faSolid.faXmark)
library.add(faSolid.faHouse)
library.add(faSolid.faUser)
library.add(faSolid.faRocket)
library.add(faSolid.faEnvelope)
library.add(faSolid.faBuildingColumns)
library.add(faSolid.faDesktop)

library.add(brands.faGithub)
library.add(brands.faLinkedin)
library.add(brands.faTwitter)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
