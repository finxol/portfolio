<script setup lang="ts">

</script>

<template>
    <section id="home">
        <h1>Colin Ozanne</h1>
        <h2>
            <span>
                <Icon name="fa6-solid:desktop" />
            </span>
            Software Engineer
        </h2>
        <h3>
            <span>
                <Icon name="fa6-solid:graduation-cap" />
            </span>
            Computer Science Student
        </h3>
        <NuxtLink href="/about">
            <span>
                <Icon name="fa6-solid:user" />
            </span>
            About Me
        </NuxtLink>
    </section>
</template>

<style scoped lang="scss">
@use "assets/css/main.scss" as *;

section#home {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: clamp(.5rem, 2vh, 1rem);
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    background-image: url("/wave.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    * {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 5rem;
        font-weight: bolder;

        @media (max-width: 768px) {
            margin-bottom: 9rem;
        }
    }

    h2 {
        font-size: 1.7rem;
    }

    h3 {
        font-size: 1.4rem;
    }

    a {
        margin: 2rem 0;
        font-size: 1.2rem;
        font-weight: bold;
        text-decoration: none;
        background-color: rgba(0, 0, 0, .1);
        box-shadow: 0 0 1rem .7rem rgba(0, 0, 0, .1);
        padding: 0 .5rem;
        border-radius: 1rem;
    }
}
</style>
