<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto px-4 h-96 bg-white p-8 flex justify-center items-center">
    <div class="box-content h-96 w-11/12 p-4 bg-yellow-100 flex">
      <!-- Left Section -->
      <div class="flex flex-col justify-center w-2/5 border-r border-gray-300 p-24">
        <!-- Title Section -->
        <div class="text-lefty mb-8">
          <h2 class="text-xl mb-2">TESTIMONIALS</h2>
          <h1 class="text-3xl font-bold mb-2">What people say about our blog</h1>
          <p class="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex flex-col justify-center w-3/5 p-24">
        <!-- Testimonial Content -->
        <div class="flex flex-col space-y-10 pe-10 mb-20">
          <!-- Testimonial Text -->
          <div class="text-lg">
            <p class="text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        <!-- Author and Navigation Buttons Section -->
        <div class="flex justify-between items-center">
          <!-- Author Section -->
          <div class="flex items-center space-x-4">
            <img src="/src/assets/images/misc/man-with-glasses.png" alt="author" class="w-12 h-12 rounded-full" />
            <div>
              <div class="text-lg font-bold">Jonathan Vallem</div>
              <div class="text-gray-600">New York, USA</div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex space-x-2">
            <button
              class="bg-black text-white px-4 py-2 text-lg hover:text-black text-bold hover:bg-white transition duration-100 rounded-full">←</button>
            <button
              class="bg-black text-white px-4 py-2 text-lg hover:text-black text-bold hover:bg-white transition duration-100 rounded-full">→</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
