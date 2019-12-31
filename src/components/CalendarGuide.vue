<template>
    <div>
        <ul uk-tab>
            <li><a href="#">Android</a></li>
            <li><a href="#">Apple</a></li>
        </ul>
        <ul class="uk-switcher uk-margin instruction-block"
            uk-switcher="active: 2">
            <li>
                <p>Для Android подписка работает через <b>Google календарь</b></p>
                <p class="uk-margin-small-bottom">
                    Выберите свою группу, скопируйте ссылку и вставтьте
                    <a href="https://calendar.google.com/calendar/r/settings/addbyurl">на сайте google календаря</a>
                </p>
                <p class="uk-margin-small-bottom">
                    Зайдите в приложение Google календарь на телефоне и проделайте действия
                </p>
                <ul class="uk-list uk-list-bullet">
                    <li>
                        Настройки
                    </li>
                    <li>
                        Расписание Университета (может быть
                        скрыто под Ещё)
                    </li>
                    <li>
                        Включить синхронизацию
                    </li>
                </ul>
            </li>
            <li>
                <p>Выберите свою группу и нажмите на ссылку</p>
                <p>Следуйте инструкции предложенной устройством</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "calendar-guide"
    }
</script>

<style scoped>
    .instruction-block{
        line-height: 1.3;
    }
</style>