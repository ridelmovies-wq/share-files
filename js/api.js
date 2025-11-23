export async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('https://file.io', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            return data;
        } else {
            throw new Error('Upload failed');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}
