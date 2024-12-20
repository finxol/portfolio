// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    telemetry: false,

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    silenceDeprecations: ['legacy-js-api'],
                },
            },
        },
    },

    css: [
        '~/assets/css/main.scss',
    ],

    app: {
        head: {
            title: 'Colin Ozanne',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: 'Colin Ozanne\'s personal portfolio'},
            ],
            htmlAttrs: {
                lang: 'en',
            }
        },
    },

    compatibilityDate: '2024-12-11',
    modules: ['@nuxt/icon']
})