import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify CSS for proper styling

interface AlertProps {
  message: string; // Correctly define the type for the message prop
}

export default function Alert({ message }: AlertProps) {
  const notify = () => toast(message); // Use the message prop here correctly

  return (
    <div>
      <button onClick={notify} className="bg-blue-500 text-white py-2 px-4 rounded">
        Notify!
      </button>
      <ToastContainer />
    </div>
  );
}
