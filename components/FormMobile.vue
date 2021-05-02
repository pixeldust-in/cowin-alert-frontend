<template>
  <div>
    <div class="mt-7 mb-6 text-2xl font-bold">Register for Alerts</div>

    <form action="" method="post">
      <div class="w-full mb-4">
        <input
          type="email"
          required
          placeholder="Enter your email"
          class="w-full rounded-lg px-4 border border-gray py-3 outline-none focus:border-purple transition duration-500 ease-in-out text-sm bg-white"
        />
      </div>
      <div class="w-full mb-4">
        <input
          type="tel"
          maxlength="6"
          required
          placeholder="Enter your pincode"
          class="w-full rounded-lg px-4 border border-gray py-3 outline-none focus:border-purple transition duration-500 ease-in-out text-sm bg-white"
        />
      </div>
      <div class="mt-1">
        <div class="uppercase text-xs tracking-wide font-medium">
          Recieve notification untill:
        </div>
        <select
          class="block w-full py-2 text-sm border border-gray mt-1 rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
          name=""
          id=""
        >
          <option
            v-for="duration in durationOptions"
            :key="duration.value"
            :value="duration.value"
            v-model="form.duration"
          >
            {{ duration.label }}
          </option>
        </select>
      </div>
      <div class="my-8 flex items-start">
        <input type="checkbox" id="terms" class="mr-2 w-8" />
        <label for="terms" class="text-xs"
          >I give my consent to cowin alerts to send me communication upon
          availability of covid-19 vaccine slots on cowin platform.</label
        >
      </div>
      <div class="">
        <span
          class="w-full px-6 py-3 text-white font-medium flex justify-center outline-none items-center bg-purple rounded-full cursor-pointer"
          @click="$emit('next')"
        >
          Submit
        </span>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FormMobile',
  props: {},

  data: () => ({
    form: {
      age: null,
      duration: null,
    },
    durationOptions: [
      {
        label: 'Select',
        value: null,
      },
      {
        label: 'Next 7 days',
        value: 'week',
      },
      {
        label: 'Next 15 days',
        value: 'twoweek',
      },
      {
        label: 'Next 1 month',
        value: 'month',
      },
      {
        label: 'Next 3 months',
        value: '3month',
      },
    ],
  }),

  methods: {},
}
</script>
<style lang="postcss" scoped>
.process-wrapper {
  background: rgb(240, 251, 252);
  background: linear-gradient(180deg, #f4feff, #d1f4ff);
}

</style>
