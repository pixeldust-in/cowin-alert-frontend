<template>
  <div>
    <div
      class="w-full p-8 bg-blue flex justify-center items-center rounded-xl"
    >
      <img src="@/assets/images/vaccine-welcome.svg" />
    </div>
    <div class="my-6">
      <div class="text-2xl font-bold mb-6">
        Get vaccine availability alert near you!
      </div>
      <div class="text-sm mb-6">
        Get realtime email alerts for vaccine availability for 18-45 age group in your pincode.
      </div>
      <div class="">
        <span
          class="w-full px-6 py-3 text-white font-medium flex justify-center outline-none items-center bg-purple rounded-full"
          @click="$emit('next')"
        >
          Register for Alerts
        </span>
      </div>
    </div>
  </div>
</template>
