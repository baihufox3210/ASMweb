import axios from 'axios';

const API_URL = 'https://orangepione.taile483df.ts.net/ASM';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getTasks = async () => {
    const response = await api.get('/get_tasks');
    return response.data;
};

export const addTask = async (taskData) => {
    const response = await api.post('/add_task', taskData);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await api.post(`/delete_task?id=${id}`);
    return response.data;
};

export default api;