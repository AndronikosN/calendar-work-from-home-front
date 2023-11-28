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
                primary: '#6A76AB',      // Periwinkle
                secondary: '#F9EBB2',    // Pale Gold
                accent: '#BFD7EA',       // Sky Blue
                error: '#FF6666',        // Light Coral
                info: '#DADADA',         // Light Gray
                success: '#8ED081',      // Sage Green
                background: '#F4F4F4',   // Platinum
                cardBackground: '#E1E7E8', // Powder Blue
                text: '#333333',         // Dark Charcoal
                white: '#FFFFFF',        // White

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
