

<template>
    <div class="container">
        
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Dashboard</h3>
                    </div>
                    <div class="card-body">
                        <p class="mb-0">You are logged in as <b>{{user.email}}</b></p>
                    </div>
                </div>
            </div>
        </div>


<div class="flex-cards">
         <div class="row mt-3 ">
            
            <div class="col-20 card-big">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Popular Questions</h3>
                    </div>
                    <div class="card-body">
                        <h1>Add Popular Question </h1>
                        <!-- Add Popular Question Form -->
                        <form @submit.prevent="storeQuestion()">
                            <div class="form-group">
                                <label class="label" for="question">Question</label>
                                <input 
                                    type="text"
                                    id="question"
                                    name="question"
                                    v-model="question"
                                    class="form-control"
                                >
                            </div>

                            <!-- Select Input of type , 'Popular' -->

                             <div class="form-group">

                                <label  class="label" for="type">Type</label>
                                <select 
                                    id="type"
                                    name="type"
                                    v-model="type"
                                    class="form-control"
                                >
                                    <option value="popular">Popular</option>
                                    
                                </select>
                             </div>

                              

                            <button type="submit" class="btn-form">Submit</button>
                        </form>


                       <div class="divider"></div>         
                           <!-- Fetch Popular Questions from Database -->
                       <ul class=""  v-for="question in questions">
                           <li v-if="question.type == 'popular' " class="questions-list">

                            
                                
                              <div >
                                
                                {{question.question}} 

                                 <!-- Delete Question from Database -->
                                 <button @click="deleteQuestion(question.id)" class="btn btn-danger">Delete</button>

                                   </div>

                              
                           </li>
                       </ul>

                           
                        

                    </div>
                </div>
             
        </div>
    </div>

         <div class="row mt-3">
            
            <div class="col-12 card-big">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Other Questions</h3>
                    </div>
                    <div class="card-body">
                        <h1>Add Other Question </h1>
                        <!-- Add Other Question Form -->
                        <form @submit.prevent="storeQuestion()">
                            <div class="form-group">
                                <label class="label" for="question">Question</label>
                                <input 
                                    type="text"
                                    id="question"
                                    name="question"
                                    v-model="question"
                                    class="form-control"
                                >
                            </div>

                            <!-- Select Input of type , 'Other' -->

                             <div class="form-group">

                                <label  class="label" for="type">Type</label>
                                <select 
                                    id="type"
                                    name="type"
                                    v-model="type"
                                    class="form-control"
                                >
                                    <option value="Other">Other</option>
                                    
                                </select>
                             </div>

                              

                            <button type="submit" class="btn-form">Submit</button>
                        </form>


                       <div class="divider"></div>         
                           <!-- Fetch Popular Questions from Database -->
                       <ul class=""  v-for="question in questions">
                           <li v-if="question.type == 'Other' " class="questions-list">

                            
                                
                               
                              <div >
                                
                                {{question.question}} 

                                 <!-- Delete Question from Database -->
                                 <button @click="deleteQuestion(question.id)" class="delete-btn">Delete</button>

                                   </div>
                              
                           </li>
                       </ul>

                           
                        

                    </div>
                </div>
             
        </div>

    </div>
</div>
   
    </div>
</template>


<script>
export default {
    name:"dashboard",
    data(){
        return {
            user:this.$store.state.auth.user,
            question: '',
            type: '',
            questions: []


        }
    },

    methods:{
       
       // Store Question in Database 

        async storeQuestion(){
            const data = {
                question: this.question,
                type: this.type,
                
            }
            try{
                const response = await axios.post('/questions', data)
                this.questions = response.data.questions
                console.log(response)
                this.fetchQuestions();
            }catch(error){
                console.log(error)
            }
        },

          //Fetch Popular Questions from Database

        async fetchQuestions(){
            try{
                const response = await axios.get('api/questions')
                this.questions = response.data.questions
                console.log(response.data.questions)
            }catch(error){
                console.log(error)
            }
        },

          async deleteQuestion(id){
            try{
                const response = await axios.delete('api/questions/' + id)
                const index = this.questions.findIndex(question => question.id === id)
                this.questions.splice(index, 1)
                console.log(response)
            }catch(error){
                console.log(error)
            }
        }
    },
    created(){
        this.fetchQuestions()

       
        
    },

       
        
         
    }
 

  
            
      


</script>

<style>
.flex-cards {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    align-content: stretch;
    justify-content: space-between;
   
}

.card-big {
    width: 600px;
    padding: 20px;
    min-width: 200px;
}

.questions-list {
    list-style: none;
    padding: 20px;
    margin: 10px;
    background: #f5f5f5;
    border-radius: 20px;
}

.divider {
    border: 1px solid #8e868680;
    margin: 20px;
}

.btn-form {
    margin-top: 10px;
    width: 100%;
    border-radius: 30px;
    background: #3339b4;
    color: rgb(255, 255, 255);
    padding: 10px;
    border: none;
    transition: 0.5s;
}

.btn-form:hover {
    background: #161b7e;
    color: rgb(255, 255, 255);
    padding: 10px;
    border: none;
   

}
.form-control {
    margin-top: 10px;
}

.label {
    margin-top: 10px;
}

.delete-btn {
    margin-left: 10px;
    background: #ff0000;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 7px;
    transition: 0.5s;
    width: 100px;
    min-width: 30px;



}

.delete-btn:hover {
    background: #ce3434;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 7px;
    transition: 0.5s;
    width: 100px;
    min-width: 30px;
    cursor: pointer;
   
}
</style>