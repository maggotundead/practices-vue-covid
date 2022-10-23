import { createVuetify } from 'vuetify'

import colors from 'vuetify/lib/util/colors'

// import '@mdi/font/css/materialdesignicons.css'

// @todo
export default createVuetify({
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.red.darken1, // #E53935
                    secondary: colors.red.lighten4, // #FFCDD2
                }
            },
            dark: {
                light: false,
                colors: {
                    primary: colors.red.darken1, // #E53935
                    secondary: colors.red.lighten4, // #FFCDD2
                }
            },
        },
    },
})
