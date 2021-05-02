<template>
  <div class="md:w-536">
    <div class="mx-auto w-full pt-14 px-8 bg-purple rounded-xl">
      <div class="text-white text-2xl font-bold">Registered Successfully!</div>
      <div class="text-white mt-5">
        We're in this together. Let's get<br />
        vaccinated at the earliest!
      </div>
      <div class="mt-10 flex justify-center">
        <img src="@/assets/images/success-message.svg" />
      </div>
    </div>
    <div class="flex items-center mt-8">
      <span class="mr-2 font-bold"> Share : </span>
      <Share />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SuccessMobile',
  props: {},

  data: () => ({}),

  methods: {},
}
</script>
<style lang="postcss" scoped></style>
