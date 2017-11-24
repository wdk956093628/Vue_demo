import index from "./components/index.vue";
import search from "./components/search-content.vue";
import indexDialog from "./components/index-dialog.vue";

import contacts from "./components/contacts.vue";
import find from "./components/find.vue";
import mine from "./components/mine.vue";


export let routes = [
    {
        path: "/",
        component: index,
    },
    {
        path:"/index",
        component:index,
        children:[
            {
                path:"/index/dialog",
                component:indexDialog
            }
        ]
    },
    {
        path:"/search",
        component:search
    },
    {
        path:"/contacts",
        component:contacts
    },
    {
        path:"/find",
        component:find
    },
    {
        path:"/mine",
        component:mine
    },
    {
        path:'*',
        redirect:'/'
    }
];