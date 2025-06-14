import WhatsAppWidget from './WhatsAppWidget.vue'

export const VueWhatsAppWidget = {
    install(Vue, options) {
        Vue.component("WhatsAppWidget", WhatsAppWidget);
    }
}