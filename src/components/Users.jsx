
import { Box, Heading, Button, Spinner } from "@chakra-ui/react";
import Card from './Card';

import React, { useEffect, useContext } from 'react';
import UserContext from "../context/UserContext";

export default function UserList() {

  const { users, showMore, getFirstData, fetchUsers } = useContext(UserContext)

  useEffect(() => {
    getFirstData();
  }, []);

  const handleShowMore = () => {
    fetchUsers();
  };

  return (
    <Box backgroundColor="grey.1" p='140px 0 70px 0' display={"flex"} flexDirection={'column'} alignItems={"center"}>
      <Heading
        color='black'
        textAlign="center"
        fontSize='2.5rem'
        lineHeight={'2.5rem'}
        fontWeight={'400'}

          >Working with GET request</Heading>

      <Box maxW={"1170px"} m='50px auto' display={"flex"} flexWrap='wrap' justifyContent={['center', null, null, null, "space-between"]} alignItems={"center"} gap={['29px']}>
        {
          users.map(user => (
            <Card key={`${user.name} + ${user.email}`} user={user} />
          ) )
          //  <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />

        }
      </Box>
      {showMore && <Button size={'2.125rem'} variant={'normal'} mt='15px' onClick={handleShowMore}>Show More</Button>}
    </Box>
  );

}




// /* eslint-disable array-callback-return */
// import { Box, Text, Heading, Button } from "@chakra-ui/react";
// import Card from './Card';

// import React, { useState, useEffect } from 'react';

// export default function UserList() {
//   const [users, setUsers] = useState([]);
//   const[next, setNext] = useState('');
//   const [showMore, setShowMore] = useState(true);

//   useEffect(() => {
//     fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           setUsers(data.users);
//           // console.log("useEffect data", data)
//           setNext(data.links.next_url)
//         } else {
//           // Process server errors
//         }
//       })
//       .catch(error => {
//         // Handle fetch error
//         console.error(error);
//       });

//   }, []);

//   const fetchUsers = (url) => {
//     fetch(`${next}`)

//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           console.log("data", data)
//           setUsers(prevUsers => [...prevUsers, ...data.users]);
//           setNext(data.links.next_url)
//           setShowMore(data.page < data.total_pages);
//         } else {
//           // Process server errors
//         }
//       })
//       .catch(error => {
//         // Handle fetch error
//         console.error(error);
//       });
//   };

//   const handleShowMore = () => {

//     fetchUsers();
//   };

//   return (
//     <Box backgroundColor="grey.1" p='140px 0 70px 0' display={"flex"} flexDirection={'column'} alignItems={"center"}>
//       <Heading
//         color='black'
//         textAlign="center"
//         fontSize='2.5rem'
//         lineHeight={'2.5rem'}
//         fontWeight={'400'}

//           >Working with GET request</Heading>

//       <Box maxW={"1170px"} m='50px auto' display={"flex"} flexWrap='wrap' justifyContent={['center', null, null, null, "space-between"]} alignItems={"center"} gap={['29px']}>
//         {users.map(user => (
//           <Card key={`${user.name} + ${user.email}`} user={user} />
//         ))}
//       </Box>
//       {showMore && <Button size={'2.125rem'} variant={'normal'} mt='15px' onClick={handleShowMore}>Show More</Button>}
//     </Box>
//   );

// }
