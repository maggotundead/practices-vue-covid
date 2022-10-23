<template>
    <h1>{{ countriesTitle }}</h1>
    <p>
        Countries text
    </p>
</template>

<script>
    const CountriesPage = {
        data() {
            return {
                countriesTitle: 'Countries stats',
            }
        }
    }
    export default CountriesPage
</script>