<script setup>
// import AppLayout from "./layouts/index.vue";
</script>

<template>
  <div class="bg-black">
    <!-- <v-app-bar flat absolute="true" class="nav-top">
      <v-app-bar-nav-icon>
        <router-link to="/">
          <img src="./assets/logo.png" alt="logo" />
        </router-link>
      </v-app-bar-nav-icon>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical">
          <v-avatar color="success" size="35"> ME </v-avatar>
        </v-btn>
      </template>
    </v-app-bar> -->
    <div class="nav-top h-20 w-full bg-transparent absolute flex items-center justify-between px-20">
      <img src="./assets/logo.png" alt="logo" class="z-10"/>
      <div class="flex justify-space gap-10">
        <p>Buy / Sell</p>
        <p>Grow</p>
        <p>Markets</p>
        <p>Business</p>
        <p>Support</p>
      </div>
      <div class="flex gap-4">
        <button class="border py-1 px-5 rounded-lg">Sign In</button>
        <button class="py-1 px-5 rounded-lg bg-gradient-225 from-[#18C8FF] to-[#933FFE]">Sign Up</button>
      </div>
    </div>

    <div class="">
      <router-view />
    </div>
  </div>
</template>
