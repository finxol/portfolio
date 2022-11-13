<script setup lang="ts">
const contactContainer = ref(null)

const contacts = [
    {
        name: 'Email',
        link: 'mailto:contact@colinozanne.fr',
        icon: 'fa-solid fa-envelope',
        details: 'Contact me by email',
    },
    {
        name: 'GitHub',
        link: 'https://github.com/finxol',
        icon: 'fa-brands fa-github',
        details: 'See my projects on GitHub',
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/colin-ozanne-5b1b3b1b3/',
        icon: 'fa-brands fa-linkedin',
        details: 'See my profile on LinkedIn',
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/finxol',
        icon: 'fa-brands fa-twitter',
        details: 'Follow me on Twitter',
    },
]

const open = (contact: any) => {
    if (contactContainer) {
        const contactElementAside = document.querySelector(`div#${contact.name}`)
        const contactDetails = document.querySelector(`aside.contact-details`)

        if (contactElementAside?.classList.contains('open')) {
            // @ts-ignore
            contactContainer.value.classList.remove('open')
            contactElementAside.classList.remove('open')
            contactDetails.classList.remove('open')
        } else {
            // @ts-ignore
            contactContainer.value.classList.add('open')
            contactElementAside.classList.add('open')
            contactDetails.classList.add('open')
        }


        const asides = document.querySelectorAll('div.contact-element-aside')
        asides.forEach((aside) => {
            if (aside.id !== contact.name) {
                aside.classList.remove('open')
            }
        })
    }
}
</script>

<template>
    <section>
        <h1>Contact</h1>
        <div
            id="contacts"
            ref="contactContainer"
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
        >
            <div
                v-for="contact in contacts"
                :key="contact.name"
                :id="contact.name"
                class="contact-element-aside"
                ref="contactElementAside"
            >
                <h2>
                    {{ contact.details }}
                </h2>
                <a
                    :href="contact.link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {{ contact.link }}
                </a>
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
    gap: clamp(.5rem, 2vh, 1rem);
    justify-content: center;
    align-items: center;
    height: 100%;

    * {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 5rem;
        font-weight: bolder;
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
        transition: height, padding;
        transition-duration: .5s;
        transition-timing-function: ease-in-out;
        overflow: hidden;

        &.open {
            height: 15rem;
            padding: 1rem;
            border: 5px solid lighten($dark-blue, 20%);
        }

        div.contact-element-aside {
            justify-content: space-between;
            align-content: center;
            height: 100%;
            display: none;

            &.open {
                display: flex;
            }
        }
    }
}
</style>
