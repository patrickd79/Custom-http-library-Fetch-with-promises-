const http = new EasyHTTP();

//get users
/* const users = http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(error => console.log(error)); */

// user data
const data = {
  name: "John Doe",
  username: "jdoe",
  email: "jdoe@gmail.com"
};
//create user
/* const post = http
//create a new user here with the next available ID using our data above
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(error => console.log(error)); */

//update user
/* const put = http
  //change url to match which user you wnat to update data for i.e 'user 3' here
  .put("https://jsonplaceholder.typicode.com/users/3", data)
  .then(data => console.log(data))
  .catch(error => console.log(error));
 */

//delete user
const deleteUser = http
  //delete user specified i.e 'user 3' here
  .delete("https://jsonplaceholder.typicode.com/users/3")
  .then(data => console.log(data))
  .catch(error => console.log(error));
