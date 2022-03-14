// Based on https://github.com/leerob/leerob.io/blob/main/components/SuccessMessage.tsx
import React, {useEffect, useState} from 'react';

export default function Alert({ type="message", children }) {
  // An success message is green with a checkmark
  // An error message is red with an x
  // An info message is blue with a question mark
  // An warning message is yellow with a warning sign
  // An message is black with a question mark
  const [color, setColor] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (type === 'success') {
      setColor("text-green-700 dark:text-green-400")
      setIcon("M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z")
    } else if (type === "error") {
      setColor("text-red-700 dark:text-red-400")
      setIcon("M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z")
    } else if (type === "info") {
      setColor("text-blue-700 dark:text-blue-400")
      setIcon("M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z")
    } else if (type === "warning") {
      setColor("text-yellow-700 dark:text-yellow-400")
      setIcon("M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z")
    } else {
      setColor("text-black")
      setIcon("M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z")
    }
  }, [type])


  return (
    <>
      {color && icon && (
        <p className={"flex items-center text-sm font-bold " + color}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-2 h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d={icon}
              clipRule="evenodd"
            />
          </svg>
          {children}
        </p>
      )}
    </>
    );
  }