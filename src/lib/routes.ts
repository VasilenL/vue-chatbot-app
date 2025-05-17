import {createMemoryHistory, createRouter} from 'vue-router'
import AdvancedView from "@/components/pages/AdvancedView.vue";
import Conversation from "@/components/smart-components/Conversation.vue";

const routes = [
    {
        path: '/',
        redirect: '/advanced-view',
    },
    {
        path: '/advanced-view',
        component: AdvancedView,
        children: [
            {
                path: '',
                redirect: 'conversations/1',
            },
            {
                path: '/conversations/:conversationId',
                component: Conversation,
            }
        ]
    },

]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})