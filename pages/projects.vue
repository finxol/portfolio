<script setup lang="ts">
interface project {
    name: string
    description: string
    link?: string
    img: string
    tags?: string[]
}

const projects: project[] = [
    {
        name: 'UniCovoit',
        link: 'https://unicovoit.fr',
        description: 'Carpool platform for students',
        img: '/unicovoit_homepage.png',
        tags: ['Nuxt.js 2', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'GitHub Actions'],
    },
    {
        name: 'Nuit de l\'info 2021',
        link: 'https://www.nuitdelinfo.com/',
        description: 'Website for the 2021 edition of the Nuit de l\'info',
        img: '/nuitdelinfo.png',
        tags: ['Python', 'Flask', 'MySQL', 'SCSS'],
    },
    {
        name: 'Privacy Online',
        link: 'https://privacyonline.finxol.io',
        description: 'A website that recommends privacy-friendly alternatives and online privacy-related articles.',
        img: '/privacy-online-en_homepage.webp',
        tags: ['Node.js', 'HTML/CSS', 'JavaScript', 'MySQL'],
    },
    {
        name: 'Blog',
        link: 'https://finxol.io',
        description: 'My personal blog where I write about cybersecurity, web development and other stuff',
        img: '/finxol-blog-homepage.png',
        tags: ['Nuxt.js 2', 'Markdown'],
    },
    {
        name: 'PrestoMaDose',
        link: 'https://github.com/finxol/PrestoMaDose',
        description: 'A script to search for a vaccination appointment against COVID-19. To use on the Doctolib website.',
        img: '/prestomadose.webp',
        tags: ['Javascript', 'Firefox Addon'],
    },
    {
        name: 'Portfolio',
        link: 'https://colinozanne.fr',
        description: 'My portfolio website where I showcase my projects and write about my experiences',
        img: '/colinozanne-homepage.png',
        tags: ['Nuxt.js 3', 'TypeScript', 'SCSS'],
    }
]

function openLink(link: string) {
    window.open(link, '_blank')
}
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
                @click.prevent="project.link && openLink(project.link)"
            >
                <img
                    :src="project.img"
                    :alt="project.name"
                />
                <div
                    class="project-info"
                >
                    <a
                        v-if="project.link"
                        :href="project.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        :ref="project.name"
                    >
                        {{ project.name }}
                    </a>
                    <span
                        v-else
                        id="project-name"
                    >
                        {{ project.name }}
                    </span>
                    <div
                        v-if="project.tags"
                        class="project-tags"
                    >
                        <span
                            v-for="tag in project.tags"
                            :key="tag"
                            class="tag"
                        >
                            {{ tag }}
                        </span>
                    </div>

                    {{ project.description }}
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "assets/css/main.scss";

section {
    min-height: 100%;
    width: calc(100% - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 2rem;

    @media (max-width: 768px) {
        margin: 1rem auto 5rem;
    }

    h1 {
        margin-top: 1rem;
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
            border-radius: .3rem;
            box-shadow: 5px 5px 1rem rgba(0, 0, 0, .5);
            transition: transform .2s ease;
            cursor: pointer;

            &:hover {
                transform: scale(1.03);
            }

            @media (max-width: 768px) {
                width: 100%;
                height: 15rem;
            }

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
                border-radius: .3rem;
            }

            div.project-info {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0;
                padding: 2rem 2rem 1rem;
                border-radius: 0 0 0 0;
                font-size: 1rem;
                font-weight: normal;
                text-align: left;
                color: #f0f0f0;
                background: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0) 0%,
                        rgba(0, 0, 0, .5) 30%,
                        rgba(0, 0, 0, .9) 100%
                );

                div.project-tags {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    gap: .3rem;
                    margin-bottom: 1rem;

                    span.tag {
                        padding: .2rem .5rem;
                        border-radius: 10rem;
                        background: darken($rose-red, 8%);
                    }
                }

                a,
                span#project-name {
                    margin-bottom: .5rem;
                    display: block;
                    font-size: 1.5rem;
                    font-weight: bold;
                    text-decoration: none;
                }
            }
        }
    }
}
</style>
