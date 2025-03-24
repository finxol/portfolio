<script setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="error">
        <h2>{{ error.message }}</h2>
        <h1>Error {{ error.statusCode }}</h1>
        <button @click="handleError">Go Home</button>
    </div>
</template>

<style scoped lang="scss">
div.error {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;

    h1, h2 {
        margin: 0;
    }

    h2 {
        font-size: 1.5rem;
        text-transform: capitalize;
    }

    h1 {
        font-size: 5rem;
    }

    button {
        margin-top: 5rem;
        padding: .5rem 1rem;
        font-size: 1rem;
        background-color: #333;
        text-transform: uppercase;
        color: #fff;
        border: none;
        border-radius: .5rem;
        cursor: pointer;
    }
}
</style>
