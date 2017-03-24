import Vue from 'vue'
import FormZodiac from './components/Form.vue'
import Answer from './components/Answer.vue'

new Vue({
    el: '#app',
    data: {
        date: '',
        darkHumor: false
    },
    template: `
        <div class="container">
            <FormZodiac v-on:setValues="setValues" />
            <answer v-bind:date="date" :darkHumor="darkHumor" />
        </div>
    `,
    methods: {
        setValues: function(day, month, darkHumor) {
            this.date = new Date(2017, month-1, day)
            this.darkHumor = darkHumor
        }
    },
    components: {
        FormZodiac,
        answer: Answer
    }
})
