<template>
    <div
      class="flex justify-between md:flex-row flex-col p-8 rounded-lg md:mt-10 process-wrapper md:text-base text-xs"
    >
    
      <div class="flex md:w-1/3">
        <img src="@/assets/images/realtime-updates.svg" class="flex-shrink-0" />
        <span class="pl-5"
          >Get <b>realtime email updates</b> <br /> on
          vaccine availability</span
        >
      </div>
      <div class="flex md:w-1/3 mt-4 md:mt-0">
        <img src="@/assets/images/unsubscribe.svg" class="flex-shrink-0" />
        <span class="pl-5">
          <strong> Unsubscribe </strong> from alerts <br />
          anytime
        </span>
      </div>

      <div class="flex md:w-1/3 mt-4 md:mt-0">
        <img src="@/assets/images/data-erased.svg" class="flex-shrink-0" />
        <span class="pl-5">
          Your <strong> data is erased </strong> when  <br />
           you unsubscribe
        </span>
      </div>
    </div>
</template>
<style lang="postcss" scoped>
.process-wrapper {
  background: rgb(240, 251, 252);
  background: linear-gradient(180deg, #f4feff, #d1f4ff);
}
</style>