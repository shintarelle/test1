import React, { useState, useContext } from 'react';
import styles from '../UserForm.module.css';
import { Box, FormControl, Input, Button, FormHelperText, Heading } from "@chakra-ui/react";
import ModalSucces from './ModalSucces';

import UserContext from "../context/UserContext";


const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [radioOption, setRadioOption] = useState('');

  const { addUser, isOpen, onClose, showModal } = useContext(UserContext)


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

    addUser(formData)

  };

  return (
    <Box m='0px auto' backgroundColor="grey.1" p="50px 0 ">
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

      <div className={styles.inputGroupRadio}>
        <p className={styles.inputRadioHeader}>Select your position</p>
        <p className={styles.inputRadioItem}>
          <input className={styles.inputRadio} type="radio" id="position1" value="1" checked={radioOption === '1'} onChange={handleRadioChange} />
          <label htmlFor="position1"><span className={styles.inputRadioText}>Frontend developer</span></label>
        </p>
        <p className={styles.inputRadioItem}>
          <input className={styles.inputRadio} type="radio" id="position2" value="2" checked={radioOption === '2'} onChange={handleRadioChange} />
          <label htmlFor="position2"><span className={styles.inputRadioText}>Backend developer</span></label>
        </p>
        <p className={styles.inputRadioItem}>
          <input className={styles.inputRadio} type="radio" id="position3" value="3" checked={radioOption === '3'} onChange={handleRadioChange} />
          <label htmlFor="position3"><span className={styles.inputRadioText}>Designer</span></label>
        </p>
        <p className={styles.inputRadioItem}>
          <input className={styles.inputRadio} type="radio" id="position4" value="4" checked={radioOption === '4'} onChange={handleRadioChange} />
          <label htmlFor="position4"><span className={styles.inputRadioText}>QA</span></label>
        </p>
      </div>

      <label className={styles.inputFile}>
        <span className={styles.inputFileBtn}>Upload</span>
        <input type="file" name="file" onChange={handlePhotoChange} required accept="image/jpeg" />
        <span className={styles.inputFileText} type="text">Upload your photo</span>
      </label>

          <Button type="submit" bg='rgba(180, 180, 180, 1)'>Sign in</Button>
      </Box>
      </Box>
      <Box>
        {showModal ? <ModalSucces isOpen={isOpen} onClose = { onClose } /> : null
      }
      </Box>

      </Box>
  );
};

export default UserForm;
