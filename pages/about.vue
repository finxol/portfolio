<script setup lang="ts">
const skills = [
    {
        name: 'HTML / CSS',
        icon: 'fa-brands fa-html5',
        level: 4.5,
    },
    {
        name: 'TypeScript',
        icon: 'fa-brands fa-js',
        level: 4.5,
    },
    {
        name: 'Nuxt',
        icon: 'fa-brands fa-vuejs',
        level: 4,
    },
    {
        name: 'Node',
        icon: 'fa-brands fa-node-js',
        level: 4.5,
    },
    {
        name: 'Express',
        icon: 'fa-brands fa-node-js',
        level: 4.5,
    },
    {
        name: 'MongoDB',
        icon: 'fa-brands fa-mongodb',
        level: 3,
    },
    {
        name: 'Git',
        icon: 'fa-brands fa-git-alt',
        level: 3.5,
    },
    {
        name: 'Docker',
        icon: 'fa-brands fa-docker',
        level: 3.5,
    },
    {
        name: 'Linux',
        icon: 'fa-brands fa-linux',
        level: 4,
    },
    {
        name: 'Rust',
        icon: 'fa-brands fa-rust',
        level: 2,
    },
    {
        name: 'Python',
        icon: 'fa-brands fa-python',
        level: 4,
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
                            <font-awesome-icon
                                :icon="skill.icon"
                            />
                        </span>
                        <span>
                            {{ skill.name }}
                        </span>
                        <span>
                            <font-awesome-icon
                                icon="fa-solid fa-star"
                                v-for="i in lowerStar(skill.level)"
                                :key="i"
                            />
                            <font-awesome-icon
                                icon="fa-solid fa-star-half-alt"
                                v-if="halfStar(skill.level)"
                            />
                            <font-awesome-icon
                                icon="fa-regular fa-star"
                                v-for="i in (5 - upperStar(skill.level))"
                                :key="i"
                            />
                        </span>
                    </div>
                </div>
            </div>

            <div
                id="experiences"
            >
                <h1>Experience</h1>
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

                    span {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    span:first-child {
                        font-size: 2rem;
                    }

                    span:nth-child(2) {
                        font-size: 1.5rem;
                    }

                    span:last-child {
                        padding-top: .5rem;
                        font-size: 1.1rem;
                    }
                }
            }
        }
    }
}
</style>
