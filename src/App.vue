<template>
  <v-app>
    <v-app-bar
      class="primary"
      dense
      dark
      app
    >
      <v-app-bar-nav-icon @click=" sidebar = !sidebar "></v-app-bar-nav-icon>

      <v-toolbar-title class="headline">
        <v-icon>mdi-virus</v-icon>
        Page title
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Country {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      class="primary"
      theme="dark"
      permanent
      app
      v-model="sidebar"
    >
      <!-- <v-list color="transparent" >
        <v-list-item prepend-icon="mdi-earth" title="World summary " ></v-list-item>
        <v-list-item prepend-icon="mdi-flag" title="Countries"></v-list-item>
        <v-list-item prepend-icon="mdi-newspaper" title="News"></v-list-item>
      </v-list> -->

      <v-list color="transparent">
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          link
          :to="item.link"
        >
          <v-icon>{{ item.icon }}</v-icon>
          <span>{{ item.title }}</span>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-main>
  </v-app>
</template>

<script >
  const App = {
    data() {
      return {
        sidebar: false,
        items: [
          { title: 'World summary', icon: 'mdi-earth', link: '/'},
          { title: 'Countries', icon: 'mdi-flag', link: '/countries'},
          { title: 'News', icon: 'mdi-newspaper', link: '/news'},
        ]
      }
    },

    watch: {
      $route(to, from) {
        console.log(to, from);
      }
    }

  }

  export default App
</script>


