import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      tempErrors["firstName"] = "First Name is required";
      isValid = false;
    }
    if (!formData.lastName) {
      tempErrors["lastName"] = "Last Name is required";
      isValid = false;
    }
    if (!formData.username) {
      tempErrors["username"] = "Username is required";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors["email"] = "Email is invalid";
      isValid = false;
    }
    if (!formData.password) {
      tempErrors["password"] = "Password is required";
      isValid = false;
    }
    if (!formData.phoneNo) {
      tempErrors["phoneNo"] = "Phone Number is required";
      isValid = false;
    }
    if (!formData.country) {
      tempErrors["country"] = "Country is required";
      isValid = false;
    }
    if (!formData.city) {
      tempErrors["city"] = "City is required";
      isValid = false;
    }
    if (!formData.panNo) {
      tempErrors["panNo"] = "PAN Number is required";
      isValid = false;
    }
    if (!formData.aadharNo) {
      tempErrors["aadharNo"] = "Aadhar Number is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: { formData } });
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          <div className="error">{errors.firstName}</div>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          <div className="error">{errors.lastName}</div>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          <div className="error">{errors.username}</div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <div className="error">{errors.email}</div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
          <div className="error">{errors.password}</div>
          <input type="checkbox" onChange={() => setShowPassword(!showPassword)} /> Show Password
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
          <div className="error">{errors.phoneNo}</div>
        </div>
        <div className="form-group">
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="INDIA">INDIA</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            {/* Add more options as needed */}
          </select>
          <div className="error">{errors.country}</div>
        </div>
        <div className="form-group">
          <label>City</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            {/* City options based on selected country */}
            {formData.country === 'INDIA' && (
              <>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
              </>
            )}
            {formData.country === 'USA' && (
              <>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </>
            )}
            {formData.country === 'UK' && (
              <>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Birmingham">Birmingham</option>
              </>
            )}
          </select>
          <div className="error">{errors.city}</div>
        </div>
        <div className="form-group">
          <label>PAN Number</label>
          <input type="text" name="panNo" value={formData.panNo} onChange={handleChange} />
          <div className="error">{errors.panNo}</div>
        </div>
        <div className="form-group">
          <label>Aadhar Number</label>
          <input type="text" name="aadharNo" value={formData.aadharNo} onChange={handleChange} />
          <div className="error">{errors.aadharNo}</div>
        </div>
        <button type="submit" disabled={!Object.keys(errors).length === 0}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
