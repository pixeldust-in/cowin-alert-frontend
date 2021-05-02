<template>
  <div>
    <Header />
    <div class="flex md:flex-row items-center flex-col">
      <div
        class="md:w-407 w-full p-8 bg-blue flex justify-center items-center rounded-xl"
      >
        <img src="@/assets/images/vaccine-welcome.svg" />
      </div>
     
      <div class="md:w-310 w-full md:ml-24">
        <div class="md:text-4xl font-bold">Register for Alerts</div>
        <div class="mt-8 mb-4">
          <div class="mb-2">
            <Text-input />
          </div>
          <div>
            <Text-input />
          </div>
          <div class="pl-3 uppercase text-sm">Select your age bracket:</div>
          <div class="flex justify-between mt-4 -mx-2">
            <div
              class="bg-purple border-2 flex flex-1 py-2 px-3 justify-between border-purple text-white mx-2 rounded-lg"
            >
              Yes
              <img src="@/assets/images/checked.svg" class="flex-shrink-0 ml-2" />
            </div>
            <div
              class="text-black-1 flex border-gray border-2 justify-between flex-1 py-2 px-3 mx-2 rounded-lg"
            >
              No
            </div>
          </div>
          <div class="form-group mt-6">
            <input type="checkbox" id="css" />
            <label for="css"
              >I agree to receive email/SMS/calls/online communications from P&G
              Brands directly or through their 3rd Party vendors on product
              sampling & marketing promotions. Click to read P&G Privacy
              Policy.</label
            >
          </div>
        </div>
        <div class="w-235">
          <Button>Register for Alerts</Button>
        </div>
      </div>
    </div>
    <div
      class="flex justify-between md:flex-row flex-col p-8 border rounded-lg mt-10"
    >
      <div class="flex mt-6 md:mt-0">
        <img src="@/assets/images/unsubscribe.svg" class="flex-shrink-0" />
        <span class="pl-5"
          >Get <b>realtime updates</b> on<br />
          vaccine availability</span
        >
      </div>
      <div class="flex mt-6 md:mt-0">
        <img src="@/assets/images/realtime-updates.svg" class="flex-shrink-0" />
        <span class="pl-5"
          >Get <b>realtime updates</b> on<br />
          vaccine availability</span
        >
      </div>
      <div class="flex mt-6 md:mt-0">
        <img src="@/assets/images/data-erased.svg" class="flex-shrink-0" />
        <span class="pl-5"
          >Get <b>realtime updates</b> on<br />
          vaccine availability</span
        >
      </div>
    </div>
   <SuccessMobile />
    <div class="w-full md:w-536 mx-auto mt-8 flex justify-between md:flex-row flex-col space-y-4 md:space-y-0">
      <span
        class="bg-purple md:pr-4 text-white flex-1 flex items-center justify-center py-3 font-medium border border-purple rounded-full text-center"
        >Share this link</span
      >
      <span
        class="text-purple flex-1 flex items-center justify-center py-3 font-medium border border-purple rounded-full text-center"
        >Unsubscribe</span
      >
    </div>
  </div>
</template>

<script>
import TextInput from '~/components/TextInput.vue'
export default {
  components: { TextInput },
}
</script>

<style>
.form-group {
  display: block;
  margin-bottom: 15px;
  position: relative;
}

.form-group input {
  opacity: 0;
  position: absolute;
}

.form-group label {
  position: relative;
  cursor: pointer;
  font-size: 10px;
  line-height: 14px;
  padding-left: 40px;
  display: inline-block;
}

.form-group label:before {
  content: '';
  position: absolute;
  border: 2px solid #e4e4e4;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  width: 20px;
  border-radius: 2px;
  color: #33393a;
  background-color: #fff;
  height: 20px;
  left: 0px;
  margin-right: 5px;
}

.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 4px;
  left: 9px;
  width: 6px;
  height: 14px;
  border: solid #4255fe;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
