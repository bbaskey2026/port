import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/userApi";
import { useI18n } from "../i18n/I18nContext";

export default function UserList() {
  const { t } = useI18n();
  const [userId, setUserId] = useState(1);
  const [userIdInput, setUserIdInput] = useState("1");

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  function handleUserIdSubmit(event) {
    event.preventDefault();
    const nextUserId = Number(userIdInput);

    if (Number.isInteger(nextUserId) && nextUserId > 0) {
      setUserId(nextUserId);
    }
  }

  const users = usersQuery.data ?? [];
  const isLoading = usersQuery.isPending;
  const error = usersQuery.isError ? usersQuery.error : null;
  console.log("users", users);
  console.log("isLoading", isLoading);
  console.log("error", error);
  console.log("userId", userId);
  console.log("Isfetching", usersQuery.isFetching);
  const selectedUser = users.find((user) => user.id === userId);

  return (
    <div>
      <section>
        <h2>{t("users.byId")}</h2>
        <form onSubmit={handleUserIdSubmit}>
          <label htmlFor="user-id">{t("users.userId")} </label>
          <input
            id="user-id"
            type="number"
            min="1"
            value={userIdInput}
            onChange={(event) => setUserIdInput(event.target.value)}
          />
          <button type="submit">{t("users.load")}</button>
        </form>

        {usersQuery.isPending && <p>{t("users.loadingUser")}</p>}
        {selectedUser ? (
          <div>
            <p><strong>{selectedUser.name}</strong></p>
            <p>{selectedUser.email}</p>
            <p>{selectedUser.phone}</p>
          </div>
        ) : (
          !usersQuery.isPending && <p>{t("users.notFound", { id: userId })}</p>
        )}
      </section>

      <section>
        <h2>{t("users.heading")}</h2>
        {usersQuery.isPending && <p>{t("users.loading")}</p>}
        {usersQuery.isError && <p>{t("users.error", { message: usersQuery.error.message })}</p>}

        {users.map((user) => (
          <div key={user.id}>
            {user.id}. {user.name}
          </div>
        ))}
      </section>
    </div>
  );
}