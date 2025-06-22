<template>
  <div id="vwwb-widget-wrapper">
    <div id="vwwb-widget-window" v-if="show_window" style="display: flex;">
      <div id="vwwb-quick-replies-row" v-for="quick_reply in quick_replies">
        <button class="vwwb-reply-button" @click="setQuickReply(quick_reply)">{{quick_reply.text}}</button>
      </div>
      
      <div id="vwwb-main-row">
        <div id="vwwb-default-text">
          <input v-model="user_text" />
        </div>
        <button id="vwwb-send-button" @click="send">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="m13.761 12.01l-10.76-1.084L3 4.074a1.074 1.074 0 0 1 1.554-.96l15.852 7.926a1.074 1.074 0 0 1 0 1.92l-15.85 7.926a1.074 1.074 0 0 1-1.554-.96v-6.852z"></path>
          </svg>
        </button>
      </div>
    </div>
    <a id="vwwb-widget-button" @click="toggle">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 24 24">
        <path fill="#FFFFFF"
          d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28">
        </path>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(["phone", "quick_replies"])

const user_text = ref("")
const show_window = ref(false)
const phone = ref(props.phone)

function toggle(){
  show_window.value = !show_window.value
}

function setQuickReply(quick_reply){
  user_text.value = quick_reply.text
  phone.value     = (quick_reply?.phone) ? quick_reply.phone : props.phone
}

onMounted(() => {
  document.addEventListener('click', (event) => {
    const excludedElements = [
        document.getElementById('vwwb-widget-window'),
        document.getElementById('vwwb-main-row'),
        document.getElementById('vwwb-default-text'),
        document.getElementById('vwwb-send-button'),
        document.getElementById('vwwb-widget-button'),
    ]

    let found = true
    for (let i=0; i < excludedElements.length; i++){
      if (excludedElements[i] !== null && excludedElements[i].contains(event.target)){
        found = false
        return
      }
    }
    if (!found) return
    
    show_window.value = false
  })
})

function send(){
  window.open("https://api.whatsapp.com/send/?phone="+phone.value+"&text="+encodeURI(user_text.value)+"&type=phone_number&app_absent=0", '_blank')
}
</script>

<style scoped>
#vwwb-send-button{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #25d366;
}

#vwwb-default-text{
  display: flex;
  font-size: 0.85rem;
  color: #737373;
  border: 1px solid rgba(209, 213, 219, 1);
  align-items: center;
  justify-content: flex-start;
  border-radius: 6rem;
  width: 80%;
  height: auto;
  padding: 0.75rem 1rem;
}

#vwwb-default-text input{
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
}

#vwwb-main-row{
  display: flex;
  gap: 0.75rem;
}

.vwwb-reply-button{
  cursor: pointer;
  padding: 8px 16px;
  border: none;
  border-radius: 3rem;
  font-size: 0.85rem;
  background-color: #F2F2F2;
  color: rgb(51 65 85);
}

#vwwb-quick-replies-row{
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

#vwwb-widget-window{
  border-top: 10px solid #25d366;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  align-items: left;
  background-color: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 0.75rem;
  padding: 20px 16px 12px 16px;
  position: relative;
  bottom: 15px;
  justify-content: center;
}

#vwwb-widget-button{
  position: relative;
  bottom: 0;
  background-color: #25d366;
  width: 2.5rem;
  height: 2.5rem;
  padding: .7rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}

#vwwb-widget-wrapper{
  position: fixed;
  bottom: 0;
  padding: 20px;
  width: clamp(200px, calc(100% - 40px), 400px);
  color: rgba(51, 65, 85, 1);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  right: 0;
  align-items: flex-end;
  font-family: "inter-variable", sans-serif;
}
</style>