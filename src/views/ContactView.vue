<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <div class="w-full flex flex-col mt-8 mb-8 items-center">
            <!-- Contact Us Section -->
            <div class="w-full flex flex-col gap-y-3 items-center px-60 pt-24">
                <div class="text-x-black font-black leading-5 text-center">CONTACT US</div>
                <div class="flex justify-center pr-px self-stretch items-center">
                    <div class="text-x-black font-bold text-5xl text-center">Let’s Start a Conversation</div>
                </div>
                <div class="text-x-mediumgrey self-stretch pt-3 items-center justify-center flex text-center leading-7">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore<br>et dolore magna aliqua. Ut enim ad minim.
                    </p>
                </div>
            </div>

            <!-- Working Hours and Contact Information -->
            <div class="bg-x-yellow flex-grow pr-32 pl-16 items-center flex mt-20 mb-10 py-12">
                <div
                    class="min-[758px]:flex-nowrap text-x-darkgrey gap-x-[71px] flex flex-wrap justify-center flex-grow gap-y-14 items-start">

                    <div>
                        <div class="leading-5 text-sm">Working hours</div>
                        <div class="w-full border-t border-gray-500 mt-4"></div>
                        <div class="[max-width:265px] flex pt-4 self-stretch items-end">
                            <div class="font-bold leading-8 text-xl flex-grow">Monday To Friday</div>
                        </div>
                        <div class="font-bold leading-8 text-xl w-60">9:00 AM to 8:00 PM</div>
                        <div class="leading-7">Our Support Team is available 24/7</div>
                    </div>

                    <div>
                        <div class="leading-5 text-sm">Contact Us</div>
                        <div class="w-72 border-t border-gray-500 mt-4"></div>
                        <div class="[max-width:193px] pt-4 self-stretch">
                            <div class="font-bold leading-8 text-xl">020 7993 2905</div>
                        </div>
                        <div class="leading-7">hello@finsweet.com</div>
                    </div>

                </div>
            </div>

            <!-- Contact Form -->
            <form class="w-full flex flex-col gap-y-3 items-center px-60 pb-24">
                <div class="flex justify-end pt-5 self-stretch flex-col">
                    <div class="border-x-mediumgrey flex items-center border border-solid p-6 rounded-sm">
                        <input type="text" id="fullName" name="fullName" placeholder="Full Name"
                            class="ml-4 flex-grow text-x-black leading-7 bg-transparent outline-none placeholder-black" />
                    </div>
                </div>
                <div class="flex justify-end pt-1 self-stretch flex-col">
                    <div class="border-x-mediumgrey flex items-center border border-solid p-6 rounded-sm">
                        <input type="email" id="email" name="email" placeholder="Your Email"
                            class="ml-4 flex-grow text-x-black leading-7 bg-transparent outline-none placeholder-black" />
                    </div>
                </div>
                <div class="w-full text-x-black leading-7 flex flex-wrap pt-0.5 gap-x-4 gap-y-4">
                    <div class="border-x-mediumgrey py-[22px] flex items-center border border-solid flex-grow px-6">
                        <select id="province" name="province"
                            class="text-x-black leading-7 bg-transparent outline-none flex-grow placeholder-black"
                            aria-placeholder="Province">
                            <option selected value="">Province</option>
                            <option value="Nanggroe Aceh Darussalam">Nanggroe Aceh Darussalam</option>
                            <option value="Sumatera Utara">Sumatera Utara</option>
                            <option value="Sumatera Selatan">Sumatera Selatan</option>
                            <option value="Sumatera Barat">Sumatera Barat</option>
                            <option value="Bengkulu">Bengkulu</option>
                            <option value="Riau">Riau</option>
                            <option value="Kepulauan Riau">Kepulauan Riau</option>
                            <option value="Jambi">Jambi</option>
                            <option value="Lampung">Lampung</option>
                            <option value="Bangka Belitung">Bangka Belitung</option>
                            <option value="Kalimantan Barat">Kalimantan Barat</option>
                            <option value="Kalimantan Timur">Kalimantan Timur</option>
                            <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                            <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                            <option value="Kalimantan Utara">Kalimantan Utara</option>
                            <option value="Banten">Banten</option>
                            <option value="DKI Jakarta">DKI Jakarta</option>
                            <option value="Jawa Barat">Jawa Barat</option>
                            <option value="Jawa Tengah">Jawa Tengah</option>
                            <option value="Daerah Istimewa Yogyakarta">Daerah Istimewa Yogyakarta</option>
                            <option value="Jawa Timur">Jawa Timur</option>
                            <option value="Bali">Bali</option>
                            <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                            <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                            <option value="Gorontalo">Gorontalo</option>
                            <option value="Sulawesi Barat">Sulawesi Barat</option>
                            <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                            <option value="Sulawesi Utara">Sulawesi Utara</option>
                            <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                            <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                            <option value="Maluku Utara">Maluku Utara</option>
                            <option value="Maluku">Maluku</option>
                            <option value="Papua Barat">Papua Barat</option>
                            <option value="Papua">Papua</option>
                            <option value="Papua Tengah">Papua Tengah</option>
                            <option value="Papua Pegunungan">Papua Pegunungan</option>
                            <option value="Papua Selatan">Papua Selatan</option>
                            <option value="Papua Barat Daya">Papua Barat Daya</option>
                        </select>
                    </div>
                    <div class="border-x-mediumgrey py-[22px] flex items-center border border-solid flex-grow px-6">
                        <select id="city" name="city"
                            class="text-x-black leading-7 bg-transparent outline-none flex-grow placeholder-black"
                            aria-placeholder="City">
                            <option selected value="">City</option>
                            <option value="Ambon">Ambon</option>
                            <option value="Balikpapan">Balikpapan</option>
                            <option value="Banda Aceh">Banda Aceh</option>
                            <option value="Bandar Lampung">Bandar Lampung</option>
                            <option value="Bandung">Bandung</option>
                            <option value="Banjar">Banjar</option>
                            <option value="Banjarbaru">Banjarbaru</option>
                            <option value="Banjarmasin">Banjarmasin</option>
                            <option value="Batam">Batam</option>
                            <option value="Batu">Batu</option>
                            <option value="Bau-Bau">Bau-Bau</option>
                            <option value="Bekasi">Bekasi</option>
                            <option value="Bengkulu">Bengkulu</option>
                            <option value="Bima">Bima</option>
                            <option value="Binjai">Binjai</option>
                            <option value="Bitung">Bitung</option>
                            <option value="Blitar">Blitar</option>
                            <option value="Bogor">Bogor</option>
                            <option value="Bontang">Bontang</option>
                            <option value="Bukittinggi">Bukittinggi</option>
                            <option value="Cilegon">Cilegon</option>
                            <option value="Cimahi">Cimahi</option>
                            <option value="Cirebon">Cirebon</option>
                            <option value="Denpasar">Denpasar</option>
                            <option value="Depok">Depok</option>
                            <option value="Dumai">Dumai</option>
                            <option value="Gorontalo">Gorontalo</option>
                            <option value="Gunungsitoli">Gunungsitoli</option>
                            <option value="Jambi">Jambi</option>
                            <option value="Jayapura">Jayapura</option>
                            <option value="Kediri">Kediri</option>
                            <option value="Kendari">Kendari</option>
                            <option value="Kotamobagu">Kotamobagu</option>
                            <option value="Kupang">Kupang</option>
                            <option value="Langsa">Langsa</option>
                            <option value="Lhokseumawe">Lhokseumawe</option>
                            <option value="Lubuklinggau">Lubuklinggau</option>
                            <option value="Madiun">Madiun</option>
                            <option value="Magelang">Magelang</option>
                            <option value="Makassar">Makassar</option>
                            <option value="Malang">Malang</option>
                            <option value="Manado">Manado</option>
                            <option value="Mataram">Mataram</option>
                            <option value="Medan">Medan</option>
                            <option value="Metro">Metro</option>
                            <option value="Mojokerto">Mojokerto</option>
                            <option value="Padang">Padang</option>
                            <option value="Padangpanjang">Padangpanjang</option>
                            <option value="Padangsidimpuan">Padangsidimpuan</option>
                            <option value="Pagar Alam">Pagar Alam</option>
                            <option value="Palangka Raya">Palangka Raya</option>
                            <option value="Palembang">Palembang</option>
                            <option value="Palopo">Palopo</option>
                            <option value="Palu">Palu</option>
                            <option value="Pangkalpinang">Pangkalpinang</option>
                            <option value="Parepare">Parepare</option>
                            <option value="Pariaman">Pariaman</option>
                            <option value="Pasuruan">Pasuruan</option>
                            <option value="Payakumbuh">Payakumbuh</option>
                            <option value="Pekalongan">Pekalongan</option>
                            <option value="Pekanbaru">Pekanbaru</option>
                            <option value="Pematangsiantar">Pematangsiantar</option>
                            <option value="Pontianak">Pontianak</option>
                            <option value="Prabumulih">Prabumulih</option>
                            <option value="Probolinggo">Probolinggo</option>
                            <option value="Sabang">Sabang</option>
                            <option value="Salatiga">Salatiga</option>
                            <option value="Samarinda">Samarinda</option>
                            <option value="Sawahlunto">Sawahlunto</option>
                            <option value="Semarang">Semarang</option>
                            <option value="Serang">Serang</option>
                            <option value="Sibolga">Sibolga</option>
                            <option value="Singkawang">Singkawang</option>
                            <option value="Solok">Solok</option>
                            <option value="Sorong">Sorong</option>
                            <option value="Subulussalam">Subulussalam</option>
                            <option value="Sukabumi">Sukabumi</option>
                            <option value="Sungai Penuh">Sungai Penuh</option>
                            <option value="Surabaya">Surabaya</option>
                            <option value="Surakarta">Surakarta</option>
                            <option value="Tangerang">Tangerang</option>
                            <option value="Tangerang Selatan">Tangerang Selatan</option>
                            <option value="Tanjungbalai">Tanjungbalai</option>
                            <option value="Tanjungpinang">Tanjungpinang</option>
                            <option value="Tarakan">Tarakan</option>
                            <option value="Tasikmalaya">Tasikmalaya</option>
                            <option value="Tebing Tinggi">Tebing Tinggi</option>
                            <option value="Tegal">Tegal</option>
                            <option value="Ternate">Ternate</option>
                            <option value="Tidore Kepulauan">Tidore Kepulauan</option>
                            <option value="Tomohon">Tomohon</option>
                            <option value="Tual">Tual</option>
                            <option value="Yogyakarta">Yogyakarta</option>
                        </select>
                    </div>
                </div>
                <div class="flex justify-end pt-1.5 self-stretch flex-col">
                    <div
                        class="pb-[91px] border-x-mediumgrey flex pt-6 items-start border border-solid px-6 rounded-sm">
                        <textarea id="message" name="message" placeholder="Message"
                            class="ml-4 flex-grow text-x-black leading-7 bg-transparent outline-none resize-none placeholder-black"></textarea>
                    </div>
                </div>
                <div class="flex justify-end pt-1 self-stretch flex-col">
                    <button type="submit"
                        class="pr-[17px] flex justify-center pl-4 bg-x-blue hover:bg-x-yellow items-center py-4 transition duration-150 ease-in-out">
                        <div class="text-x-black hover:text-white font-bold leading-8 text-2xl text-center">Send Message
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </MainLayout>
</template>
