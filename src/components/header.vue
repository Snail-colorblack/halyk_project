<template>
    <div class="mx-auto w-full px-10">
        <div class="my-11 text-center">
            Поиск клиента в АФМ
        </div>
        <form action="" @submit.prevent="searchUser" class="flex flex-col items-center">
            <div class="flex items-center justify-between rounded border-2 border-stone-200 px-5 py-2 w-full">
                <input type="text" class="outline-none px-1 py-2" placeholder="Введите ИИН" v-model.number="ID_value" minlength="12" maxlength="12">
                <button class="flex items-center justify-center">
                    <img src="@/assets/camera.svg" alt="camera.svg">
                </button>
            </div>
            <input class=" my-4 w-full px-6 py-4 rounded bg-blue-200 text-sm transition-colors hover:bg-blue-300" type="submit" value="Выполнить поиск">
        </form>
    </div>
</template>

<script>
export default {
    name: 'app_header',
    data(){
        return{
            ID_value: ''
        }
    },
    methods:{
        searchUser(){
            this.$emit('userId', this.ID_value)
        }
    }
}   
</script>
