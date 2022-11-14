<script setup lang="ts">

</script>

<template>
    <section>
        <p>
            Hiya! 👋
        </p>
        <p>
            I'm a computer science student from France 🇫🇷.
        </p>
        <p>
            Some of my interests include:
            <strong>web development</strong>,
            <strong>infosec</strong>,
            <strong>cybersecurity</strong>
            and <strong>systems administration</strong>.
        </p>
        <p>
            I'm currently working on <a href="https://unicovoit.fr" target="_blank" rel="noreferrer noopener">UniCovoit</a>, a carpooling platform for students;
            but you can find my other most interesting projects just <NuxtLink to="/projects">next door</NuxtLink>.
        </p>
        <p>
            I regularly take part in CTFs and other cybersecurity events & conferences.
        </p>
        <p>
            I natively speak 🇬🇧 <strong>English</strong> and 🇫🇷 <strong>French</strong>.
        </p>
        <p>
            Feel free to use my <NuxtLink to="/contact">contact details</NuxtLink> if you wish to get in touch.
        </p>

        <small>
            Please note that this website is still a work in progress.
        </small>
    </section>
</template>

<style scoped lang="scss">
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: clamp(.5rem, 2vh, 1rem);
    width: 70%;
    margin: 0 auto;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        width: 80%;
        margin: 2rem auto 5rem;
    }

    p {
        margin: 0;
        text-align: justify;

        @media (max-width: 768px) {
            text-align: left;
        }
    }

    small {
        margin-top: 3rem;
        font-size: 1rem;
        font-style: italic;
    }
}
</style>
