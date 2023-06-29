import { useState, useMemo } from "react";
import { useDisclosure } from '@chakra-ui/react'


const useFetchingData = () => {

  const [users, setUsers] = useState([]);
  const [next, setNext] = useState('');
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(true)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const getFirstData = () => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUsers(data.users);
          setNext(data.links.next_url)
        } else {
          // Process server errors
        }
      })
      .catch(error => {
        // Handle fetch error
        console.error(error);
      });
  }

  const fetchUsers = (url) => {
    fetch(`${next}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("data", data)
          setUsers(prevUsers => [...prevUsers, ...data.users]);
          setNext(data.links.next_url)
          setShowMore(data.page < data.total_pages);
        } else {
          // Process server errors
        }
      })
      .catch(error => {
        // Handle fetch error
        console.error(error);
      });
  };

  const addUser = (formData) => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(function (response) { return response.json(); })
      .then(function (data) {
        if (data.success) {
          postData(formData, data.token)
        } else {
          // Process server errors
        }
      })
      .catch(function (error) { // proccess network errors
    });
  }

  const postData = (formData, token) => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: formData,
      headers: {
        'Token': token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          // Process success response
          getFirstData();
          setShowModal(true)
          onOpen()
        } else {
          // Process server errors
        }
      })
      .catch((error) => {
        // Process network errors
      });
  }

  return {
        users, next, showMore, getFirstData, fetchUsers, addUser, showModal, isOpen, onOpen, onClose
    }

}
export default useFetchingData;
