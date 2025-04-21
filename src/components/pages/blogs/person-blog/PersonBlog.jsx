import React from "react";
import { useParams } from "react-router-dom";

export default function PersonBlog() {

  const params = useParams()
  
  

  return <div>{params.id}</div>;
}
