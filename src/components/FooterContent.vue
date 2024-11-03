<script setup lang="ts">
</script>

<template>
  <footer class="pt-12 bg-slate-800 text-white w-full flex flex-col gap-y-12 pb-14 px-16">
    <!-- Logo and Navigation Links -->
    <div class="flex flex-wrap justify-between items-center gap-y-6 gap-x-6">
      <div class="flex items-center">
        <img src="/src/assets/images/misc/footer.png" alt="Logo" class="h-7 w-36" />
      </div>
      <nav class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-base">
        <router-link to="/" class="hover:text-x-yellow transition duration-150 ease-in-out">Home</router-link>
        <router-link to="/blog" class="hover:text-x-yellow transition duration-150 ease-in-out">Blog</router-link>
        <router-link to="/about-us" class="hover:text-x-yellow transition duration-150 ease-in-out">About us</router-link>
        <router-link to="/contact" class="hover:text-x-yellow transition duration-150 ease-in-out">Contact us</router-link>
        <router-link to="/privacy" class="hover:text-x-yellow transition duration-150 ease-in-out">Privacy Policy</router-link>
      </nav>
    </div>

    <!-- Subscription Section -->
    <div class="bg-white/10 w-full py-16 px-8 flex flex-col md:flex-row justify-between items-center font-bold">
      <!-- Left side with description -->
      <p class="text-4xl mb-6 md:mb-0 md:text-left md:w-1/2">
        Subscribe to our newsletter to get the latest updates and news
      </p>

      <!-- Right side with form -->
      <div class="flex flex-col sm:flex-row gap-4 items-center w-full max-w-md md:w-1/2">
        <input
          type="email"
          placeholder="Enter Your Email"
          class="border border-neutral-600 p-4 w-full text-gray-700 placeholder-gray-500 bg-white/10"
        />
        <button class="bg-blue-500 text-white font-bold py-4 px-5 rounded-none hover:bg-x-yellow transition duration-150 ease-in-out">
          Subscribe
        </button>
      </div>
    </div>

    <!-- Contact Information and Social Media Links -->
    <div class="flex flex-wrap justify-between items-start gap-y-4 gap-x-6">
      <div class="text-sm">
        <p>Finstreet 118, 2561 Fintown</p>
        <p>
          <a href="mailto:Hello@finsweet.com" class="hover:underline">Hello@finsweet.com</a>
          | 020 7993 2905
        </p>
      </div>
      <div class="flex gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="/src/assets/images/misc/facebook.png" class="h-6 w-6" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <img src="/src/assets/images/misc/twitter.png" class="h-6 w-6" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/src/assets/images/misc/instagram.png" class="h-6 w-6" alt="Instagram" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="/src/assets/images/misc/linkedin.png" class="h-6 w-6" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </footer>
</template>
