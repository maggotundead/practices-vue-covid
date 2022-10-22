<template>
    <h1>{{ newsTitle }}</h1>
    <p>
        news text
    </p>
</template>

<script>
    const News = {
        data() {
            return {
                newsTitle: 'news title',
            }
        },
    }
    export default News
</script>