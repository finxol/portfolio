<script setup lang="ts">

</script>

<template>
    <section
        id="home"
    >
        <h1>Colin Ozanne-Audroing</h1>
        <h2>
            <span>
                <font-awesome-icon icon="fa-solid fa-desktop"/>
            </span>
            Software Engineer
        </h2>
        <h3>
            <span>
                <font-awesome-icon icon="fa-solid fa-graduation-cap"/>
            </span>
            Computer Science Student
        </h3>
        <a
            href="#about"
        >
            <span>
                <font-awesome-icon icon="fa-solid fa-user"/>
            </span>
            About Me
        </a>
    </section>
    <section
        id="about"
    >
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
@import "assets/css/main.scss";

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

section#about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: clamp(.5rem, 2vh, 1rem);
    width: 70%;
    margin: 0 auto 4rem;
    padding-top: 1rem;
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
