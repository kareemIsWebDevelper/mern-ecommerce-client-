export const UseCategory = () => {
    
    const uploadFile = () => {
        if (!selectedFile) return;
        const storageRef = ref(storage, `categories/${selectedFile.name}`);
        await uploadBytes(storageRef, selectedFile);
        const image = await getDownloadURL(storageRef);

        return image;
    }
}