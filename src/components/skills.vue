<template>
  <section id="skills" class="px-10 pt-20 bg-back-900">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="mb-10 w-full px-4 lg:w-1/2">
          <h4 class="mb-3 text-lg font-bold uppercase text-primary">
            Technical Skills
          </h4>
          <h3
            class="mb-4 max-w-md text-2xl font-bold text-slate-100 lg:text-3xl"
          >
            Front-End 🎨
          </h3>
          <p class="max-w-xl text-base font-medium text-secondary lg:text-lg">
            HTML, CSS, Tailwind-CSS, Javascript (ES6), Typescript, Vue, Vuetify,
            Vite
          </p>
        </div>
        <div class="w-full px-4 lg:w-1/2">
          <h3
            class="mb-4 text-2xl font-semibold text-white lg:pt-10 lg:text-3xl"
          >
            Back-End 🛠️
          </h3>
          <p class="mb-6 text-base font-medium text-secondary lg:text-lg">
            Nodejs, Express, C#, .Net Core, RESTful API, Authentication,
            Validation, Security, Object Relational Mapping, Relational
            Database, NoSql Database
          </p>
        </div>
        <div class="w-full px-4 lg:w-1/2">
          <h3
            class="mb-4 text-2xl font-semibold text-white lg:pt-10 lg:text-3xl"
          >
            Others 💻
          </h3>
          <p class="mb-6 text-base font-medium text-secondary lg:text-lg">
            Unit Testing, Docker, Package Manager, Git, Github, Debugging,
            GitHub Actions (CI/CL), Github Pages, C++, Python, Java
          </p>
          <div class="flex items-center">
            <!-- github -->
            <a
              href="https://github.com/zainab7681051/"
              target="_blank"
              class="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:bg-primary hover:text-back-600 rounded-xl transition-all cursor-pointer duration-300 ease-linear;"
              title="GitHub"
            >
              <icon icon="akar-icons:github-fill" width="24" height="24"></icon>
            </a>
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/zainab-sanar/"
              target="_blank"
              class="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:bg-primary hover:text-back-600 rounded-xl transition-all cursor-pointer duration-300 ease-linear;"
              title="LinkedIn"
            >
              <icon icon="akar-icons:linkedin-box-fill" width="24" height="24">
              </icon>
            </a>
            <!-- Freelancer -->
            <a
              href="https://www.freelancer.com/u/zainab76810510"
              target="_blank"
              class="mr-3 flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:bg-primary hover:text-back-600 rounded-xl transition-all cursor-pointer duration-300 ease-linear;"
              title="Freelancer.com"
            >
              <icon
                icon="simple-icons:freelancer"
                width="24"
                height="24"
              ></icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
