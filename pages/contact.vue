<script setup>
const contacts = reactive([
    {
        name: 'Email',
        link: 'mailto:contact@colinozanne.fr',
        linkText: 'contact@colinozanne.fr',
        icon: 'fa6-solid:envelope',
        details: 'Feel free to send me an email if you wish to get in touch.',
        show: false,
    },
    {
        name: 'GitHub',
        link: 'https://github.com/finxol',
        linkText: 'finxol',
        icon: 'fa-brands:github',
        details: 'I publish most of my work over on Github, so make sure to check it out!',
        show: false,
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/colin-ozanne-99594822a/',
        linkText: 'Colin Ozanne',
        icon: 'fa-brands:linkedin',
        details: "I'm also on LinkedIn, so feel free to connect with me there!",
        show: false,
    },
    {
        name: 'Mastodon',
        link: 'https://mamot.fr/@User038418',
        linkText: '@finxol',
        icon: 'fa-brands fa-mastodon',
        details: "These days, I'm mostly active on Mastodon.",
        show: false,
    }
])

const showModal = computed(() => contacts.some(contact => contact.show))

const openElement = computed(() => contacts.find(c => c.show))

const open = (contact) => {
    contacts.filter(c => c !== contact).forEach((c) => {
        c.show = false
    })
    contact.show = !contact.show
}
</script>

<template>
    <section>
        <h1>Contact</h1>
        <div
            id="contacts"
        >
            <div
                v-for="contact in contacts"
                :key="contact.name"
                class="contact-element"
                :class="{ open: contact.show }"
                @click="open(contact)"
            >
                <span>
                    <Icon
                        :name="contact.icon"
                    />
                </span>
                <span>
                    {{ contact.name }}
                </span>

            </div>
            <div
                class="contact-expanded-element"
            >
                <p
                    v-if="openElement?.details"
                >
                    {{ openElement.details }}
                </p>
                <a
                    v-if="openElement?.link"
                    :href="openElement.link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {{ openElement.linkText }}
                </a>
            </div>
        </div>
        <aside
            style="display: none"
            class="contact-details"
            :class="{ open: showModal }"
        >
            <div
                v-for="contact in contacts"
                :key="contact.name"
                class="contact-element-aside"
            >
                <div
                    v-if="contact.show"
                >
                    <h2>
                        {{ contact.details }}
                    </h2>
                    <a
                        :href="contact.link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ contact.linkText }}
                    </a>
                </div>
            </div>
        </aside>
    </section>
</template>

<style scoped lang="scss">
@use "assets/css/main.scss" as *;
@use "sass:color";

$container-width: clamp(30rem, 60vw, 60rem);

section {
    position: relative;
    z-index: 1;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, 5vh, 4rem);
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 2rem;
        justify-content: normal;
        gap: clamp(1.5rem, 5vh, 4rem);
    }

    * {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 5rem;
        font-weight: bolder;

        @media (max-width: 768px) {
            font-size: 3rem;
        }
    }

    div#contacts {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            "div1 div2 div3 div4"
            "open-area open-area open-area open-area";
        gap: 4rem;
        width: fit-content;
        transition: all .5s ease-in-out;

        @media (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-template-areas:
                "div1 div2"
                "div3 div4"
                "open-area open-area"
                "open-area open-area";
            gap: clamp(1rem, 5vw,2rem);
            justify-items: center;
            width: 90%;
        }

        div.contact-element {
            display: flex;
            flex-direction: column;
            gap: .2rem;
            height: 10rem;
            width: 10rem;
            justify-content: center;
            align-items: center;
            padding: 1.5rem 2rem;
            border-radius: 1rem;
            font-size: 2rem;
            background-color: #ffffff;
            color: #000000;
            cursor: pointer;

            @for $i from 1 through 4 {
                &:nth-child(#{$i}) {
                    grid-area: div#{$i};
                }
            }

            &.open {
                background-color: color.mix(#fff, $dark-blue, 20%);
                color: #ffffff;
            }
        }

        div.contact-expanded-element {
            grid-area: open-area;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
            text-align: center;

            p {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }

            a {
                display: inline-block;
                margin-top: 1rem;
                padding: .5rem 1rem;
                transition: all .2s ease-in-out;
                border-radius: .5rem;
                background-color: rgba(255, 255, 255, .75);
                color: $dark-blue;
                font-size: 1.5rem;
                font-weight: bold;
                text-decoration: none;

                &:hover {
                    background-color: $dark-blue;
                    color: #ffffff;
                }
            }
        }
    }

    aside.contact-details {
        height: 0;
        width: $container-width;
        color: #000000;
        background-color: #ffffff;
        border-radius: .2rem;
        border: 0 solid color.adjust($dark-blue, $lightness: 20%);
        transition: height, padding, border;
        transition-duration: .5s;
        transition-timing-function: ease-in-out;
        overflow: hidden;

        div.contact-element-aside {
            display: flex;
            flex-direction: column;

            &:not(:empty) {
                height: 100%;
            }

            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 1rem;
                height: calc(100% - 2rem);

                h2, a {
                    text-align: center;
                    height: max-content;
                }

                a {
                    width: max-content;
                    min-width: 30%;
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                h2 {
                    width: 65%;
                }
            }
        }
    }
}
</style>
