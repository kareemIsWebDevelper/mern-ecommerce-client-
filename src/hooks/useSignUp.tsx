export default function useSignUp() {

    const signUp = (username, email, password) => {

        fetch('http://localhost:5000/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({
            username,   
            email,
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

  return { signUp }
}
