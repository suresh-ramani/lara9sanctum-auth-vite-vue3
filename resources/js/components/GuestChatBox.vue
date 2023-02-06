
<script>

import GuestLayout from './layouts/GuestLayout.vue'
import { Configuration, OpenAIApi } from "openai";

export default {
    name : "GuestChat",
     components: {
        GuestLayout
    },

     data() {
    return {
      userMessage: '',
      messages: [],
      pq: this.$route.query.pq,
      oq: this.$route.query.oq,
    };
  },
  mounted() {
    if (this.pq) {
      
      this.userMessage = this.pq;
    }
    if (this.oq) {
      
      this.userMessage = this.oq;
    }
  },
  
  methods: {
    async handleFormSubmit(event) {
      event.preventDefault();
      
      this.messages.push(this.userMessage);
      const configuration = new Configuration({
     apiKey: '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',
});
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: this.userMessage + '\n',
         max_tokens: 300,
         temperature: 0,
          
        });
        
      this.messages.push(response.data.choices[0].text);
      this.userMessage = '';
    },
  },
}


</script>

<template>
  <GuestLayout />


<div class="chat">
<div class="max-width"> 
<div class="flex" v-for="message in messages">

<img class="user-profile" src="/images/user.jpeg" alt="">

<div class="chat-text"> {{ message }}</div>


</div>

</div>

<div class="">
    <form  class="relative" @submit="handleFormSubmit">
<input type="text" class="chat-input h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" v-model="userMessage">
 <button  type="submit"><div class="absolute top-4 right-3">
            <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div> Ask me</button>
   </form>
</div>

</div>


</template>




<style>
body {
      background-color: #C5C7C9;
      font-family: 'Lato', sans-serif;
    }

    a {
        text-decoration: none;
        color: rgb(255, 255, 255);
    }

      @media (min-width: 560px) {
            
           
            .navbar{
           

                max-width: 1920px;
                min-width: 100px;
                max-height: 188px;
                height: 98px;
               background: #1F4584;
               border-radius: 0px 0px 200px 200px;
               display: flex;
               justify-content: center;
               transition:  0.3s ease-in-out;
    
           }
   
   
           .navbar:hover {
             
               background: #6195e9;
               ;
               
   
           }
   
           .menu{
               float: left;
               display: inline-block;
               color: #f2f2f2;
               text-align: center;
               padding: 34px 16px;
               margin-left: 49px;
               text-decoration: none;
               font-size: 15px;
               transition: transform 0.2s ease-in-out;
   
           }
   
           .menu:hover {
             
               transform: scale(1.5);
   
           }
   
           .blue{
   
               color: #1F4584;
           }
   
           .title{
   
               font-size: 25px;
               margin-top: 15px;
           }
   
            .scard{
                max-width: 700px;
                min-width: 400px;
                max-height: 600px;
                min-height: 600px;
                background: linear-gradient(126.05deg, rgba(31, 69, 132, 0.74) 35.03%, rgba(31, 69, 132, 0) 117.46%);
                border-radius: 49px;
                text-align: center;
               }

               .scard-title{
                
                font-size: large;
                color: white;
                padding-top: 40px;


               }

               .sub-card{
                  
                max-width: 400px;
                min-width: 300px;
                max-height: 100px;
                min-height: 80px;
                background: rgba(31, 69, 132, 0.98);
                box-shadow: 10px 10px 20px rgba(42, 78, 137, 0.5);
                border-radius: 30px;
                margin: 40px;
                transition: transform 0.2s ease-in-out;
                transition:  0.3s ease-in-out;
      

                   

               }

               .sub-card:hover 
               {
                  
                transform: scale(1.1);
                background: rgba(56, 110, 198, 0.98);

               }

               .sub-title{
              
                font-size: 16px;
                color: white;
                margin: 20px;
                padding-top: 30px;
                
               }

               .ask-bar{
                 
                max-width: 1400px;
                min-width: 400px;
                max-height: 100px;
                min-height: 90px;
                background: linear-gradient(91.78deg, rgba(31, 69, 132, 0.98) 7.02%, rgba(31, 69, 132, 0.362163) 105.65%, rgba(31, 69, 132, 0) 105.67%);
                filter: drop-shadow(10px 10px 20px rgba(34, 72, 133, 0.5));
                border-radius: 30px;
                margin-top: 40px;
                display: flex;
                margin-left: 200px;
                margin-right: 200px;
                transition: transform 0.2s ease-in-out;
                justify-content: center;
                
               }

               .ask-bar:hover {
               
                transform: scale(1.05);
                

               }
                 
               .ask-title{
                 
                font-size: 16px;
                color: white;
                margin: 20px;
                padding-top: 10px;


               }
            .suggestions{
              
                display: flex;
                margin-top: 20px;
                justify-content: center;
                
            }
            .space{
                margin-right: 20px;
                
            }
        .links{
         display: flex;
         text-align: center;
        }

        .logo{
          
            margin-left: 80px;
            margin-right: 80px;
            padding-left: 10px;
            padding-right: 10px;
            position: relative;
            width:130px;
            height: 64px;
            margin-bottom: 30px;
            



    
        }


        .chat {
          
            max-width: 1600px;
            min-width: 500px;
            max-height: 800px;
            min-height: 790px;
            background: linear-gradient(126.05deg, rgba(31, 69, 132, 0.74) 35.03%, rgba(31, 69, 132, 0) 117.46%);
            border-radius: 21px;
            margin-top: 40px;
            margin-left: 200px;
            margin-right: 200px;
            text-align: center;
            



        }

        .user-profile {
         
            width: 43px;
            height: 43px;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.18));
            border-radius: 30px;
            margin: 40px;

        }

        .chat-text {

               font-size: 16px;
                color: white;
                margin-left: 3Opx;
                margin-top: 50px;


        }

        .line {
           
            border-bottom: 1px solid rgba(10, 9, 9, 0.18);;
            
        }




        .max-width{

            width: 100%;
            height:680px;
            overflow-y:scroll;
        }
      

.chat-input {
    position: relative;
    width:100%;
    min-width: 400px;
    max-height: 100px;
    min-height: 78px;
    background: rgba(31, 69, 132, 0.81);
    border-radius: 20px;
    color: #C5C7C9;
    padding: 20px;
    
   
}  



.input-button {

    
   
}


.logout-button{
   
/* Logout Button css  */
  
    position: absolute;
    width: 100px;
    height: 40px;
    left: 1200px;
    top: 20px;
    background: #1F4584;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    transition:  0.3s ease-in-out;
    cursor: pointer;
    border: none;
    outline: none;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: transform 0.2s ease-in-out;
    transition:  0.3s ease-in-out;
    display: inline-block;
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    background: #1F4584;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    transition:  0.3s ease-in-out;
    transition: transform 0.2s ease-in-out;
    display: inline-block;
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    background: #1F4584;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    transition:  0.3s ease-in-out;


}

    }
    


</style>