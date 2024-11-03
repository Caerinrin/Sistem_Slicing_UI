<script setup lang="ts">
import CallActionSection from '@/components/CallActionSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <div class="container mx-auto max-w-full overflow-hidden">
      <div class="pt-80 px-32 relative text-black">
        <!-- About Us Section -->
        <div class="absolute flex text-black z-10 left-32 -translate-y-56 translate-x-28">
          <div class="about-us bg-white p-16 max-w-[624px]">
            <p class="text-base tracking-wider">ABOUT US</p>
            <h2 class="tracking-[-2px] leading-[64px] font-sen font-bold text-5xl items-start flex self-stretch">
              We are a team of content writers who share their learnings
            </h2>
          </div>
          <div class="about-us">
            <p class="text-base text-neutral-600 leading-7 w-[60%] p-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>

        <!-- Blog Static -->
        <section
          class="flex relative flex-col items-start px-20 pt-64 max-w-full min-h-[444px] max-md:px-5 max-md:pt-24">
          <img loading="lazy" src="/src/assets/images/misc/people.png" alt="Background image"
            class="object-cover absolute inset-0 size-full" />
          <div class="flex relative flex-col max-w-full w-[862px]">
            <div class="px-12 py-8 mt-7 max-w-full bg-blue-600 w-[630px] max-md:px-5">
              <div class="flex gap-5 max-md:flex-col">
                <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-white max-md:mt-10">
                    <p class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">12+</p>
                    <p class="text-base leading-7">Blogs Published</p>
                  </div>
                </div>
                <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-white max-md:mt-10">
                    <p class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">18K+</p>
                    <p class="text-base leading-7">Views on Finsweet</p>
                  </div>
                </div>
                <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-white max-md:mt-10">
                    <p class="text-6xl font-bold tracking-tighter leading-none max-md:mr-2.5 max-md:text-4xl">30K+</p>
                    <p class="text-base leading-7">Total active Users</p>
                  </div>
                </div>
              </div>
              <!-- Yellow line positioned here -->
              <div class="absolute top-[100%] -ml-12 right-1/5 w-4/5 h-4 bg-yellow-400 z-20 transform -translate-y-1/2">
              </div>
            </div>
            <div class="flex flex-wrap gap-px"></div>
          </div>
        </section>

        <!-- Section: Mission and Vision -->
        <section
          class="flex flex-row gap-8 justify-between self-stretch px-28 pt-24 pb-16 text-base text-gray-800 bg-[lavender] h-[444px] w-full mx-auto max-md:px-5 max-md:pt-24 max-md:max-w-full">
          <article class="flex flex-col min-w-[240px] w-[516px] max-md:max-w-full">
            <h2 class="font-semibold leading-none uppercase tracking-[3px]">Our Mission</h2>
            <h3 class="mt-5 text-3xl font-bold tracking-tighter leading-10">Creating valuable content for creatives all
              around the world</h3>
            <p class="mt-5 leading-7 text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
              viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </article>
          <article class="flex flex-col min-w-[240px] w-[516px] max-md:max-w-full">
            <h2 class="font-semibold leading-none uppercase tracking-[3px]">Our Vision</h2>
            <h3 class="mt-5 text-3xl font-bold tracking-tighter leading-10">To inspire and empower through storytelling
            </h3>
            <p class="mt-5 leading-7 text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
              viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
          </article>
        </section>

        <!-- Section: Our Team -->
        <section
          class="flex flex-row gap-10 justify-between self-stretch mt-20 ml-8 text-gray-800 min-w-[240px] w-[1197px] max-md:max-w-full relative">
          <div class="flex flex-col self-stretch -ml-8 my-auto rounded-none min-w-[240px] w-[519px] max-md:max-w-full">
            <h2 class="self-start text-4xl tracking-tighter font-bold leading-none text-gray-800">
              Our team of creatives
            </h2>
            <p class="mt-4 text-2xl leading-8 font-bold max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p class="mt-4 text-base leading-7 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <div class="relative">
            <img loading="lazy" src="/src/assets/images/misc/ground-group-growth-hands-461049.png"
              alt="Our team of creatives"
              class="object-cover self-stretch ml-4 rounded-none aspect-[1.42] min-w-[240px] w-[681px] max-md:max-w-full" />
            <div class="absolute top-44 -left-6 w-20 h-20 bg-blue-600 rounded-tl-[30px]"></div>
          </div>
        </section>

        <!-- Section: Why We Started This Blog -->
        <section
          class="flex flex-row gap-10 justify-center self-stretch mt-20 mb-20 text-gray-800 min-w-[240px] max-md:max-w-full">
          <img loading="lazy"
            src="/src/assets/images/misc/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png"
            alt="Why We Started This Blog"
            class="object-cover self-stretch rounded-none aspect-[1.42] min-w-[240px] w-[681px] max-md:max-w-full" />
          <div class="flex flex-col self-stretch my-auto rounded-none min-w-[240px] w-[519px] max-md:max-w-full">
            <h2 class="self-start text-4xl tracking-tighter font-bold leading-none text-gray-800">
              Why We Started This Blog
            </h2>
            <p class="mt-4 text-2xl leading-8 font-bold max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p class="mt-4 text-base leading-7 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat.
            </p>
          </div>
        </section>

        <!-- Section: List of Authors -->
        <section
          class="author-list flex flex-col grow shrink self-stretch my-20 min-w-[240px] w-[1197px] mx-auto max-md:max-w-full">
          <h1 class="text-3xl font-bold mb-8 text-center">List of Authors</h1>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div class="author-card bg-gray-50 hover:bg-yellow-50 shadow-lg rounded-lg p-5 flex flex-col items-center text-center">
              <img src="/src/assets/images/misc/author-1.png" loading="lazy" alt="Author 1"
                class="w-24 h-24 rounded-full mb-4" />
              <h3 class="mt-3 text-xl font-bold">Floyd Miles</h3>
              <p class="text-gray-500">Content Writer @Company</p>
              <div class="flex justify-center gap-3 mt-3">
                <a href="https://facebook.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/facebook.png" class="h-5 w-5" alt="Facebook" />
                </a>
                <a href="https://twitter.com" class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/twitter.png" class="h-5 w-5" alt="Twitter" />
                </a>
                <a href="https://instagram.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/instagram.png" class="h-5 w-5" alt="Instagram" />
                </a>
                <a href="https://linkedin.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/linkedin.png" class="h-5 w-5" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div class="author-card bg-gray-50 hover:bg-yellow-50 shadow-lg rounded-lg p-5 flex flex-col items-center text-center">
              <img src="/src/assets/images/misc/author-2.png" loading="lazy" alt="Author 2"
                class="w-24 h-24 rounded-full mb-4" />
              <h3 class="mt-3 text-xl font-bold">Dianne Russell</h3>
              <p class="text-gray-500">Content Writer @Company</p>
              <div class="flex justify-center gap-3 mt-3">
                <a href="https://facebook.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/facebook.png" class="h-5 w-5" alt="Facebook" />
                </a>
                <a href="https://twitter.com" class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/twitter.png" class="h-5 w-5" alt="Twitter" />
                </a>
                <a href="https://instagram.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/instagram.png" class="h-5 w-5" alt="Instagram" />
                </a>
                <a href="https://linkedin.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/linkedin.png" class="h-5 w-5" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div class="author-card bg-gray-50 hover:bg-yellow-50 shadow-lg rounded-lg p-5 flex flex-col items-center text-center">
              <img src="/src/assets/images/misc/author-4.png" loading="lazy" alt="Author 2"
                class="w-24 h-24 rounded-full mb-4" />
              <h3 class="mt-3 text-xl font-bold">Jenny Wilson</h3>
              <p class="text-gray-500">Content Writer @Company</p>
              <div class="flex justify-center gap-3 mt-3">
                <a href="https://facebook.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/facebook.png" class="h-5 w-5" alt="Facebook" />
                </a>
                <a href="https://twitter.com" class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/twitter.png" class="h-5 w-5" alt="Twitter" />
                </a>
                <a href="https://instagram.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/instagram.png" class="h-5 w-5" alt="Instagram" />
                </a>
                <a href="https://linkedin.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/linkedin.png" class="h-5 w-5" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div class="author-card bg-gray-50 hover:bg-yellow-50 shadow-lg rounded-lg p-5 flex flex-col items-center text-center">
              <img src="/src/assets/images/misc/author-3.png" loading="lazy" alt="Author 2"
                class="w-24 h-24 rounded-full mb-4" />
              <h3 class="mt-3 text-xl font-bold">Leslie Alexander</h3>
              <p class="text-gray-500">Content Writer @Company</p>
              <div class="flex justify-center gap-3 mt-3">
                <a href="https://facebook.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/facebook.png" class="h-5 w-5" alt="Facebook" />
                </a>
                <a href="https://twitter.com" class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/twitter.png" class="h-5 w-5" alt="Twitter" />
                </a>
                <a href="https://instagram.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/instagram.png" class="h-5 w-5" alt="Instagram" />
                </a>
                <a href="https://linkedin.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/linkedin.png" class="h-5 w-5" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div class="author-card bg-gray-50 hover:bg-yellow-50 shadow-lg rounded-lg p-5 flex flex-col items-center text-center">
              <img src="/src/assets/images/misc/author-8.png" loading="lazy" alt="Author 2"
                class="w-24 h-24 rounded-full mb-4" />
              <h3 class="mt-3 text-xl font-bold">Guy Hawkins</h3>
              <p class="text-gray-500">Content Writer @Company</p>
              <div class="flex justify-center gap-3 mt-3">
                <a href="https://facebook.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/facebook.png" class="h-5 w-5" alt="Facebook" />
                </a>
                <a href="https://twitter.com" class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/twitter.png" class="h-5 w-5" alt="Twitter" />
                </a>
                <a href="https://instagram.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/instagram.png" class="h-5 w-5" alt="Instagram" />
                </a>
                <a href="https://linkedin.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/linkedin.png" class="h-5 w-5" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div class="author-card bg-gray-50 hover:bg-yellow-50 shadow-lg rounded-lg p-5 flex flex-col items-center text-center">
              <img src="/src/assets/images/misc/author-9.png" loading="lazy" alt="Author 2"
                class="w-24 h-24 rounded-full mb-4" />
              <h3 class="mt-3 text-xl font-bold">Eleanor Pena</h3>
              <p class="text-gray-500">Content Writer @Company</p>
              <div class="flex justify-center gap-3 mt-3">
                <a href="https://facebook.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/facebook.png" class="h-5 w-5" alt="Facebook" />
                </a>
                <a href="https://twitter.com" class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/twitter.png" class="h-5 w-5" alt="Twitter" />
                </a>
                <a href="https://instagram.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/instagram.png" class="h-5 w-5" alt="Instagram" />
                </a>
                <a href="https://linkedin.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/linkedin.png" class="h-5 w-5" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div class="author-card bg-gray-50 hover:bg-yellow-50 shadow-lg rounded-lg p-5 flex flex-col items-center text-center">
              <img src="/src/assets/images/misc/author-7.png" loading="lazy" alt="Author 2"
                class="w-24 h-24 rounded-full mb-4" />
              <h3 class="mt-3 text-xl font-bold">Robert Fox</h3>
              <p class="text-gray-500">Content Writer @Company</p>
              <div class="flex justify-center gap-3 mt-3">
                <a href="https://facebook.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/facebook.png" class="h-5 w-5" alt="Facebook" />
                </a>
                <a href="https://twitter.com" class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/twitter.png" class="h-5 w-5" alt="Twitter" />
                </a>
                <a href="https://instagram.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/instagram.png" class="h-5 w-5" alt="Instagram" />
                </a>
                <a href="https://linkedin.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/linkedin.png" class="h-5 w-5" alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div class="author-card bg-gray-50 hover:bg-yellow-50 shadow-lg rounded-lg p-5 flex flex-col items-center text-center">
              <img src="/src/assets/images/misc/author-6.png" loading="lazy" alt="Author 2"
                class="w-24 h-24 rounded-full mb-4" />
              <h3 class="mt-3 text-xl font-bold">Jacob Jones</h3>
              <p class="text-gray-500">Content Writer @Company</p>
              <div class="flex justify-center gap-3 mt-3">
                <a href="https://facebook.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/facebook.png" class="h-5 w-5" alt="Facebook" />
                </a>
                <a href="https://twitter.com" class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/twitter.png" class="h-5 w-5" alt="Twitter" />
                </a>
                <a href="https://instagram.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/instagram.png" class="h-5 w-5" alt="Instagram" />
                </a>
                <a href="https://linkedin.com"
                  class="text-gray-500 text-xl transition duration-300 hover:text-blue-600">
                  <img src="/src/assets/images/misc/linkedin.png" class="h-5 w-5" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <CallActionSection></CallActionSection>
  </MainLayout>
</template>
