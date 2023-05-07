const app = Vue.createApp({
    data() {
        return {
            nama: "Rafi Noor Islami",
            NIM: "2114311029",
            image: "WhatsApp Image 2023-04-29 at 11.20.26 PM-modified.png",
            alt: "Rafi Photo",
            bio: "Hello👋",
            hide: true
        }
    },
    methods: {
        hideContent() {
            if (this.hide == true) {
                this.hide = false 
            } else {
                this.hide = true
            }
        }
        
    }
})
