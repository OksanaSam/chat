<template>
  <div>
    <button @click="createChatRoom()" class="button">Create New Chat Room</button>
    <p>hello</p>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
  data() {
    return { 
        chats: [] 
    }
  },
  firestore() {
    return { 
        chats: db.collection('chats').where('owner', '==', this.uid) 
    }
  },
  methods: {
      async createChatRoom() {
          const newChat = await db.collection('chats').add({
              createdAt: Date.now(),
              owner: this.uid,
              members: [this.uid]
          })

            console.log(newChat)
      }


      
  },
  props: ['uid']

};
</script>