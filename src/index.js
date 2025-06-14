import WhatsAppWidget from './WhatsAppWidget.vue'

import './vue3-whatsapp-widget-style.css'

export const WhatsAppWidget = {
    install(Vue, options) {
        Vue.component("WhatsAppWidget", WhatsAppWidget);
    }
}