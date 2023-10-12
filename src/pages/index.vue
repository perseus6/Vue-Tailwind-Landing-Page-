<script setup>
import { ref } from "vue";
</script>

<template>

  <!-- BLOCK1 -->
  <div class="flex items-center flex-col pt-[6vw] gap-5">
    <img
      src="../assets/images/block1.png"
      class="h-full w-full absolute top-0 right-0"
    />
    <div class="w-full px-32 z-10">
      <img
        src="../assets/images/star-img.png"
        alt="star img"
        class="float-right pr-32"
      />
    </div>
    <div class="font-bold text-[5.5rem] w-[45rem] text-center z-10">
      We make crypto clear and simple
    </div>
    <div class="text-base w-2/5 text-center text-[#898CA9]">
      Buy, sell, and grow your crypto with CoinFlip, the platform dedicated
      to every trader at every level.
    </div>
    <button
      class="py-3 px-6 rounded-lg bg-gradient-225 from-[#18C8FF] to-[#933FFE]"
    >
      Get Started
    </button>
    <div class="flex flex-row mt-40 gap-6 px-32 mb-4">
      <div
        class="flex flex-col items-center justify-center bg-[#1A1B23] rounded-xl p-5 gap-5 z-10 px-10 w-[25rem]"
      >
        <img
          src="../assets/images/trade.png"
          alt="wallet"
          class="float-right"
        />
        <h2 class="font-bold text-2xl">Trade Desk</h2>
        <p class="text-center text-sm text-[#898CA9]">
          Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform
        </p>
        <button class="text-[#B982FF]">Get Started →</button>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-[#1A1B23] rounded-xl p-5 gap-5 z-10 px-10 w-[25rem]"
      >
        <img
          src="../assets/images/coin.png"
          alt="wallet"
          class="float-right"
        />
        <h2 class="font-bold text-2xl">CoinFlip ATMs</h2>
        <p class="text-center text-sm text-[#898CA9]">
          We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto
        </p>
        <button class="text-[#B982FF]">Find an ATM →</button>
      </div>
      <div
        class="flex flex-col items-center justify-center bg-[#1A1B23] rounded-xl p-5 gap-5 z-10 px-10 w-[25rem]"
      >
        <img
          src="../assets/images/wallet.png"
          alt="wallet"
          class="float-right"
        />
        <h2 class="font-bold text-2xl">Trade Desk</h2>
        <p class="text-center text-sm text-[#898CA9]">
          Store your growing investments in our non-custodial wallet that gives
          you access to a full suite of DeFi services in one place
        </p>
        <button class="text-[#B982FF]">Download the App →</button>
      </div>
    </div>
  </div>
  <!-- BLOCK1 END-->

  <!-- BLOCK2 START -->
  <div
    class="bg-[url('./assets/images/block2.png')] bg-right flex items-center justify-center flex-col gap-10 relative pt-40"
  >
    <img
      src="../assets/images/block2-img.png"
      class="absolute top-0 left-0 z-10 mt-40"
    />
    <h2 class="font-bold text-[3rem] w-2/3 text-center px-12">
      A crypto investment platform that invests in you
    </h2>
    <p class="text-[#898CA9] w-1/2 text-center px-12">
      We invest more resources than any other platrom in making sure great
      support from real people is a click away, whenever you need it.
    </p>
    <button
      class="py-3 px-6 rounded-lg bg-gradient-225 from-[#18C8FF] to-[#933FFE]"
    >
      Get Started
    </button>
    <div class="flex items-center justify-end mt-32">
      <div class="flex flex-col items-start justify-center w-1/2 gap-5">
        <h2 class="font-bold text-[3rem]">
          24/7 access to full service customer support
        </h2>
        <p class="text-[#898CA9] text-sm">
          We invest more resources than any other platform in making sure great
          support from real people is a click away, whenever you need it.
        </p>
        <button
          class="py-3 px-6 rounded-lg border"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
  <!-- BLOCK2 END -->
  
  <!-- BLOCK3 START -->
  <div
    class="bg-[url('./assets/images/block3.png')] bg-left flex items-center justify-center flex-col gap-4 pt-20 relative"
  >
    <img
      src="../assets/images/block3-img1.png"
      class="absolute bottom-96 right-0 z-10 mt-40"
    />
    <img
      src="../assets/images/block3-img3.png"
      class="absolute top-96 right-0 z-10 mt-40"
    />
    <h2 class="font-bold text-[3rem] w-2/3 text-center px-12">
      Buy and sell with the lowest fees in the industry
    </h2>
    <p class="text-[#898CA9] w-1/2 text-center px-12">
      Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank
      transfers or your credit/debit card.
    </p>
    <button class="text-[#B982FF]">Learn more →</button>
    <div
      class="bg-[#1A1B23] w-5/6 rounded-xl z-10 text-lg font-semibold center px-6"
    >
      <table class="w-full">
        <tr class="border-[#2B2C3B] border-b-[1px]">
          <td class="py-6">Bitcoin</td>
          <td class="pl-4 text-[#B982FF]">BTC</td>
          <td class="pr-4 text-right">$56,290.30</td>
          <td class="pr-4 text-right text-[#0DBB7C]">+1.68%</td>
          <td class="pl-4">Graph</td>
          <td class="text-base font-medium pl-4">Trade Now</td>
        </tr>
        <tr class="border-[#2B2C3B] border-b-[1px]">
          <td class="py-6">Bitcoin</td>
          <td class="pl-4 text-[#B982FF]">BTC</td>
          <td class="pr-4 text-right">$56,290.30</td>
          <td class="pr-4 text-right text-[#0DBB7C]">+1.68%</td>
          <td class="pl-4">Graph</td>
          <td class="text-base font-medium pl-4">Trade Now</td>
        </tr>
        <tr class="border-[#2B2C3B] border-b-[1px]">
          <td class="py-6">Bitcoin</td>
          <td class="pl-4 text-[#B982FF]">BTC</td>
          <td class="pr-4 text-right">$56,290.30</td>
          <td class="pr-4 text-right text-[#0DBB7C]">+1.68%</td>
          <td class="pl-4">Graph</td>
          <td class="text-base font-medium pl-4">Trade Now</td>
        </tr>
        <tr class="border-[#2B2C3B] border-b-[1px]">
          <td class="py-6">Bitcoin</td>
          <td class="pl-4 text-[#B982FF]">BTC</td>
          <td class="pr-4 text-right">$56,290.30</td>
          <td class="pr-4 text-right text-[#0DBB7C]">+1.68%</td>
          <td class="pl-4">Graph</td>
          <td class="text-base font-medium pl-4">Trade Now</td>
        </tr>
        <tr class="border-[#2B2C3B] border-b-[1px]">
          <td class="py-6">Bitcoin</td>
          <td class="pl-4 text-[#B982FF]">BTC</td>
          <td class="pr-4 text-right">$56,290.30</td>
          <td class="pr-4 text-right text-[#0DBB7C]">+1.68%</td>
          <td class="pl-4">Graph</td>
          <td class="text-base font-medium pl-4">Trade Now</td>
        </tr>
      </table>
    </div>
    <div class="flex items-center justify-start mt-32 px-32">
      <div class="flex flex-col items-start justify-center gap-5">
        <h2 class="font-bold text-[3rem]">
          Take your first step into safe, secure crypto investing
        </h2>
        <p class="text-[#898CA9] text-sm">
          Separated they live in Bookmarks right at the coast of the famous
          Semantics, large language ocean Separated they live in Bookmarks right
          at the coast.
        </p>
        <button
          class="py-3 px-6 rounded-lg bg-gradient-225 from-[#18C8FF] to-[#933FFE]"
        >
          Get Started
        </button>
      </div>
      <img src="../assets/images/block3-img2.png" class="z-10" />
    </div>
  </div>
  <!-- BLOCK3 END -->
  
  <!-- BLOCK4 START -->
  <div
    class="bg-[url('./assets/images/block4.png')] bg-left flex items-center justify-center flex-col gap-4 relative"
  >
    <h2 class="font-bold text-[3rem] w-2/3 text-center px-12">
      Receive transmissions
    </h2>
    <div class="w-1/2 text-center">
      <span class="text-[#898CA9]"> Unsubscribe at any time. </span
      ><span>Privacy policy↗</span>
    </div>
    <div class="bg-gradient-225 from-[#18C8FF] to-[#933FFE] p-[1px] rounded-lg">
      <div class="bg-black rounded-lg py-3 pl-4 pr-4 !text-sm !text-[#565976]">
        <span>Email Address</span><span class="pl-32">→</span>
      </div>
    </div>
    <div class="flex flex-row gap-10 text-[#565976] text-sm justify-between items-center w-full px-32 mt-40 mb-20">
      <img
      src="../assets/images/block4-img.png"
      class="absolute bottom-0 left-0 z-10"
    />
      <div class="flex flex-col w-80 gap-8">
        <img src="../assets/logo.png" class="w-32 z-0 opacity-50"/>
        <p>
          CoinFlip, the world’s leading bitcoin ATM operator, makes it so
          flippin’ easy to buy and sell bitcoin via cash, card, or bank
          transfer. </p><p>Sign up to get the latest in CoinFlip news, discounts,
          and more.
        </p>
        <div class="bg-gradient-225 from-[#18C8FF] to-[#933FFE] p-[1px] rounded-lg">
      <div class="bg-black rounded-lg py-3 pl-4 !text-sm !text-[#565976]">
        <span>Email Address</span>
      </div>
    </div>
    <p class="text-xs">© 2021 GPD Holdings, LLC FinCEN MSB</p>

      </div>
      <div class="flex flex-col gap-5">
        <p class="text-base">Company</p>
        <p>About</p>
        <p>Careers</p>
        <p>Press</p>
        <p>News</p>
        <p>merch</p>
      </div>
      <div class="flex flex-col gap-5">
        <p class="text-base">Privacy Policy and Terms of Service</p>
        <p>CoinFlip Privacy Policy</p>
        <p>CoinFlip Biometrics Privacy Policy</p>
        <p>CoinFlip Financial Privacy Notice</p>
        <p>CoinFlip Terms of Service</p>
        <p>CoinFlip Terms of Service</p>
      </div>
    </div>
  </div>
  <!-- BLOCK4 END -->

</template>
