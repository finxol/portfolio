<script setup lang="ts">

</script>

<template>
    <section>
        <h1>Colin Ozanne</h1>
        <h2>
            <span>
                <font-awesome-icon icon="fa-solid fa-desktop"/>
            </span>
            Software Engineer
        </h2>
        <h4>
            <span>
                <font-awesome-icon icon="fa-solid fa-building-columns"/>
            </span>
            Computer Science Student
        </h4>
    </section>
</template>

<style scoped lang="scss">
@import "assets/css/main.scss";

section {
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
            margin-bottom: 8rem;
        }
    }

    h2 {
        font-size: 1.7rem;
    }

    h4 {
        font-size: 1.4rem;
        margin-bottom: 6rem;
    }
}
</style>
