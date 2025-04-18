<script setup lang="ts">
const app = ref(null)
const article = ref(null)

const navOpen = ref(false)


const toggleNav: Function = () => {
    navOpen.value = !navOpen.value
}

const routeChanged: Function = () => {
    navOpen.value = false
    if (article.value) {
        article.value.scrollTo(0, 0)
    }
}
</script>

<template>
    <div
        id="app"
        ref="app"
        :class="{ 'nav-open': navOpen }"
    >
        <LazyHeader
            @navigated="routeChanged"
        />

        <main>
            <article
                ref="article"
            >
                <NuxtPage/>
            </article>
        </main>

        <button
            id="nav-toggle"
            type="button"
            @click="toggleNav"
            aria-label="Toggle Navigation Menu"
        >
            <Icon
                class="open"
                name="fa6-solid:bars"
            />
            <Icon
                class="close"
                name="fa6-solid:xmark"
            />
        </button>
    </div>
</template>

<style lang="scss">
@use "assets/fonts/goudy-old-style/goudy-old-style.css" as *;
@use "assets/css/main.scss" as *;

body {
    margin: 0;
    padding: 0;
    height: 100dvh;
    width: 100vw;
    font-family: 'goudy-old-style', sans-serif;
    color: $color-text;
    background-color: $color-background;

    div#app {
        height: 100dvh;
        width: 100vw;
        overflow: hidden;
        margin: 0;
        background-color: $color-background;
        z-index: 1;

        main {
            position: relative;
            z-index: 2;
            height: 100dvh;
            width: 100vw;
            margin: 0;
            display: flex;

            background-color: $color-background;
            transition: transform, border-radius;
            transition-timing-function: cubic-bezier(.13, .53, .38, .97);
            transition-duration: 500ms;

            article {
                position: absolute;
                top: 2rem;
                right: 3rem;
                bottom: 4.5rem;
                left: 3rem;
                overflow-y: auto;
                border-radius: $border-radius;
                box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .5);
                background-color: $dark-blue;
                transition: bottom 500ms cubic-bezier(.13, .53, .38, .97);

                @media (max-width: 768px) {
                    top: 1rem;
                    right: 1rem;
                    bottom: 2rem;
                    left: 1rem;
                }
            }
        }

        button#nav-toggle {
            height: 3rem;
            width: 3rem;
            position: fixed;
            z-index: 3;
            left: 50%;
            bottom: 3rem;
            transform: translateX(-50%);
            background-color: $champagne;
            border: none;
            border-radius: 5rem;
            outline: none;
            box-shadow: 0 0 4rem rgba(0 0 0 / 35%);
            cursor: pointer;
            -webkit-tap-highlight-color: transparent; // remove tap highlight in chrome

            transition: transform, background-color;
            transition-timing-function: ease;
            transition-duration: 400ms;

            &:hover {
                transform: translateX(-50%) scale(1.06);
            }

            &:active {
                transform: translateX(-50%) scale(0.91);
            }

            span.iconify {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(.9);
                color: rgba(15, 15, 15, 0.8);
                font-size: 1.75rem;
                opacity: 0;
                transition: transform, opacity;
                transition-timing-function: ease;
                transition-duration: 400ms;
            }
        }

        &:not(.nav-open) {
            button#nav-toggle span.iconify.open {
                opacity: 1;
                transform: translate(-50%, -50%) scale(.8);
            }
        }

        /*&.nav-hint {
            main {
                transform: translateY(-5%) scale(1);
                border-radius: 1rem;
            }
        }*/

        &.nav-open {
            nav div#nav-links {
                transform: translateY(0) scale(1);
            }

            main {
                transform: translateY(-24vh) scale(.95);

                @media (max-width: 768px) {
                    transform: translateY(-55%) scale(.95);
                }

                article {
                    bottom: 0;
                }
            }

            button#nav-toggle span.iconify.close {
                opacity: 1;
                transform: translate(-50%, -50%) scale(.8);
            }
        }
    }
}
</style>
