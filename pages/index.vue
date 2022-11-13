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
    height: 100%;
    background-image: url("/wave.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-color: rgba(0, 0, 0, .3);
    }

    * {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 5rem;
        font-weight: bolder;
    }

    h2 {
        font-size: 1.7rem;
    }

    h4 {
        font-size: 1.4rem;
    }
}
</style>
