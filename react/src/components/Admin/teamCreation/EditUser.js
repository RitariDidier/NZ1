import React from "react";
import TeamForm from './teamForm';
import './form.css';

const EditUser = () => {
    const {handleChange, values, handleSubmit} = TeamForm();
    return (
        <div className="form-container">
        <div className = "form-content-left">
        <form className="form"onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <div className = "form-inputs">
                <input type ="text" className="form-input" name="fName" placeHolder="First Name" value={values.fName} onChange={handleChange} required></input>                
            </div>
            <div className="form-inputs">
            <input type="text" className="form-input" name="lName" placeHolder="Last Name"value={values.lName} onChange={handleChange} required></input>
            </div>
            <div className="form-inputs">
            <input type="email" className="form-input" name="email" placeHolder="Email"value={values.email} onChange={handleChange} required></input>
            </div>
            <div className="form-inputs">
            <input type="password" className="form-input" name="password" placeHolder="Password"value={values.password} onChange={handleChange} required></input>
            </div>
            <div className="form-inputs">
            <input type="password" className="form-input" name="confPass" placeHolder="Confirm Password"value={values.confPass} onChange={handleChange} required></input>
            </div>
            <button className="form-input-btn" type="submit">
                Create User
            </button>
        </form>
        </div> 
        <div className="form-content-right">
        <form className="form">
            <h2>Edit Existing User</h2>
        <div className="form-inputs">
            <select className="form-input">
                <option value="John bob">John bob</option>
                <option>Joel haver</option>
                <option>Sarah Craw</option>
            </select>
        </div>
        <div className="form-inputs">
            <h4 for="names" className="Text">Field to edit</h4>
            <select name="names" className="form-input">
                <option value="default" hidden>Name</option>
                <option>David</option>
            </select>
        </div>
        <div className="form-inputs">
            <input type="text" className="form-input" name="fName2"placeholder="First Name"></input>
        </div>
        <div className="form-inputs">
            <input type="text" className="form-input" name="lName2"placeholder="Last Name"></input>
        </div>
        <div className="form-inputs">
            <button className="form-input-btn" type="button">Confirm Edit</button>
        </div>
        </form>
        </div>
        </div>
        
    );
};
export default EditUser;