import { useState, useEffect } from "react";
import Button from "../components/Button";

const API = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip.advice);
    } catch {
      setAdvice("Failed to fetch advice. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4 text-center">
      <h1 className="text-2xl font-bold">💬 Advice Generator</h1>
      <p className="text-lg italic text-gray-700 dark:text-gray-300">
        {loading ? "Loading..." : `"${advice}"`}
      </p>
      <Button onClick={fetchAdvice}>🔁 Get New Advice</Button>
    </div>
  );
};

export default API;
