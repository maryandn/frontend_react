

const action = () => {
    const cors = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(
        //     function () {
        //         if (form.input === 'Войти') {
        //             console.log(bodyLogin)
        //             return {bodyLogin}
        //         } else {
        //             console.log(bodySignup)
        //             return {bodySignup}
        //         }
        //     }
        // )
    };
    console.log(cors.body)
    fetch("http://127.0.0.1:8000/token/", cors)
        .then(response => response.json())
        .then(data => {
            if (data.access) {
                localStorage.setItem("token", data.access)
            } else {
                console.log(data)
            }
        })
        .catch(function (error) {
            console.log(error)
        });
    // updateHandleClose(false)
}

export default action();
