<template>
    <h1>{{ newsTitle }}</h1>
    <p>
        news text
    </p>
</template>

<script>
    const NewsPage = {
        data() {
            return {
                newsTitle: 'news title',
            }
        },
    }
    export default NewsPage
</script>