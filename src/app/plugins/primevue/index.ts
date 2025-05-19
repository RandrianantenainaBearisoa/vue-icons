import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

export default function setupPrimeVue(app: any) {
    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
    });

    app.component('PrimevueTabs', Tabs);
    app.component('PrimevueTabList', TabList);
    app.component('PrimevueTab', Tab);
    app.component('PrimevueTabPanels', TabPanels);
    app.component('PrimevueTabPanel', TabPanel);
}