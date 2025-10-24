// refactored bootstrap: entry mounts app and wires plugins without altering behavior
import { createApp } from 'vue';
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';

import { router } from '@/views/router';

import { appStarted } from '@/common/services/appStarted.ts';

import App from './core/App.vue';

import '@fontsource/abel/index.css';
import './core/styles/style.css';

appStarted();

const app = createApp(App);
app.use(router)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: {
                darkModeSelector: false,
                cssLayer: {
                    name: 'primevue',
                    order: 'theme, base, primevue',
                },
            },
        },
    })
    .mount('#app');
