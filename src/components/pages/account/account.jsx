import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const [token, setToken] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((respnse) =>
      respnse.json().then((data) => {
        setToken(data.verfiyToken);
      })
    );
  }, []);

  if (token === undefined) {
    navigate("/");
  }

  return <div>account</div>;
}
