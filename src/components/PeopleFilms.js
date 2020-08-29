import React, { useEffect, useState } from "react";
import Axios from "axios";

// get props from parent and show it
export default function PeopleFilms({ film }) {
  const [films, setFilms] = useState(() => "");

  useEffect(() => {
    Axios.get(film).then(
      (res) => {
        setFilms(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return (
    <p>
      {films.title} ({films.release_date})
    </p>
  );
}
