<template>
  <div>
    <div class="mt-7 md:mt-0 mb-6 text-2xl font-bold">Register for Alerts</div>

    <form method="post">
      <div class="w-full mb-5">
        <input
          type="email"
          v-model.trim="form.email"
          required
          placeholder="Enter your email"
          class="w-full rounded-lg px-4 border border-gray py-3 outline-none focus:border-purple transition duration-500 ease-in-out text-sm bg-white"
          title="Please enter a valid email"
        />
        <div class="text-xs opacity-60 mt-1">
          Only essential alerts, no spamming!
        </div>
      </div>
      <div class="w-full mb-5">
        <input
          type="tel"
          maxlength="6"
          v-model="form.pincode"
          required
          placeholder="Enter your pincode"
          class="w-full rounded-lg px-4 border border-gray py-3 outline-none focus:border-purple transition duration-500 ease-in-out text-sm bg-white"
        />
      </div>
      <div class="mt-1">
        <div class="uppercase text-xs mb-2 tracking-wide font-medium">
          Receive notifications for the next:
        </div>
        <div
          class="select-container relative border border-gray rounded-md block"
        >
          <select
            class="w-full px-4 py-3 text-sm rounded-xl :focus:outline-none outline-none"
            v-model="form.duration"
          >
            <option
              v-for="duration in durationOptions"
              :disabled="duration.isDisabled"
              :key="duration.value"
              :value="duration.value"
            >
              {{ duration.label }}
            </option>
          </select>
        </div>
      </div>
      <div class="my-8 flex items-start">
        <input
          v-model="form.isTnCAgreed"
          type="checkbox"
          id="terms"
          class="mr-2 w-8 h-8 -mt-1"
        />
        <label for="terms" class="text-xs">
          I agree to receive email communications from Pixeldust Technologies
          upon availability of covid-19 vaccine slots on cowin platform.</label
        >
      </div>

      <div class="mb-6">
        <button
          type="submit"
          @click="submit($event)"
          class="w-full px-6 py-3 text-white font-medium flex justify-center outline-none items-center bg-purple rounded-full"
          :class="{
            'cursor-pointer': isFormValid,
            'opacity-40 cursor-not-allowed pointer-events-none': !isFormValid,
          }"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
const emailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@([a-z\d]{1,}[a-z+\d_-]*)(([.][a-z]{2,}){1,})$/i
)

export default {
  name: 'FormMobile',
  props: {},

  data: () => ({
    form: {
      email: null,
      pincode: null,
      duration: null,
      isTnCAgreed: false,
    },
    isSubmitting: false,
    durationOptions: [
      {
        label: 'Select',
        value: null,
        isDisabled: true,
      },
      {
        label: '7 days',
        value: 'week',
      },
      {
        label: '15 days',
        value: 'twoweek',
      },
      {
        label: '1 month',
        value: 'month',
      },
      {
        label: '3 months',
        value: '3month',
      },
    ],
  }),

  computed: {
    isFormValid() {
      const { email, pincode, duration, isTnCAgreed } = this.form
      console.log(email)
      if (!email || !emailRegex.test(email)) {
        return false
      }
      if (!pincode || pincode.length !== 6) {
        return false
      }
      if (!duration) {
        return false
      }
      if (!isTnCAgreed) {
        return false
      }
      return true
    },
  },

  methods: {
    getDates() {
      let dateFormat = 'yyyy-MM-dd'
      let to_date
      switch (this.form.duration) {
        case 'week':
          to_date = this.$dateFns.add(new Date(), { days: 7 })
          break
        case 'twoweek':
          to_date = this.$dateFns.add(new Date(), { days: 15 })
          break
        case 'month':
          to_date = this.$dateFns.add(new Date(), { months: 1 })
          break
        case '3month':
          to_date = this.$dateFns.add(new Date(), { months: 3 })
          break
      }
      return {
        from_date: this.$dateFns.format(new Date(), dateFormat),
        to_date: this.$dateFns.format(to_date, dateFormat),
      }
    },
    async submit(event) {
      event.preventDefault()
      if (!this.isFormValid) {
        alert('Please enter required values!')
        return
      }

      const { email, pincode } = this.form
      const formData = {
        email,
        pincode,
        ...this.getDates(),
      }
      this.isSubmitting = true
      try {
        await this.$axios.$post(
          'https://api.cowin-alerts.pixeldust.app/api/register',
          formData
        )
        this.$emit('next')
      } catch (error) {
        console.error(error)
        alert('An error occurred! Please try again later.')
      }
      this.isSubmitting = false
    },
  },
}
</script>
<style lang="postcss" scoped>
.process-wrapper {
  background: rgb(240, 251, 252);
  background: linear-gradient(180deg, #f4feff, #d1f4ff);
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  border: none;
}
.select-container:after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  pointer-events: none;
}
.select-container:after {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  top: 20px;
  right: 0.75em;
  border-top: 8px solid black;
  opacity: 0.5;
}
select::-ms-expand {
  display: none;
}
</style>
