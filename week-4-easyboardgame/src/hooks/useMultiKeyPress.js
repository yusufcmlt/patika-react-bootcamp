import { useState, useEffect } from "react";

export default function useMultiKeyPress() {
  const [keysPressed, setKeysPressed] = useState(new Set([]));

  const handleKeyDown = ({ code }) => {
    setKeysPressed((oldSet) => {
      const newKeySet = new Set(oldSet);
      newKeySet.add(code);
      return newKeySet;
    });
  };

  const handleKeyUp = ({ code }) => {
    setKeysPressed((oldSet) => {
      const newKeySet = new Set(oldSet);
      newKeySet.delete(code);

      return newKeySet;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keysPressed;
}
