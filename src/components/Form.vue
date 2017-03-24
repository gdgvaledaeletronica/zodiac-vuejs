<template>
    <div id="sign-form" class="row">
        <div class="well col-md-6">
            <fieldset>
                <legend>O lado negro dos Signos</legend>
                <div class="inputs">
                    <input v-model="day" type="text" placeholder="Day" class="form-control" />
                    <input v-model="month" type="text" placeholder="Month" class="form-control"/>
                </div>
                <input v-on:click="callMethod" type="button" class="btn btn-default" value="Descobrir" />
                <input @change="callMethod" type="checkbox" v-model="darkHumor"> Humor Negro
            </fieldset>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ZodiacForm',
        data () {
            return {
                day: '',
                month: '',
                darkHumor: false
            }
        },
        methods: {
            callMethod () {
                this.$emit('setValues', this.day, this.month, this.darkHumor)
            }
        }
    }
</script>

<style>
    .inputs {
        float: left;
        width: 84%;
    }
    input[type="button"] {
        height: 68px;
    }
</style>