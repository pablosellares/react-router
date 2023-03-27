import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogPost = () => {
  const params = useParams();
  //console.log(params);

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Link className="btn btn-dark" to="/blog">
        Volver atrás
      </Link>
    </>
  );
};

export default BlogPost;
