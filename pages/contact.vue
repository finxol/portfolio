<script setup>
const contacts = reactive([
    {
        name: 'Email',
        link: 'mailto:contact@colinozanne.fr',
        linkText: 'contact@colinozanne.fr',
        icon: 'fa-solid fa-envelope',
        details: 'Feel free to send me an email if you wish to get in touch.',
        show: false,
    },
    {
        name: 'GitHub',
        link: 'https://github.com/finxol',
        linkText: 'finxol',
        icon: 'fa-brands fa-github',
        details: 'I publish most of my work over on Github, so make sure to check it out!',
        show: false,
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/colin-ozanne-99594822a/',
        linkText: 'Colin Ozanne',
        icon: 'fa-brands fa-linkedin',
        details: "I'm also on LinkedIn, so feel free to connect with me there!",
        show: false,
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/finxol',
        linkText: '@_finxol',
        icon: 'fa-brands fa-twitter',
        details: "I'm not so much on Twitter anymore, but you can still follow me if you want to.",
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

const open = (contact) => {
    contacts.filter(c => c != contact).forEach((c) => {
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
                @click="open(contact)"
            >
                <span>
                    <font-awesome-icon
                        :icon="contact.icon"
                    />
                </span>
                <span>
                    {{ contact.name }}
                </span>

            </div>
        </div>
        <aside
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
@import "assets/css/main.scss";

$container-width: clamp(30rem, 60vw, 60rem);

section {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, 5vh, 4rem);
    justify-content: center;
    align-items: center;
    height: 100%;

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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: clamp(1rem, 2vw, 3rem);
        justify-content: space-between;
        align-items: center;
        width: $container-width;
        transition: all .5s ease-in-out;

        @media (max-width: 768px) {
            flex-direction: row;
            justify-content: center;
            width: 80%;
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
        }

    }

    aside.contact-details {
        height: 0;
        width: $container-width;
        color: #000000;
        background-color: #ffffff;
        border-radius: .2rem;
        border: 0 solid lighten($dark-blue, 20%);
        transition: height, padding, border;
        transition-duration: .5s;
        transition-timing-function: ease-in-out;
        overflow: hidden;

        &.open {
            height: 15rem;
            border-width: 5px;
        }

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
