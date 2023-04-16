
const { createApp } = Vue;

createApp ({
    data(){
        return{
            emails: []
        };
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
            const email = resp.data.responnse;
            this.emails.push(email);
            });
        }
    },
}).mount("#app");

/** API
https://flynn.boolean.careers/exercises/api/random/mail
*/