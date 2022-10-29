<template>
    <section id="contact" class="px-10 pt-20 bg-back-900">
          <div class="container">
            <div class="w-full px-4">
              <div class="mx-auto mb-16 max-w-xl text-center">
                <h4 class="mb-2 text-lg font-semibold text-primary">Contact</h4>
                <h2 class="mb-4 text-3xl font-bold text-slate-100 sm:text-4xl lg:text-5xl">send an email</h2>
                <p class="text-md font-medium text-secondary md:text-lg">feel free to contact with me by sending me a message and I will reply as soon as possible.</p>
              </div>
            </div>
            <form>
              <div class="w-full lg:mx-auto lg:w-2/3">
                <div class="mb-8 w-full px-4">
                  <label for="name" class="text-base font-bold text-primary">Nama
                    </label>
                  <input type="text" v-model="name"
                  required
                  class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div class="mb-8 w-full px-4">
                  <label for="email" class="text-base font-bold text-primary">Email</label>
                  <input v-model="email"
                  required
                  type="email"
                  class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div class="mb-8 w-full px-4">
                  <label for="message" class="text-base font-bold text-primary">Message</label>
                  <textarea v-model="message"
                  required 
                  class="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  ></textarea>
                </div>
                <div class="w-full px-4">
                  <button id="btn" class="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg" @click.prevent="send()">Send</button>
                  <span v-for="er in errors" :key="er" class="text-red-400 md:text-lg m-2 block text-center">{{er}}</span>
                  <span v-if="sent" class="text-slate-100 md:text-lg m-2 block text-center">
                  🎉 message was succesfully sent! 🎉</span>
                </div>
              </div>
            </form>
          </div>
        </section>
</template>

<script>
import emailjs from '@emailjs/browser'
export default{
  data(){
    return {
      name:'',
      email:'',
      message:'',
      errors:{
        name:'',
        email:'',
        message:'',
        error:''
      },
      sent:false,
    }
  },

  methods:{
    async send(){
      const element = document.getElementById('btn')
      element.classList.add('cursor-progress');
      if (this.vali()){
       try {
          // statements
          this.errors={}
          this.sent=false
          const form = {
            from_name: this.name,
            from_email: this.email,
            message: this.message,
          }
          const data = {
            service_id: import.meta.env.VITE_SERVICE_ID,
            template_id: import.meta.env.VITE_TEMPLATE_ID,
            public_key: import.meta.env.VITE_PUBLIC_KEY,
          }
          const res=await emailjs.send(data.service_id, data.template_id, form, data.public_key)
          if(res.status==200)
          {
            this.sent=true
            this.name=''
            this.email=''
            this.message=''
          }
        } catch (e) {
          // statements
          console.log(e);
          if(res.status==400)
          {
            this.sent=false
            this.errors.error="an error occured. the email was not send."
          }
        }finally{
          element.classList.remove('cursor-progress');
        }
      }else{
        element.classList.remove('cursor-progress');
      }
    },
    vali(){
      if (this.name.length===0){
        this.errors.name='name is required'; 
        return false
      }else{
        this.errors.name='';
      }
      if(this.email.length===0){
        this.errors.email='email is required'; 
        return false
      }else if(!this.email.includes('@gmail.com')){
        this.errors.email='Email must be valid and in Gmail form'
        return false;
      }else{
        this.errors.email=''
      }
      if (this.message.length===0){
        this.errors.message='message is required'; 
        return false
      }else{
        this.errors.message='';
      }
      return true
    },
  },
}
</script>
