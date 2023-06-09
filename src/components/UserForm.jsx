import React, { useState } from 'react';
import styles from '../UserForm.module.css';
import { Box, FormControl, FormLabel, Input, Radio, RadioGroup, Button, Stack, FormHelperText, Heading } from "@chakra-ui/react";


const UserForm = ({ fn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [radioOption, setRadioOption] = useState('');
  const [value, setValue] = useState('1');
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

  const handleUpdate = () => {
    fn()
  }

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

    //Get a token
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(function (response) { return response.json(); })
      .then(function (data) {
        // console.log(data.token);
        setToken(data.token)
        // console.log('token', token)
      })
      .catch(function (error) { // proccess network errors
    });

    // Send the form data to the API
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: formData,
      headers: {
        'Token': token, // Replace with your actual token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          // Process success response
        } else {
          // Process server errors
        }
      })
      .catch((error) => {
        // Process network errors
      });

    handleUpdate()
  };

  return (
    <Box m='50px auto' >
    <Heading
        color='black'
        textAlign="center"
        fontSize='2.5rem'
        lineHeight={'2.5rem'}
        fontWeight={'400'}
        mb='50px'
          >Working with POST request</Heading>
    <Box w='380px' m='0 auto'>
    <Box as="form" onSubmit={handleSubmit} display={'flex'} flexDirection={'column'} gap='50px' alignItems={'center'}>
      <FormControl>
        <Input type="text" placeholder='Your name' value={name} h='54px' onChange={handleNameChange} required minLength={2} maxLength={60} />
      </FormControl>

      <FormControl>
        <Input type="email" placeholder='email' value={email} h='54px' onChange={handleEmailChange} required minLength={2} maxLength={100} />
      </FormControl>

      <FormControl>
          <Input type="tel" placeholder='Phone' value={phone} h='54px' onChange={handlePhoneChange} required pattern="^\+380[0-9]{9}$" />
          <FormHelperText>+38 (XXX) XXX - XX - XX</FormHelperText>
      </FormControl>

      <div class={styles.inputGroupRadio}>
        <p class={styles.inputRadioHeader}>Select your position</p>
        <p class={styles.inputRadioItem}>
          <input class={styles.inputRadio} type="radio" id="position1" value="1" checked={radioOption === '1'} onChange={handleRadioChange} />
          <label for="position1"><span class={styles.inputRadioText}>Frontend developer</span></label>
        </p>
        <p class={styles.inputRadioItem}>
          <input class={styles.inputRadio} type="radio" id="position2" value="2" checked={radioOption === '2'} onChange={handleRadioChange} />
          <label for="position2"><span class={styles.inputRadioText}>Backend developer</span></label>
        </p>
        <p class={styles.inputRadioItem}>
          <input class={styles.inputRadio} type="radio" id="position3" value="3" checked={radioOption === '3'} onChange={handleRadioChange} />
          <label for="position3"><span class={styles.inputRadioText}>Designer</span></label>
        </p>
        <p class={styles.inputRadioItem}>
          <input class={styles.inputRadio} type="radio" id="position4" value="4" checked={radioOption === '4'} onChange={handleRadioChange} />
          <label for="position4"><span class={styles.inputRadioText}>QA</span></label>
        </p>
      </div>

      <label class={styles.inputFile}>
        <span class={styles.inputFileBtn}>Upload</span>
        <input type="file" name="file" onChange={handlePhotoChange} required accept="image/jpeg" />
        <span class={styles.inputFileText} type="text">Upload your photo</span>
      </label>

          <Button type="submit" bg='rgba(180, 180, 180, 1)'
            // onClick={fn}
          >Sign in</Button>
      </Box>
      </Box>
      </Box>
  );
};

export default UserForm;
