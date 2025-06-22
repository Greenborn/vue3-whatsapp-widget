# Vue3 WhatsApp Widget

Este componente tiene como objetivo la posibilidad de incorporar el clásico widget de WhatsApp en su proyecto Vue


# Instalación
```npm i @greenborn/vue3-whatsapp-widget@latest```

# Uso

En main.js

```

import { VueWhatsAppWidget } from '@greenborn/vue3-whatsapp-widget'

createApp(App).use(VueWhatsAppWidget).mount('#app')

```


En App.vue incluir:

```
<template>
    <CustomCursor phone="542494000001" :quick_replies="quick_replies" />
</template>

<script setup>
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

```