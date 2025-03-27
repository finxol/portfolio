// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    telemetry: false,
    devtools: {
        enabled: false,
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                    silenceDeprecations: ["legacy-js-api"],
                },
            },
        },
    },

    css: ["~/assets/css/main.scss"],

    app: {
        head: {
            title: "Colin Ozanne",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "description",
                    content: "Colin Ozanne's personal portfolio",
                },
            ],
            htmlAttrs: {
                lang: "en",
            },
        },
    },

    compatibilityDate: "2025-03-27",
    modules: ["@nuxt/icon"],
});
