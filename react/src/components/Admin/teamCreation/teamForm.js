import { useState, useEffect } from "react";

const TeamForm = () => {
    const [values, setValues] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        confPass: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
    };

    return {handleChange, values, handleSubmit};
}
export default TeamForm;