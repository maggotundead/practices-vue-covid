<template>
    <h1>{{ countriesTitle }}</h1>
    <p>
        Countries text
    </p>
</template>

<script>
    const Countries = {
        data() {
            return {
                countriesTitle: 'Countries stats',
            }
        }
    }
    export default Countries
</script>