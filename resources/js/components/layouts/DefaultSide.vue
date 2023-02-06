<template>

<div class="wrapper flex-side">
    <!-- Sidebar -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Admin Panel</h3>
        </div>

        <ul class="list-unstyled menu">
           
            <li class="active">
                <router-link to="/admin">Home</router-link>

            </li>
            <li>
                <router-link to="/admin/posts">Posts</router-link>
            </li>
            <li>
               <router-link to="/admin/users">Users</router-link>
            </li>
            <li>
                <router-link to="/admin/roles">Roles</router-link>
            </li>
            <li>
                <router-link to="/admin/permissions">Permissions</router-link>
            </li>
        </ul>
         
        <ul class="list-unstyled CTAs menu">
            <li>
                <a href="#" class="download" @click="logout">Logout</a>
            </li>

        </ul>

        

    </nav>
    <!-- Page Content -->
<div class="main-content">
     <main class="mt-3">
            <router-view></router-view>
        </main>
    </div>
   
</div>
 
  

</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"default-layout-side",
    data(){
        return {
            user:this.$store.state.auth.user
        }
    },
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        }
    }
}
</script>

<style>

.flex-side {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    align-content: stretch;
}

.main-content {
    width: 100%;
    padding: 20px;
}
.wrapper {
    display: flex;
    width: 100%;
}

#sidebar {
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 999;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
}




.sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

.menu li a {
    font-size: 1.1em;
    display: block;
    color: white;
    padding: 10px 20px;
    border-left: 3px solid transparent;
    text-decoration: none;
    transition: all 0.6s;
}

.menu li a:hover {
    color: #7386D5;
    background: #fff;
    border-left: 3px solid #7386D5;
   
}


 
</style>