<template>
  <div>
    <div class="desktop-view">
      <Header :class="{ 'flex justify-center': stage === 2 }" />
      <div v-show="stage === 0 || stage === 1">
        <div class="flex md:flex-row items-start flex-col">
          <div
            class="md:w-407 w-full p-8 bg-blue flex justify-center items-center rounded-xl"
          >
            <img src="@/assets/images/vaccine-welcome.svg" />
          </div>
          <div v-show="stage === 0" class="flex-1 md:mx-24 md:pr-40">
            <div class="md:text-4xl font-bold mt-10">
              The registrations are closed for this application now!
            </div>
            <div class="text-xl my-8">
              Visit <a href="https://selfregistration.cowin.gov.in/"> https://selfregistration.cowin.gov.in/</a> for registrations
            </div>
          </div>
          <div v-if="stage === 1" class="md:w-4/12 w-full md:ml-24">
            <FormMobile @next="stage = 2" />
          </div>
        </div>
        <ProcessFlow />
      </div>
      <SuccessMobile v-if="stage === 2" class="mx-auto" />
    </div>
    <div class="mobile-view">
      <Header />
      <LandingMobile v-if="stage === 0" @next="stage = 1" />
      <div v-if="stage === 1">
        <ProcessFlow />

        <FormMobile @next="stage = 2" />
      </div>
      <SuccessMobile v-if="stage === 2" />
    </div>

    <div class="text-xs md:text-sm md:flex-row flex-col items-center justify-center md:mt-20 py-8  md:flex ">
      <div class="text-center">
      Developed by team
      <a href="https://pixeldust.in" target="_blank" class="text-purple ml-1"
        >Pixeldust Technologies</a
      >
      </div>
      <span class="mx-1 md:block hidden">|</span>
      <div class="md:text-left text-center">
      connect with us at  <a href="mailto:cowin-alerts@pixeldust.in" class="text-purple ml-1"> cowin-alerts@pixeldust.in</a>
      </div>
    </div>
    <div class="md:text-xs pb-8 text-xxs text-center md:px-40">
       Pixeldust Technologies Pvt. Ltd. treats all user data with utmost care and only uses it for sending notifications to the user for the purpose indicated. User data is deleted after the completion of the duration specified in the 'number of days' alerts opted for by the user, or when the user unsubscribe, whichever is earlier.
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  header() {
    const title = 'Cowin Alerts By Pixeldust'
    const description =
      'Get realtime email alerts for vaccine availability for 18-45 age group in your pincode.'
    const site_name = 'cowin-alerts.pixeldust.in'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:site_name', property: 'og:site_name', content: site_name },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },
  data: () => ({
    stage: 0,
  }),
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

@media screen and (max-width: 499px) {
  .mobile-view {
    display: block;
  }
  .desktop-view {
    display: none;
  }
}
@media screen and (min-width: 500px) {
  .mobile-view {
    display: none;
  }
  .desktop-view {
    display: block;
  }
}
</style>
