<script setup>
import project from "./project.vue"
</script>

<template>
    <section id="projects" class="px-10 pt-20 bg-back-900">
          <div class="container">
            <div class="w-full px-4">
              <div class="mx-auto mb-16 max-w-xl text-center">
                <h4 class="mb-2 text-lg font-semibold text-primary">Projects</h4>
                <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Finished Works</h2>
              </div>
            </div>
            <div class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
              
            <project title="Image-Genreator" 
            description="A node express app for generating input-based images using openAI technology." 
            imgSrc="open-ai-image-generator-api.png"
            githubUrl="https://github.com/zainab7681051/image-generation-app-with-openAI/" 
            appUrl="https://openai-images.onrender.com/"></project>

            <project title="Free-Documentaries" 
            description="A web App for viewing free documentaries fetched from various YouTube Channels." 
            imgSrc="free-documentaries.png"
            githubUrl="https://github.com/zainab7681051/free-documentaries" 
            appUrl="https://free-documentaries.onrender.com/"></project>

            <project title="Pizza-Delivery" 
            description="A wep app for pizzerias. A user can log in and order pizza's and their order is saved in the cloud database." 
            imgSrc="pizza-delivery.png"
            githubUrl="https://github.com/zainab7681051/pizza-delivery" 
            appUrl="https://pizza-delivery-5201d.web.app/"></project>

            <project title="todo app" 
            description="simple todo app for keepig track of your tasks and objectives." 
            imgSrc="todolist.png"
            githubUrl="https://github.com/zainab7681051/simple-to-do-list-app"
            appUrl=""></project>
            </div>
          </div>
        </section>    
</template>

