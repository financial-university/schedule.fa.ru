<template>
  <div >
    <div class="row">
      <div class="item">
        <h1>
          Календарь
        </h1>
      </div>
      <div class="item">
        <CalendarUrl/>ss
      </div>
    </div>
  </div>
</template>

<script>

import CalendarUrl from "../components/CalendarURL";

export default {
  name: 'calendar',
  components: {
    CalendarUrl
  }
}

</script>

<style scoped>
    .list-complete-item {
        transition: all 1s;
        /*display: inline-block;*/
        margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to
    {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }
</style>
