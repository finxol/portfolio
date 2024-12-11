<script setup lang="ts">
const skills = [
    {
        name: 'HTML / CSS',
        icon: 'fa-brands:html5',
        level: 4.5,
    },
    {
        name: 'TypeScript',
        icon: 'fa-brands:js',
        level: 4.5,
    },
    {
        name: 'Nuxt',
        icon: 'fa-brands:vuejs',
        level: 4,
    },
    {
        name: 'Node',
        icon: 'fa-brands:node-js',
        level: 4.5,
    },
    {
        name: 'Express',
        icon: 'fa-brands:node-js',
        level: 4.5,
    },
    {
        name: 'Git',
        icon: 'fa-brands:git-alt',
        level: 3.5,
    },
    {
        name: 'Docker',
        icon: 'fa-brands:docker',
        level: 3.5,
    },
    {
        name: 'Linux',
        icon: 'fa-brands:linux',
        level: 4,
    },
    {
        name: 'Rust',
        icon: 'fa-brands:rust',
        level: 1,
    },
    {
        name: 'Python',
        icon: 'fa-brands:python',
        level: 3.5,
    }
]

const lowerStar = (level: number) => {
    return Math.floor(level)
}

const halfStar = (level: number) => {
    return level % 1 >= 0.5
}

const upperStar = (level: number) => {
    return Math.ceil(level)
}
</script>

<template>
    <section>
        <div
            id="container"
        >
            <div
                id="skills"
            >
                <h1>Skills</h1>
                <div
                    id="skills-container"
                >
                    <div
                        v-for="skill in skills"
                        :key="skill.name"
                        class="skill"
                    >
                        <span>
                            <Icon
                                :name="skill.icon"
                                size="1em"
                            />
                        </span>
                        <span>
                            {{ skill.name }}
                        </span>
                        <span>
                            <Icon
                                name="fa6-solid:star"
                                v-for="i in lowerStar(skill.level)"
                                :key="i"
                                size="1em"
                            />
                            <Icon
                                name="fa6-solid:star-half-stroke"
                                v-if="halfStar(skill.level)"
                                size="1em"
                            />
                            <Icon
                                name="fa6-regular:star"
                                v-for="i in (5 - upperStar(skill.level))"
                                :key="i"
                                size="1em"
                            />
                        </span>
                    </div>
                </div>
            </div>

            <div
                id="experiences"
            >
                <h1>Experience</h1>

                <p>
                    Work in progress...
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    min-height: calc(100% - 2rem);
    width: calc(100% - 2rem);
    margin: 0 auto 2rem;

    h1 {
        margin: 0;
        padding-top: 3rem;
        font-size: 3rem;
        text-align: center;
    }

    div#container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 100%;
        margin: 1rem 0;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }

        div#skills {
            height: 100%;
            width: 100%;
            border-right: 1px solid rgba(255, 255, 255, 0.1);

            @media (max-width: 768px) {
                border-right: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            div#skills-container {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1rem;
                justify-content: center;
                align-items: center;
                margin-top: 2rem;

                @media (max-width: 768px) {
                    gap: 0.5rem;
                }

                div.skill {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 10rem;
                    height: 9rem;
                    padding: 0.5rem;
                    border: none;
                    border-radius: 0.5rem;
                    background-color: rgba(255, 255, 255, 0.1);
                    text-align: center;

                    @media (max-width: 768px) {
                        width: 7rem;
                        height: 6.5rem;
                    }

                    span {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    span:first-child {
                        font-size: 2rem;

                        @media (max-width: 768px) {
                            font-size: 1.5rem;
                        }
                    }

                    span:nth-child(2) {
                        font-size: 1.5rem;

                        @media (max-width: 768px) {
                            font-size: 0.9rem;
                        }
                    }

                    span:last-child {
                        padding-top: .5rem;
                        font-size: 1.1rem;

                        @media (max-width: 768px) {
                            font-size: 0.7rem;
                        }
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
