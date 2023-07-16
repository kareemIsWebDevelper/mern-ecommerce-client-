export default function useLogin() {

    const login = (username, password) => {

        fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username,   
            password
        }),
        headers: { 'Content-Type': 'application/json' }
        })

        .then(response => {
            console.log('Response status:', response.status);
            return response.json();
        })

        .then(data => {
            console.log('Response data:', data);
        })
        
        .catch(error => {
            console.log('Error:', error);
        });
    }

  return { login }
}
