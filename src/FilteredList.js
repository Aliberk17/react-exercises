import { useMemo } from "react";

export default function FilteredList(props) {
  const filterUsers = (users) => {
    const result = [];
    users.forEach((u) => {
      if (u.age > 18) {
        result.push(u);
      }
    });
    return result;
  };

  const adultUsers = useMemo(() => filterUsers(props.users), [props.users]);

  return (
    <ul>
      {adultUsers.map((user) =>
        user.age > 18 ? (
          <li key={user.id}>{`${user.id} - ${user.name} - ${user.age}`}</li>
        ) : (
          <div />
        )
      )}
    </ul>
  );
}
