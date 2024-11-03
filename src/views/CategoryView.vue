<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
  <MainLayout>
    <!-- Page Container -->
    <div class="bg-white mb-20 min-h-screen flex flex-col items-center">
      <!-- Header Section -->
      <header class="w-full bg-violet-50 text-black h-80 flex flex-col items-center justify-center">
        <h1 class="text-5xl font-semibold text-center text-black">Business</h1>
        <p class="text-lg text-center text-gray-400 mt-2 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br>
          eiusmod tempor incididunt ut labore.
        </p>
        <h2 class="text-lg font-semibold text-center text-gray-800">Blog &gt; Business</h2>
      </header>

      <!-- Main Content Section -->
      <main class="w-full max-w-7xl mx-auto px-5 pt-20 flex gap-5">
        <!-- Article Section with Images -->
        <article class="w-full md:w-3/4 flex flex-col pr-36 gap-10">
          <div class="flex gap-4 items-center">
            <img loading="lazy" src="/src/assets/images/misc/two-woman-in-erase-board.png" alt="Image"
              class="object-cover w-[250px] h-[300px]" />
            <div>
              <span class="font-semibold text-amber-300 uppercase tracking-wider">Business</span>
              <h1 class="mt-3 text-3xl font-semibold text-gray-800">Top 6 free website mockup tools 2022</h1>
              <p class="mt-3 text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
            </div>
          </div>

          <div class="flex gap-4 items-center">
            <img loading="lazy" src="/src/assets/images/misc/two-woman-in-erase-board.png" alt="Image"
              class="object-cover w-[250px] h-[300px]" />
            <div>
              <span class="font-semibold text-amber-300 uppercase tracking-wider">Business</span>
              <h2 class="mt-3 text-3xl font-semibold text-gray-800">Step-by-step guide to choosing great font pairs</h2>
              <p class="mt-3 text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
            </div>
          </div>

          <div class="flex gap-4 items-center">
            <img loading="lazy" src="/src/assets/images/misc/two-woman-in-erase-board.png" alt="Image"
              class="object-cover w-[250px] h-[300px]" />
            <div>
              <span class="font-semibold text-amber-300 uppercase tracking-wider">Business</span>
              <h2 class="mt-3 text-3xl font-semibold text-gray-800">Ten free foogle fonts that you should use</h2>
              <p class="mt-3 text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
            </div>
          </div>

          <div class="flex gap-4 items-center">
            <img loading="lazy" src="/src/assets/images/misc/two-woman-in-erase-board.png" alt="Image"
              class="object-cover w-[250px] h-[300px]" />
            <div>
              <span class="font-semibold text-amber-300 uppercase tracking-wider">Business</span>
              <h2 class="mt-3 text-3xl font-semibold text-gray-800">What did I learn from doing 50+ design sprints?</h2>
              <p class="mt-3 text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.</p>
            </div>
          </div>
        </article>

        <!-- Categories and All Tags Section -->
        <aside class="w-full md:w-1/4 flex flex-col gap-5">
          <div
            class="flex flex-col text-2xl font-bold tracking-tighter leading-none text-gray-800 whitespace-nowrap max-md:mt-10">
            <h2 class="self-start text-4xl tracking-tighter leading-none">Categories</h2>

            <div
              class="flex gap-4 p-6 mt-6 text-2xl tracking-tighter leading-none whitespace-nowrap border-2 border-solid hover:bg-x-blue border-stone-300 hover:text-white max-md:px-5 max-md:mr-0.5">
              <img loading="lazy" src="/src/assets/images/misc/start.png" alt=""
                class="object-contain shrink-0 aspect-square w-12 h-12 rounded-lg bg-x-lightyellow mr-3" />
              <span class="grow shrink my-auto w-[174px]">Startup</span>
            </div>
            <div
              class="flex gap-4 p-6 mt-6 text-2xl tracking-tighter leading-none whitespace-nowrap border-2 border-solid hover:bg-x-blue border-stone-300 hover:text-white max-md:px-5 max-md:mr-0.5">
              <img loading="lazy" src="/src/assets/images/misc/business.png" alt=""
                class="object-contain shrink-0 aspect-square w-12 h-12 rounded-lg bg-x-lightyellow mr-3" />
              <span class="grow shrink my-auto w-[174px]">Business</span>
            </div>
            <div
              class="flex gap-4 p-6 mt-6 text-2xl tracking-tighter leading-none whitespace-nowrap border-2 border-solid hover:bg-x-blue border-stone-300 hover:text-white max-md:px-5 max-md:mr-0.5">
              <img loading="lazy" src="/src/assets/images/misc/econom.png" alt=""
                class="object-contain shrink-0 aspect-square w-12 h-12 rounded-lg bg-x-lightyellow mr-3" />
              <span class="grow shrink my-auto w-[174px]">Economy</span>
            </div>
            <div
              class="flex gap-4 p-6 mt-6 text-2xl tracking-tighter leading-none whitespace-nowrap border-2 border-solid hover:bg-x-blue border-stone-300 hover:text-white max-md:px-5 max-md:mr-0.5">
              <img loading="lazy" src="/src/assets/images/misc/technology.png" alt=""
                class="object-contain shrink-0 aspect-square w-12 h-12 rounded-lg bg-x-lightyellow mr-3" />
              <span class="grow shrink my-auto w-[174px]">Technology</span>
            </div>

            <!-- All Tags -->
            <h3 class="self-start mt-12 text-4xl tracking-tighter leading-none max-md:mt-10">All Tags</h3>
            <div class="flex gap-4 mt-6 w-full whitespace-nowrap">
              <button
                class="gap-2.5 self-stretch px-10 py-2 text-xl hover:bg-x-blue hover:text-white rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5">Business</button>
              <button
                class="gap-2.5 self-stretch px-9 py-2 text-xl hover:bg-x-blue hover:text-white rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5">Experience</button>
            </div>
            <div class="flex gap-4 mt-4 w-full whitespace-nowrap">
              <button
                class="gap-2.5 self-stretch py-2 pr-7 pl-7 text-xl hover:bg-x-blue hover:text-white rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5">Screen</button>
              <button
                class="gap-2.5 self-stretch px-12 py-2 text-xl hover:bg-x-blue hover:text-white rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5">Technology</button>
            </div>
            <div class="flex gap-4 mt-4 w-full whitespace-nowrap">
              <button
                class="gap-2.5 px-14 py-2 text-xl hover:bg-x-blue hover:text-white rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5">Marketing</button>
              <button
                class="gap-2.5 px-10 py-2 text-xl hover:bg-x-blue hover:text-white rounded-3xl border-2 border-solid border-zinc-500 min-h-[48px] max-md:px-5">Life</button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  </MainLayout>
</template>