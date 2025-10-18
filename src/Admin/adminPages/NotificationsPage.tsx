import { useEffect, useState } from "react";
import axios from "axios";

interface Notifi {
  _id: string;
  type: string;
  message: string;
  createdAt: string;
  isRead?: boolean;
}

function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notifi[]>([]);

  useEffect(() => {
    async function fetchNotifications() {
      const res = await axios.get("/api/notificationss");
      setNotifications(res.data);
    }
    fetchNotifications();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        {notifications.length === 0 ? (
          <p>No notifications yet</p>
        ) : (
          <ul className="space-y-4">
            {notifications.map((n) => (
              <li
                key={n._id}
                className={`p-4 rounded border ${
                  n.isRead ? "bg-gray-100" : "bg-yellow-50"
                }`}
              >
                <strong>{n.type.replace("_", "")}</strong>
                <p>{n.message}</p>
                <small className="text-gray-500">
                  {new Date(n.createdAt).toLocaleString()}
                </small>
              </li>
            ))}
          </ul>
        )}
      </h2>
    </div>
  );
}

export default NotificationsPage;
