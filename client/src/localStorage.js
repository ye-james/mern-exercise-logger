export const loadState = () => {
    try {
        const serializedStorage = localStorage.getItem('user');
        if( serializedStorage === null) {
            return undefined;
        }
        return JSON.parse(serializedStorage)
    } catch (err) {
        return undefined;
    }
}