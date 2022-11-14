import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as faSolid from '@fortawesome/free-solid-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import * as regular from '@fortawesome/free-regular-svg-icons'
import {defineNuxtPlugin} from "#imports";

// @ts-ignore
library.add(faSolid.faBarsStaggered)
library.add(faSolid.faXmark)
library.add(faSolid.faHouse)
library.add(faSolid.faUser)
library.add(faSolid.faRocket)
library.add(faSolid.faEnvelope)
library.add(faSolid.faDesktop)
library.add(faSolid.faGraduationCap)
library.add(faSolid.faStar)
library.add(faSolid.faStarHalf)
library.add(faSolid.faStarHalfAlt)
library.add(faSolid.faDatabase)

library.add(regular.faStar)

library.add(brands.faGithub)
library.add(brands.faLinkedin)
library.add(brands.faTwitter)
library.add(brands.faHtml5)
library.add(brands.faJs)
library.add(brands.faNodeJs)
library.add(brands.faVuejs)
library.add(brands.faGitAlt)
library.add(brands.faDocker)
library.add(brands.faLinux)
library.add(brands.faRust)
library.add(brands.faPython)

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
