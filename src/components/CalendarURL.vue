<template>
    <h4>
        Кто вы?
    </h4>
    <input type="radio" id="one" value="group" v-model="type">
    <label for="one">Студент</label>
    <br>
    <input type="radio" id="two" value="lecturer" v-model="type">
    <label for="two">Преподаватель</label>
    <div key=1 v-if="type === 'group'">
        <h4>Выберите вашу группу</h4>
    </div>
    <div key=1 v-else-if="type === 'lecturer'">
        <h4>Bведите свое ФИО</h4>
    </div>
    <div v-if="type">
        <div class="panel panel-default">
            <div class="row">
                <div class="search-wrapper panel-heading col-sm-12">
                    <input class="form-control" type="text" v-model="searchQuery" placeholder=")" />
                </div>
            </div>
            <div class="panel-body">
                <div v-if="computedItems.length">
                    <transition-group
                            name="list-complete"
                            tag="div">
                        <div v-for="item in computedItems"
                             v-bind:key="item.id" v-bind:data-index="item.label"
                             class="list-complete-item">
                            <button v-on:click="choiceItem(item.id, item.label)">{{ item.label }}</button>
                        </div>
                    </transition-group>
                </div>
                <div v-else>
                    <p>Группа не найдена</p>
                </div>
            </div>
        </div>
    </div>
    <div v-if="computedAll">
        <p>
            Ваша ссылка: <span>{{ 'https://bot.fa.ru/calendar/' + type + '/' + id }}</span>
        </p>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'calendar-url',
        data: () => ({
            searchQuery: '',
            items: [],
            id: null,
            name: null,
            type: null,
        }),
        created() {
            this.id = this.$route.query.id;
            this.name = this.$route.query.name;
            this.type = this.$route.query.type;
        },
        computed: {
            computedAll (){
                return this.type && this.name && this.id
            },
            computedItems (){
                if (this.items) {
                    return this.items.filter((item) => item.label.trim().toUpperCase().startsWith(this.searchQuery.toUpperCase()))
                }
                return this.items;
            }
        },
        watch: {
            searchQuery: async function () {
                this.getData()
            },
            type: async function () {
                this.items = []
            }
        },
        methods: {
            getData: async function() {
                axios.get('https://ruz.fa.ru/api/search?term=' + this.searchQuery + '&type=' + this.type)
                    .then(response => {
                        console.log('https://ruz.fa.ru/api/search?term=' + this.searchQuery + '&type=' + this.type)
                        const ids = new Set(this.items.map(d => d.id));
                        this.items = [...this.items, ...response.data.filter(d => !ids.has(d.id))];
                    })
            },
            choiceItem: async function (id, label) {
                this.id = id;
                this.name = label.trim();
            }
        }
    }
</script>
