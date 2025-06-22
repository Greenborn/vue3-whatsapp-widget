<script setup>
import WhatsAppWidget from './components/WhatsAppWidget.vue'
import { ref } from 'vue'

const quick_replies = ref([
  {
    text: "Quick reply 1",
    phone: "542494000000"
  },
  {
    text: "Quick reply 2",
    phone: "542494000001"
  },
])
</script>

<template>
  <WhatsAppWidget phone="542494000000" :quick_replies="quick_replies" />
  <a href="https://github.com/Greenborn/vue3-whatsapp-widget"> GitHub</a>
  <button>Botón</button>
</template>

<style scoped>

</style>
