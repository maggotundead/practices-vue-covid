<template>
    <v-card max-width="300" variant="tonal" :class="' summary-card ma-3 pt-6 ' + bgColor" dard outlined tile>
        <v-card-item>
            <div class="icon-wrapper">
                <v-icon>{{ cardIcon }}</v-icon>
            </div>
            <v-card-title class="headline text-bold">
                <!-- <span class="count" :title="cardAmountNew + 'last day' ">
                    {{ cardAmount }}
                </span> -->
                <span class="count">
                    {{ cardAmount }} / {{ cardAmountNew }} new
                </span>
            </v-card-title>
            <v-card-subtitle class="text-center text-bold">
                {{ cardTitle}}
            </v-card-subtitle>
        </v-card-item>

        <!-- <v-card-text>
            This is content
        </v-card-text> -->
    </v-card>
</template>

<script>
    const StatCard = {
        data() {
            return {

            }
        },
        props: {
            bgColor: String,
            cardIcon: String,
            cardTitle: String,
            cardAmount: Number,
            cardAmountNew: Number,
        }
    }

    export default StatCard
</script>

<style scoped>
    .text-bold {
        font-weight: 700;
    }
    .icon-wrapper > .v-icon {
        margin: auto;
        width: 100%;
        font-size: 2rem;
    }
    .summary-card {
        width: 100%;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0, .25);
    }
    .count {
        width: 100%;
        text-align: center;
        display: block;
    }
</style>