// src/UserList.jsx
import React from "react";
import "./UserList.css"; // Import the CSS file we just created

const UserList = () => {
  // The array of users
  const users = [
    { name: "Leanne Graham", email: "Sincere@april.biz" },
    { name: "Ervin Howell", email: "Shanna@melissa.tv" },
    { name: "Clementine Bauch", email: "Nathan@yesenia.net" },
    { name: "Patricia Lebsack", email: "Julianne.OConner@kory.org" },
    { name: "Chelsey Dietrich", email: "Lucio_Hettinger@annie.ca" },
    { name: "Mrs. Dennis Schulist", email: "Karley_Dach@jasper.info" },
    { name: "Kurtis Weissnat", email: "Telly.Hoeger@billy.biz" },
    { name: "Nicholas Runolfsdottir V", email: "Sherwood@rosamond.me" },
    { name: "Glenna Reichert", email: "Chaim_McDermott@dana.io" },
    { name: "Clementina DuBuque", email: "Rey.Padberg@karina.biz" },
  ];

  return (
    <div>
      <h2>User List</h2> {/* Heading */}
      <ul className="user-list"> {/* Apply the 'user-list' class to the ul element */}
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
