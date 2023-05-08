<script>
import project from "./project.vue"
import allProjects from "../projects.json"
export default{
    data(){
        return{
            data:[]
        }
    },
    components: {
    project
  },
  async mounted(){
    try{
        this.data=allProjects
    }catch(e){
        console.error("mounted method",e)
    }
  }
}
</script>

<template>
    <section class="px-10 pt-20 bg-back-900">
          <div class="container">
            <div class="w-full px-4">
              <div class="mx-auto mb-16 max-w-xl text-center">
                <h4 id="projects" class="mb-2 text-lg font-semibold text-primary">Projects</h4>
                <h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Finished Works</h2>
              </div>
            </div>
            <div class="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
            
            <project 
            v-for="(d,i) in data"
            :key="i"
            :title="d.title" 
            :description="d.description" 
            :imgSrc="d.imgSrc"
            :githubUrl="d.githubUrl"
            :appUrl="d.appUrl"> 
            </project>
            </div>
          </div>
        </section>    
</template>

