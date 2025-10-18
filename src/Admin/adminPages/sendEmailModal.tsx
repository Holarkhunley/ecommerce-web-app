import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components//components/ui/dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface SendEmailModalProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  selectedIds: string[];
}

function SendEmailModal({ open, setOpen, selectedIds }: SendEmailModalProps) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    if (!message) return alert("Please type a message!");
    console.log("Selected IDs to send email:", selectedIds); // <-- ADD THIS


    setLoading(true);
    try {
      await axios.post("/api/send-email", {
        customerIds: selectedIds,
        message,
      });
      alert("Emails sent successfully!");
      setMessage("");
      setOpen(false);
    } catch (err) {
      console.log(err);
      alert("Failed to send emails.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Send Email to Selected Customers</DialogTitle>
          <DialogDescription>
            Type a message below and click "Send Email" to notify your selected customers.
          </DialogDescription>
        </DialogHeader>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="w-full border rounded-md p-2 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSendEmail} disabled={loading}>
            {loading ? "Sending..." : "Send Email"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SendEmailModal;
