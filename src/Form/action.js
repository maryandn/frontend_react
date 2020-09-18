import useForm from "./useForm";

async function action(form, updateHandleClose) {
    const {changeSpinnerStatus} = useForm();
    const cors = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "username": form.login,
                "password": form.password
            }
        )
    };

     await fetch("http://127.0.0.1:8000/token/", cors)
        changeSpinnerStatus('spinnerStatus', true)
        .then(response => response.json())
        .then(data => {
            if (data.access) {
                localStorage.setItem("token", data.access)
                updateHandleClose();
            } else {
                alert(data.detail);

            }
        })
        .catch(function (errorServer) {
            return {errorServer}
        });

}
export default action();
