import ollama from "ollama";
import {ref} from "vue";

export const useChat = () => {
    let loading = ref(false)
    let output = ref('')


    const sendMessage = async (content: string, messages: { role: string, content: string }[]) => {
        messages.push({role: 'user', content});
        const response = await ollama.chat({model: 'deepseek-r1:8b', messages: messages, stream: true});
        loading.value = true;
        for await (const part of response) {
            output.value += part.message.content;
        }
        loading.value = false;
        return {role: 'agent', content: output.value};
    }

    return { loading, output, sendMessage }
}