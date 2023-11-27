import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
    theme: {
        themes: {
            light: {
                primary: '#5e88fc',      // Soft Blue
                secondary: '#ffb88c',    // Peachy Orange
                accent: '#6ed3cf',       // Turquoise
                error: '#ff7e67',        // Coral
                info: '#a4a4a4',         // Light Gray
                success: '#ffcc29',      // Yellow
                background: '#f4f4f4',   // Light Gray
                cardBackground: '#dfe6e9', // Cloudy Blue
                text: '#2d3436',         // Charcoal Black
                white: '#ffffff',        // White

                primary2: '#7F74EB',      // Lavender
                secondary2: '#FF7F50',    // Coral
                accent2: '#82E0AA',       // Mint Green
                error2: '#FF5733',        // Burnt Orange
                info2: '#AED6F1',         // Baby Blue
                success2: '#2ECC71',      // Emerald Green
                background2: '#F8F9F9',   // Light Gray
                cardBackground2: '#D6DBDF', // Silver
                text2: '#34495E',         // Dark Slate Gray
                white2: '#ECF0F1',        // White Smoke
            },
        },
    },
});
