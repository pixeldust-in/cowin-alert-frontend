<template>
  <div class="md:w-536">
    <div class="mx-auto w-full pt-8 px-8 bg-purple rounded-xl">
      <div class="text-white text-2xl font-bold">Registered Successfully!</div>
      <div class="text-white mt-2">
       We will keep you posted over email, as soon as new vaccine slots are available for your pincode
       <br>
       <br>
       <strong>
       Stay strong, Stay safe!
       </strong>
      </div>
      <div class="flex mt-14 justify-center">
        <img src="@/assets/images/success-message.svg" />
      </div>
    </div>
    <div class="flex justify-center">
    <div class="flex items-center mt-8">
      <span class="mr-2 font-bold"> Share : </span>
      <Share />
    </div>
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
