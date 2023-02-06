import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')
/* Guest Component */

/* Layouts */
const DahboardLayout = () => import('@/components/layouts/Default.vue')
const DashboardSidebar = () => import('@/components/layouts/DefaultSide.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/components/Dashboard.vue')
/* Authenticated Component */
const GuestChat = () => import('@/components/GuestChat.vue')
const GuestBox = () => import('@/components/GuestChatBox.vue')

const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest" ,
            title: `Login`
        }
    },

    // Guest Routes
      
    {
       name: "GuestChat",
         path: "/",
            component: GuestChat,
            meta: {
                
                title: `Guest`

            },
            


    },
     
    // Guest Chat Box Route 

     {
        name:"chatbox",
        path:'/chatbox',
        component: GuestBox,
        meta: {
            title: `Chat Box`
        }


     },


    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        path: "/admin",
        component: DashboardSidebar,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/admin',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "login" })
        }
    }
})

export default router