<template>
    <div>
        <ul uk-tab>
            <li><a href="#">Apple</a></li>
            <li><a href="#">Android</a></li>
        </ul>

        <ul class="uk-switcher uk-margin">
            <li><p>Выберите свою группу и нажмите на ссылку</p>
                <p>Она будет автоматически добавлена в ваш календарь</p>
            </li>
            <li><p>Для Android подписка работает через <b>Google календарь</b></p>
                <p>Выберите свою группу, скопируйте ссылку и вставтьте <a
                        href="https://calendar.google.com/calendar/r/settings/addbyurl">на сайте google календаря</a>
                </p>
                <p>Зайдите в приложение Google календарь на телефоне ➡ Настройки ➡ Расписание Университета (может быть
                    скрыто под Ещё) ➡ Включить синхронизацию</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Instructions"
    }
</script>

<style scoped>

</style>