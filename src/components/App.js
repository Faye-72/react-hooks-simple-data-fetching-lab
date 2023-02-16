// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogBreed, setDogBreed] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogBreed(data.message);
        console.log("data here ..", data.message);
        setIsLoading(true);
      });
  }, []);

  if (!isLoading) return <p>Loading...</p>;
  return (
    <div>
      <img src={dogBreed} alt="A random dog" />
    </div>
  );
}

export default App;
