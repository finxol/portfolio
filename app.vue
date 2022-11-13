<script setup lang="ts">
const app = ref(null)
const navToggle = ref(null)
const navToggleOpen = ref(null)
const navToggleClose = ref(null)

onMounted(() => {
    for (const el of [navToggle, navToggleOpen, navToggleClose]) {
        // @ts-ignore
        el.value.addEventListener('mouseenter', () => {
            // @ts-ignore
            app.value.classList.add('nav-hint')
        })
        // @ts-ignore
        el.value.addEventListener('mouseout', () => {
            // @ts-ignore
            app.value.classList.remove('nav-hint')
        })

    }
})

const toggleNav: Function = () => {
    if (app.value)
        // @ts-ignore
        app.value.classList.toggle('nav-open')
}
</script>

<template>
    <div
        id="app"
        ref="app"
    >
        <LazyHeader />

        <main>
            <article>
                <NuxtPage/>
            </article>
        </main>

        <button
            id="nav-toggle"
            type="button"
            @click="toggleNav"
            ref="navToggle"
        >
            <font-awesome-icon
                class="open"
                icon="fa-solid fa-bars-staggered"
                ref="navToggleOpen"
            />
            <font-awesome-icon
                class="close"
                icon="fa-solid fa-xmark"
                ref="navToggleClose"
            />
        </button>
    </div>
</template>

<style lang="scss">
@import "assets/fonts/goudy-old-style/goudy-old-style.css";
@import "assets/css/main.scss";

body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'goudy-old-style', sans-serif;
    color: $color-text;
    background-color: $color-background;

    div#app {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        margin: 0;
        background-color: $color-background;
        z-index: 1;

        main {
            position: relative;
            z-index: 2;
            height: 100vh;
            width: 100vw;
            margin: 0;
            display: flex;

            background-color: #000;
            transition: transform, border-radius;
            transition-timing-function: cubic-bezier(.13, .53, .38, .97);
            transition-duration: 500ms;

            article {
                position: absolute;
                top: 2rem;
                right: 3rem;
                bottom: 4.5rem;
                left: 3rem;
                border-radius: $border-radius;
                background-color: $dark-blue;
                transition: bottom 500ms cubic-bezier(.13, .53, .38, .97);
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

            transition: transform, background-color;
            transition-timing-function: ease;
            transition-duration: 400ms;

            &:hover {
                transform: translateX(-50%) scale(1.06);
            }

            &:active {
                transform: translateX(-50%) scale(0.91);
            }

            svg[data-prefix="fas"] {
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
            button#nav-toggle svg.open {
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
                transform: translateY(-20%) scale(.95);
                border-radius: $border-radius;

                article {
                    bottom: 0;
                }
            }

            button#nav-toggle svg.close {
                opacity: 1;
                transform: translate(-50%, -50%) scale(.8);
            }
        }
    }
}
</style>
