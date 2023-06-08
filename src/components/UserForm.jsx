import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Radio, RadioGroup, Button, Stack, FormHelperText, Heading } from "@chakra-ui/react";


const UserForm = ({ fn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  // const [radioOption, setRadioOption] = useState('');
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

  // const handleRadioChange = (event) => {
  //   setRadioOption(event.target.value);
  // };

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
    formData.append('position_id', value);
    // formData.append('position_id', radioOption);

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
    // console.log(typeof formData)
    // console.log(formData)
    // fn()
    handleUpdate()
  };

  // console.log('typeof', typeof fn)
  // fn()

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
        <Input type="text" placeholder='Your name' value={name} onChange={handleNameChange} required minLength={2} maxLength={60} />
      </FormControl>

      <FormControl>
        <Input type="email" placeholder='email' value={email} onChange={handleEmailChange} required minLength={2} maxLength={100} />
      </FormControl>

      <FormControl>
          <Input type="tel" placeholder='Phone' value={phone} onChange={handlePhoneChange} required pattern="^\+380[0-9]{9}$" />
          <FormHelperText>+38 (XXX) XXX - XX - XX</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Select your position</FormLabel>
          {/* <RadioGroup value={radioOption} onChange={handleRadioChange} > */}
        <RadioGroup onChange={setValue} value={value}   >
          <Stack direction='column'>
                <Radio value="1" variant={'radioStyle'} >Option 1</Radio>
            <Radio value="2"  >Option 2</Radio>
            <Radio value="3"  >Option 3</Radio>
            <Radio value="4"  >Option 4</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl>
        <Input type="file" variant='pill' lineHeight='32px' pl='0px' onChange={handlePhotoChange} required accept="image/jpeg" placeholder='Upload ypur photo'/>
      </FormControl>

          <Button type="submit"
            // onClick={fn}
          >Sign in</Button>
      </Box>
      </Box>
      </Box>
  );
};

export default UserForm;
