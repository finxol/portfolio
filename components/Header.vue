<script setup lang="ts">
const navElements = Object.freeze([
    {
        name: 'Home',
        link: '/',
        icon: 'fa-solid fa-house',
    },
    {
        name: 'About',
        link: '/about',
        icon: 'fa-solid fa-user',
    },
    {
        name: 'Projects',
        link: '/projects',
        icon: 'fa-solid fa-rocket',
    },
    {
        name: 'Contact',
        link: '/contact',
        icon: 'fa-solid fa-envelope',
    },
])
</script>

<template>
    <nav>
        <div
            id="nav-links"
        >
            <NuxtLink
                v-for="navElement in navElements"
                :key="navElement.link"
                :to="navElement.link"
            >
                <span>
                    <font-awesome-icon
                        :icon="navElement.icon"
                    />
                </span>
                <span>{{ navElement.name }}</span>
            </NuxtLink>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@import "assets/css/main.scss";

$box-side: 7rem;

nav {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    overflow: hidden;
    height: calc(20vh - 1.5rem);
    width: calc(100% - 2rem);
    z-index: 1;

    div#nav-links {
        display: flex;
        margin: 0 1rem 1rem;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        transform: translateY(70%) scale(.9);
        transition: transform;
        transition-timing-function: cubic-bezier(.13, .53, .38, .97);
        transition-duration: 500ms;

        a {
            position: relative;
            margin: 0 1rem;
            height: $box-side;
            width: $box-side;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            text-decoration: none;
            color: #ffffff;
            font-size: 1.5rem;
            border-radius: .6rem;
            border: none;
            z-index: 3;
            background: radial-gradient(
                    circle,
                    $rose-red,
                    $desert-sun,
            );
            background-size: 200% 100%;
            animation: background-pan 2s linear infinite;

            @keyframes background-pan {
                from {
                    background-position: 0 center;
                }
                to {
                    background-position: 200% center;
                }
            }

            &:before {
                content: "";
                position: absolute;
                z-index: -1;
                border-radius: .5rem;
                background-color: black;
                inset: 2px;
            }
        }
    }
}
</style>
