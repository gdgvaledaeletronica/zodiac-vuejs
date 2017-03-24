<template>
    <div id="answer" class="row col-md-12">
        <div v-if="zodiac" class="col-md-12">
            <h2>{{ zodiac.name }}</h2>
            <img :src="zodiac.img + extensao" :title="zodiac.title">
        </div>
        <div v-html="zodiac.html" class="col-md-12"></div>
    </div>
</template>

<script>
    import ZodiacService from '../services/zodiacService.js'

    export default {
        name: 'Answer',
        props: ['date', 'darkHumor'],
        data () {
            return {
                zodiac: ''
            }
        },
        watch: {
            date (val) {
                this.zodiac = ZodiacService(val)
                console.log(this.zodiac)
            }
        },
        computed: {
            extensao () {
                return this.darkHumor ? '.jpg' : '.png'
            }
        }
    }
</script>

<style>

</style>
