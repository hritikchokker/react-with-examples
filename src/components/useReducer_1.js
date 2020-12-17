const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false
};
function User() {
  const [user, setUser] = useState(firstUser);
  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button>Make Admin</button>
    </div>
  );
}

//  BAD APPROACH DO NOT USE THIS
// <button
// onClick={() => {
// setUser({ admin: true });
// }}
// >
// Make Admin
// </button>

// INSTEAD DI THIS

// <button
// onClick={() => {
// setUser({ ...user, admin: true });
// }}
// >
// Make Admin
// </button>

function User() {
const [user, setUser] = useReducer(
(user, newDetails) => ({ ...user, ...newDetails }),
firstUser
);
}
<button
onClick={() => {
setUser({ admin: true });
}}
>
Make Admin
</button>
