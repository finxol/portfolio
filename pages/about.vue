<script setup lang="ts">

</script>

<template>

    <section id="about">
        <p>
            Hiya! 👋
        </p>
        <p>
            I'm a computer science student and entrepreneur from 🇫🇷 France.
        </p>
        <p>
        I natively speak 🇬🇧 <strong>English</strong> and 🇫🇷 <strong>French</strong>.
        </p>
        <p>
            Some of my interests include:
            <strong>web development</strong>,
            <strong>infosec</strong>,
            <strong>cybersecurity</strong>
            and <strong>systems administration</strong>.
        </p>
        <p>
            I'm currently working on <a href="https://github.com/finxol/karr" target="_blank" rel="noreferrer noopener">Karr</a>,
            a federated carpooling platform for businesses.
            <br>
            You can find my other most interesting projects just <NuxtLink to="/projects">next door</NuxtLink>.
        </p>
        <p>
            I regularly take part in CTFs and other cybersecurity events & conferences.
        </p>
        <p>
            Feel free to use my <NuxtLink to="/contact">contact details</NuxtLink> if you wish to get in touch.
        </p>

        <small>
            Please note that this website is still a work in progress.
        </small>
    </section>

    <section
        id="ed-exp"
    >
        <div
            id="container"
        >
            <div
                id="education"
            >
                <h1>Education</h1>
                <div
                    id="education-container"
                >
                    <div
                        class="education-element"
                    >
                        <h2>ISTIC, Université de Rennes, France</h2>
                        <h3>Licence Informatique</h3>
                        <p>2024-2025</p>
                    </div>

                    <div
                        class="education-element"
                    >
                        <h2>UEF, Finland</h2>
                        <h3>Erasmus semester</h3>
                        <p>2023</p>
                    </div>

                    <div
                        class="education-element"
                    >
                        <h2>IUT Vannes</h2>
                        <h3>BUT, Computer Science</h3>
                        <p>2021-2023</p>
                    </div>
                </div>
            </div>

            <div
                id="experiences"
            >
                <h1>Experience</h1>
                <p>
                    VisCircle
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section#about {
    min-height: 83%;
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
        text-align: left;
    }

    small {
        margin-top: 3rem;
        font-size: 1rem;
        font-style: italic;
    }
}

section#ed-exp {
    //min-height: calc(100% - 2rem);
    width: calc(100% - 2rem);
    margin: 0 auto 8rem;


    div#container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 1rem;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        min-height: 100%;
        margin: 1rem 0;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }

        h1 {
            margin: 0;
            padding-top: 3rem;
            font-size: 3rem;
            text-align: center;
        }

        div#education {
            height: 100%;
            width: calc(100% - 3rem);
            margin-left: 3rem;
            border-right: 1px solid rgba(255, 255, 255, 0.1);

            @media (max-width: 768px) {
                width: calc(100% - 1.5rem);
                margin-left: 1.5rem;
                border-right: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            div#education-container {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                gap: 1rem;
                justify-content: center;
                align-items: flex-start;
                margin-top: 2rem;

                border-left: 1px solid rgba(255, 255, 255, 0.8);

                @media (max-width: 768px) {
                    gap: 0.5rem;
                }

                div.education-element {
                    display: flex;
                    position: relative;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 0.75rem;
                    margin-left: 2rem;
                    width: calc(90% - 2rem);
                    padding: 1rem 1.5rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: rgba(255, 255, 255, 0.1);
                    text-align: center;

                    &:before {
                        content: "";
                        width: 1rem;
                        height: 1rem;
                        position: absolute;
                        top: 1.5rem;
                        left: -2.53rem;
                        background-color: rgba(255, 255, 255, 1);
                        border-radius: 0.5rem;

                    }

                    h2, h3, p {
                        margin: 0;
                        padding: 0;
                        text-align: left;
                        font-size: 1rem;
                        color: #f0f0f0;
                    }

                    h2 {
                        font-size: 1.5rem;
                        font-weight: bold;
                    }

                    h3 {
                        font-size: 1.2rem;
                        font-style: italic;
                    }

                    p {
                        font-size: 0.8rem;
                    }
                }
            }
        }

        div#experiences {
            p {
                font-style: italic;
                font-size: 1rem;
                text-align: center;
            }
        }
    }
}
</style>
