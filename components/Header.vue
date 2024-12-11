<script setup lang="ts">
const navElements = Object.freeze([
    {
        name: 'Home',
        link: '/',
        icon: 'fa6-solid:house',
    },
    {
        name: 'About',
        link: '/about',
        icon: 'fa6-solid:user',
    },
    {
        name: 'Projects',
        link: '/projects',
        icon: 'fa6-solid:rocket',
    },
    {
        name: 'Contact',
        link: '/contact',
        icon: 'fa6-solid:envelope',
    },
])

const emits = defineEmits(['navigated'])
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
                @click="$emit('navigated')"
            >
                <span>
                    <Icon
                        :name="navElement.icon"
                    />
                </span>
                <span>{{ navElement.name }}</span>
            </NuxtLink>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@use "assets/css/main.scss" as *;

$box-side: 7rem;

nav {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    overflow: hidden;
    height: calc(23vh - 1.5rem);
    width: calc(100% - 2rem);
    z-index: 1;

    @media (max-width: 768px) {
        height: calc(50vh - 1.5rem);
    }

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

            @media (max-width: 768px) {
                margin-bottom: 1rem;
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
