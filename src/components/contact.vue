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
                  <label for="name" class="text-base font-bold text-primary">Nama</label>
                  <input type="text" id="name" class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div class="mb-8 w-full px-4">
                  <label for="email" class="text-base font-bold text-primary">Email</label>
                  <input type="email" id="email" class="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div class="mb-8 w-full px-4">
                  <label for="message" class="text-base font-bold text-primary">Message</label>
                  <textarea type="email" id="email" class="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
                </div>
                <div class="w-full px-4">
                  <button class="w-full rounded-full bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">Send</button>
                </div>
              </div>
            </form>
          </div>
        </section>
</template>

<script setup>
</script>