# Vue3 WhatsApp Widget

This component aims at the possibility of incorporating the classic WhatsApp widget into your Vue project.

# Instalación
```npm i @greenborn/vue3-whatsapp-widget@latest```

# Uso

In main.js

```

import { VueWhatsAppWidget } from '@greenborn/vue3-whatsapp-widget'

createApp(App).use(VueWhatsAppWidget).mount('#app')

```


In App.vue include:

```
<template>
    <CustomCursor phone="542494000001" :quick_replies="quick_replies" button_size="3rem" />
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

# Configuration Options

| Property | Data Type | Default Value | Description |
|-----------|-----------|-----------|-----------|
| phone | String   |  undefined  | Set the phone number associated with the WhatsApp account |
| quick_replies | Array   |  undefined  | Define Quick Reply configuration options (see Quick Replies annex) |
| button_size | String   |  50px  | Define the size of the button, values and units of the CSS standard must be used |

# Quick Replies
They are quick response options, for each of the items of the Array you must define:

| Property | Data Type | Default Value | Description |
|-----------|-----------|-----------|-----------|
| text | String   |  undefined  | Quick Response Text |
| phone | String   |  valor definido en propiedad "phone"  | Set a specific phone number for the selected option |

Example of parameter definition "quick_replies":
```
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

```

# Ex. in operation
- https://greenborn.com.ar

# Change log
- **0.1.13:** In English
- **0.1.12:** Improved documentation detailing the available configuration properties.
- **0.1.11:** Added ability to define quick_replies and button_size.