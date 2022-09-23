<template>
        <div class="mx-auto w-full px-10">
            <!-- Если true -->
            <div class="text-center" v-if="this.client == false">
                <p class="text-blue-400 mb-5">Клиент не обнаружен</p>
                <p class="text-slate-400 w-60 mx-auto">Проведение сделок с данным клиентом возможно</p>
            </div>
            <!-- Если False -->
            <div class="text-center" v-if="this.client == true">
                <p class="text-red-400 mb-5">Клиент обнаружен</p>
                <p class="text-slate-400 w-60 mx-auto">Проведение сделок с клиентом не рекомендуется</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'content_app',
  props:['client']
}
</script>
