import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Bell } from "lucide-react";
import { toast } from "sonner";

function NotificationBell() {
  const [notifications, setNotifications] = useState([]);
  const lastCountRef = useRef(0); // use a ref to store the last count reliably

  useEffect(() => {
    async function fetchNotificationBell() {
      try {
        const res = await axios.get("/api/notificationss");
        setNotifications(res.data);

        // Only show toast if new notifications arrived
        if (res.data.length > lastCountRef.current) {
          const newNotifications = res.data.slice(
            0,
            res.data.length - lastCountRef.current
          );

          newNotifications.forEach((n: any) => {
            toast.success("New Notification", {
              description: n.message,
            });
          });
        }

        // Update the ref to the current number of notifications
        lastCountRef.current = res.data.length;
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      }
    }

    fetchNotificationBell(); // initial fetch
    const interval = setInterval(fetchNotificationBell, 10000); // repeat every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-end pr-6 pt-2">
      <Bell className="h-6 w-6 cursor-pointer " />
      {notifications.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs px-2 rounded-full">
          {notifications.length}
        </span>
      )}
    </div>
  );
}

export default NotificationBell;
