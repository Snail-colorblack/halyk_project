<template>
  <div class="container mx-auto h-screen bg-white max-w-xl">
    <!-- Разделение на компоненты. По идее можно избавиться от их обилия, чтобы-->
      <div class="flex flex-col justify-between h-full">
      <Header @userId='searchUser'/>
      <Request :client='this.status'/>
      <Footer />
      </div>
  </div>
</template>

<script>
import json from '../data.json'
// import xml from '../data.xml'
import Header from '@/components/header.vue'
import Request from '@/components/request.vue'
import Footer from '@/components/footer.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Header, Request, Footer
  },
  data(){
    return{
      users:[],
      status: null
    }
  },
  methods:{
    searchUser(data){
      for(let item of json.users){
        if(data === item.iin){
          this.status = true
          return
        }
        else{
          this.status = false
        }
      } 
    }
  },
  // Тестовый локальный сервер. Переписать запрос на https://afmrk.gov.kz/blacklist/export/active/xml
  // async created(){
  //   const res = await axios.get('http://localhost:3000/users') 
  //   this.users = res.data
  // }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
}
#app{
  background: #c7c7c7;
}
</style>
