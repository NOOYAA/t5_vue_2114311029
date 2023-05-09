const app = Vue.createApp({
    data() {
        return {
            nama: "Rafi Noor Islami",
            NIM: "2114311029",
            image: "assets/images/WhatsApp Image 2023-04-29 at 11.20.26 PM-modified.png",
            alt: "Rafi Photo",
            bio: "Hello👋",
            existence: true,
            label: "hide"
        }
    },
    methods: {
        existenceContent() {
            if (this.existence == true) {
                this.existence = false,
                this.label = "Show"
            } else {
                this.existence = true,
                this.label = "Hide"
            }
        }
    }
})
