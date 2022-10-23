<template>
    <h1 class="display-1">{{ homeTitle }}</h1>
    <p>
        Home text
    </p>
    <br/>
    <hr/>
    <br/>

    <section>
        <v-row align="center" justify="center">
            <stat-card
                v-for="card in cards" :key="card"
                :cardTitle="card.title"
                :bgColor="card.bgColor"
                :cardAmount="card.amount"
                :cardAmountNew="card.amountNew"
                :cardIcon="card.icon"
            ></stat-card>
        </v-row>
    </section>
    <section>
        <LineChart />
    </section>
</template>

<script>
    import StatCard from '../components/StatCard.vue'
    import LineChart from '../components/LineChart'

    const HomePage = {
        data() {
            return {
                homeTitle: 'World Summary stats',
                cards: [
                    { title: 'total cases', bgColor: 'primary lighten-2', amount: 1000, amountNew: 200, icon: 'mdi-alert-box' },
                    { title: 'deaths', bgColor: 'red accent-2', amount: 100, amountNew: 100, icon: 'mdi-emoticon-dead' },
                    { title: 'recoveries', bgColor: 'teal lighten-1', amount: 900, amountNew: 200, icon: 'mdi-hospital-box' },
                ],
            }
        },
        components: {
            StatCard,
            LineChart
        },
    }
    export default HomePage
</script>