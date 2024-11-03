<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <div class="author-blog">
            <main>
                <section class="author-header flex flex-col self-center w-full max-md:mt-10 max-md:max-w-full">
                    <div
                        class="background flex flex-col items-center px-20 pt-16 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
                        <div class="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
                            <div class="max-w-full w-[952px]">
                                <div class="flex gap-5 max-md:flex-col">
                                    <div class="column flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                                        <img loading="lazy"
                                            src="/src/assets/images/misc/close-up-photography-of-man-wearing-sunglasses-1212984.png"
                                            alt="Author's portrait"
                                            class="object-contain grow w-full aspect-[0.85] max-md:mt-8" />
                                    </div>
                                    <div class="column flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                                        <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
                                            <h1
                                                class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                                                Hey there, I'm Andrew Jonhson and welcome to my Blog
                                            </h1>
                                            <p
                                                class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
                                                enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
                                                adipiscing at in tellus.
                                            </p>
                                            <div class="flex mt-4 gap-4">
                                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                                    aria-label="Facebook">
                                                    <img src="/src/assets/images/misc/facebook.png" class="h-6 w-6"
                                                        alt="Facebook" />
                                                </a>
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                                    aria-label="Twitter">
                                                    <img src="/src/assets/images/misc/twitter.png" class="h-6 w-6"
                                                        alt="Twitter" />
                                                </a>
                                                <a href="https://instagram.com" target="_blank"
                                                    rel="noopener noreferrer" aria-label="Instagram">
                                                    <img src="/src/assets/images/misc/instagram.png" class="h-6 w-6"
                                                        alt="Instagram" />
                                                </a>
                                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                                    aria-label="LinkedIn">
                                                    <img src="/src/assets/images/misc/linkedin.png" class="h-6 w-6"
                                                        alt="LinkedIn" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="relative items-center top-0 mt-28 w-full aspect-[43.48] max-md:mt-10 max-md:max-w-full h-5 bg-yellow-400 z-30 mx-auto">
                            </div>
                        </div>
                    </div>
                </section>

                <section class="my-blog self-center mt-20 mb-24 max-w-full w-[1024px] max-md:mt-10 mx-auto">
                    <div class="flex gap-5 max-md:flex-col">
                        <div class="column flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                            <div
                                class="flex flex-col grow text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-8 max-md:text-4xl">
                                <h2 class="self-start max-md:text-4xl">My Posts</h2>
                                <img loading="lazy"
                                    src="/src/assets/images/misc/stained-glass-high-rise-building-1106476.png"
                                    alt="Blog post image 1"
                                    class="object-contain mt-16 w-full aspect-[1.29] max-md:mt-10" />
                                <img loading="lazy"
                                    src="/src/assets/images/misc/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.png"
                                    alt="Blog post image 2"
                                    class="object-contain mt-16 w-full aspect-[1.29] max-md:mt-10" />
                            </div>
                        </div>
                        <div class="column flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                            <div
                                class="flex flex-col mt-48 text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
                                <span class="self-start uppercase tracking-[3px]">BUSINESS</span>
                                <h3
                                    class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                                    Font sizes in UI design: The complete guide to follow
                                </h3>
                                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                                <span class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10">ECONOMY</span>
                                <h3
                                    class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                                    How to build rapport with your web design clients
                                </h3>
                                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </MainLayout>
</template>