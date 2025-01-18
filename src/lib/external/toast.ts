import {toast} from '@zerodevx/svelte-toast';

export const showToast = (message: string, type = 'error') => {
    toast.push(message, {
        theme: {
            '--toastBackground': type === 'error' ? '#f56565' : '#48bb78',
            '--toastColor': 'white',
            '--toastBarBackground': type === 'error' ? '#c53030' : '#2f855a'
        }
    });
};
