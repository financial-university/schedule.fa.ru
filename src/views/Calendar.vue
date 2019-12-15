<template>
  <div>
    <div class="row">
      <div class="item">
        <h1>
          Календарь
        </h1>
      </div>
      <div class="item">
        <CalendarUrl/>
      </div>
    </div>
<!--    Тут правая сторона   -->
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


