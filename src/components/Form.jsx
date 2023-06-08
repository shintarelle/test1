import React, { useState } from 'react';


const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [radioOption, setRadioOption] = useState('');
  const [token, setToken] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleRadioChange = (event) => {
    setRadioOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation checks
    if (name.length < 2 || name.length > 60) {
      alert('Name should contain 2-60 characters');
      return;
    }

    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!phone.match(/^\+380[0-9]{9}$/)) {
      alert('Please enter a valid phone number starting with +380');
      return;
    }

    if (!photo) {
      alert('Please upload a photo');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', photo);
    formData.append('position_id', radioOption);

    // //Get a token
    // fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    //   .then(function (response) { return response.json(); })
    //   .then(function (data) {
    //     console.log(data.token);
    //     setToken(data.token)
    //     console.log('token', token)
    //   })
    //   .catch(function (error) { // proccess network errors
    // });

    // // Send the form data to the API
    // fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     'Token': token, // Replace with your actual token
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.success) {
    //       // Process success response
    //     } else {
    //       // Process server errors
    //     }
    //   })
    //   .catch((error) => {
    //     // Process network errors
    //   });
    console.log(typeof formData)
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required minLength={2} maxLength={60} />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required minLength={2} maxLength={100} />
      </label>

      <label>
        Phone:
        <input type="tel" value={phone} onChange={handlePhoneChange} required pattern="^\+380[0-9]{9}$" />
      </label>

      <label>
        Radio Options:
        <input type="radio" value="1" checked={radioOption === '1'} onChange={handleRadioChange} /> Option 1
        <input type="radio" value="2" checked={radioOption === '2'} onChange={handleRadioChange} /> Option 2
        <input type="radio" value="3" checked={radioOption === '3'} onChange={handleRadioChange} /> Option 3
        <input type="radio" value="4" checked={radioOption === '4'} onChange={handleRadioChange} /> Option 4
      </label>

      <label>
        Photo:
        <input type="file" onChange={handlePhotoChange} required accept="image/jpeg" />
      </label>

      <button type="submit">Send</button>
    </form>
  );
};

export default UserForm;
