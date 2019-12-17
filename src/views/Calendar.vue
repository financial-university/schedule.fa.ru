<template>
  <div>
    <main>
      <header>
        <router-link v-bind:to="'/'">
          <a>Назад</a>
        </router-link>
        <h1>Календарь</h1>
      </header>
      <section class="cards">
        <article>
          <CalendarUrl/>
        </article>
        <article>
          Test
        </article>
      </section>
    </main>
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

  /* General styles -------------------------------------------------*/
  header {
    padding: 20px 10px;
  }
  h1 {
    font-size: 6vh;
  }
  header a {
    font-size: 2.3vh;
  }

  /* Grid styles -------------------------------------------------*/
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50vh, 1fr));
    grid-gap: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
