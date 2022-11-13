<script setup lang="ts">
const projects = [
    {
        name: 'UniCovoit',
        link: 'https://unicovoit.fr',
        linkText: 'unicovoit.fr',
        img: '/unicovoit_homepage.png',
    }, {
        name: 'My Blog',
        link: 'https://finxol.io',
        linkText: 'finxol.io',
        img: '/finxol-blog-homepage.png',
    }, {
        name: 'Colin Ozanne',
        link: 'https://colinozanne.fr',
        linkText: 'colinozanne.fr',
        img: '/colinozanne-homepage.png',
    }
]
</script>

<template>
    <section>
        <h1>Projects</h1>
        <div
            id="projects"
        >
            <div
                v-for="project in projects"
                :key="project.name"
                class="project"
            >
                <img
                    :src="project.img"
                    :alt="project.name"
                />
                <h2>
                    <a
                        :href="project.link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ project.name }}
                    </a>
                </h2>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;

    h1 {
        font-size: 3rem;
    }

    div#projects {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        width: 100%;

        div.project {
            position: relative;
            display: block;
            width: 33rem;
            height: 20rem;
            overflow: hidden;
            border-radius: 1rem;
            box-shadow: 5px 5px 1rem rgba(0, 0, 0, .5);
            transition: transform .2s ease;
            cursor: pointer;

            &:hover {
                transform: scale(1.03);
            }

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
                border-radius: 1rem;
            }

            h2 {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0;
                padding: 2rem 2rem 1rem;
                border-radius: 0 0 1rem 1rem;
                font-size: 1.5rem;
                font-weight: bold;
                text-align: left;
                background: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0) 0%,
                        rgba(0, 0, 0, .7) 100%
                );

                a {
                    color: #ffffff;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>
