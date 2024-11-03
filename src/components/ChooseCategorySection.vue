<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto h-96 bg-white text-black mt-8 items-center justify-center">
    <div class="flex flex-wrap justify-center gap-8">

      <!-- Kategori 1 -->
      <router-link to="/category">
        <div
          class="w-80 h-64 p-4 flex flex-col justify-center items-left bg-white border border-gray-300 shadow-md text-left transform transition duration-300 hover:bg-x-blue group">
          <img src="/src/assets/images/misc/business.png" alt="Image of Floyd Miles"
            class="w-12 h-12 rounded-lg bg-x-lightyellow mr-3" />
          <h3 class="text-lg font-medium text-gray-800 mt-1 group-hover:text-white">Business</h3>
          <p class="text-sm text-gray-500 mt-1 group-hover:text-white">Lorem ipsum dolor sit amet,<br>consectetuer
            adipiscing elit.</p>
          <div class="flex justify-center gap-5 mt-3">
          </div>
        </div>
      </router-link>

      <!-- Kategori 2 -->
      <router-link to="/category">
        <div
          class="w-80 h-64 p-4 flex flex-col justify-center items-left bg-white border border-gray-300 shadow-md text-left transform transition duration-300 hover:bg-x-blue group">
          <img src="/src/assets/images/misc/start.png" alt="Image of Dianne Russell"
            class="w-12 h-12 rounded-lg bg-x-lightyellow mr-3" />
          <h3 class="text-lg font-medium text-gray-800 mt-1 group-hover:text-white">Startup</h3>
          <p class="text-sm text-gray-500 mt-1 group-hover:text-white">Lorem ipsum dolor sit amet,<br>consectetuer
            adipiscing elit.</p>
          <div class="flex justify-center gap-5 mt-3">
          </div>
        </div>
      </router-link>

      <!-- Kategori 3 -->
      <router-link to="/category">
        <div
          class="w-80 h-64 p-4 flex flex-col justify-center items-left bg-white border border-gray-300 shadow-md text-left transform transition duration-300 hover:bg-x-blue group">
          <img src="/src/assets/images/misc/econom.png" alt="Image of Jenny Wilson"
            class="w-12 h-12 rounded-lg bg-x-lightyellow mr-3" />
          <h3 class="text-lg font-medium text-gray-800 mt-1 group-hover:text-white">Economy</h3>
          <p class="text-sm text-gray-500 mt-1 group-hover:text-white">Lorem ipsum dolor sit amet,<br>consectetuer
            adipiscing elit.</p>
          <div class="flex justify-center gap-5 mt-3">
          </div>
        </div>
      </router-link>

      <!-- Kategori 4 -->
      <router-link to="/category">
        <div
          class="w-80 h-64 p-4 flex flex-col justify-center items-left bg-white border border-gray-300 shadow-md text-left transform transition duration-300 hover:bg-x-blue group">
          <img src="/src/assets/images/misc/technology.png" alt="Image of Leslie Alexander"
            class="w-12 h-12 rounded-lg bg-x-lightyellow mr-3" />
          <h3 class="text-lg font-medium text-gray-800 mt-1 group-hover:text-white">Technology</h3>
          <p class="text-sm text-gray-500 mt-1 group-hover:text-white">Lorem ipsum dolor sit amet,<br>consectetuer
            adipiscing elit.</p>
          <div class="flex justify-center gap-5 mt-3">
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
