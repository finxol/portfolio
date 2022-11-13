<script setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <div class="error">
        <h1>{{ error.statusCode }}</h1>
        <h2>{{ error.message }}</h2>
        <button @click="handleError">Go Home</button>
    </div>
</template>
