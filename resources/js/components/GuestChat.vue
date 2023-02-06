

<script>
import GuestLayout from './layouts/GuestLayout.vue'
export default {
    name : "GuestChat",
     components: {
        GuestLayout
    },


    data() {
        return {
            popularQuestions: [],
            otherQuestions: [],
        }
    },

    methods: {
        async getPopularQuestions() {
            const response = await axios.get('/api/questions');
            this.popularQuestions = response.data.questions;
            
        },

        
        async getOtherQuestions() {
            const response = await axios.get('/api/questions');
            this.otherQuestions = response.data.questions;
        },
    },
    created() {
        this.getPopularQuestions();
        this.getOtherQuestions();
    }
    }
</script>

<template>
  <GuestLayout />


<div>
 <h1 class=" font-weight-bold text-center  title blue "> Welcome to Stable Board </h1>  </div>

<div class="suggestions">
  <div class="  space">
 
  <div class="scard" >
    
    <div class=" scard-title font-bold"> Popular Questions </div>
 

    <div v-for="pq in popularQuestions">
        <div v-if="pq.type == 'popular'">
    <router-link :to="{ name: 'chatbox', query:{pq: pq.question}}">
      <div id="pq" class="sub-card sub-title"> {{ pq.question }} </div> 
    </router-link>
    </div>
    </div>
  </div>



  </div>


  <div class="  space">
   <div class="scard" >
    
    <div class=" scard-title font-bold"> Other Questions </div>
    <div v-for="oq in otherQuestions">
         <div v-if="oq.type == 'Other'">
    <router-link  :to="{ name: 'chatbox', query:{oq: oq.question}}">
      <div id="oq" class="sub-card sub-title"> {{ oq.question }} </div> 
    </router-link>
         </div>
    </div>
  </div>
  </div>

    


</div>

<div class="ask-bar justify-center">

<router-link to="/chatbox"><div class="ask-title ">Ask any questions </div></router-link>

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