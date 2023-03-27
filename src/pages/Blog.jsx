import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   // http://localhost:3000/blog?nombre=juan
  //   setSearchParams({ filter: "Pablo" });
  //   // setSearchParams({ nombre: "juan" });
  // }, [searchParams]);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error...</h1>;

  const handleChange = (e) => {
    //console.log("change");
    const filter = e.target.value;
    filter ? setSearchParams({ filter }) : setSearchParams({});
  };

  return (
    <>
      <h2>Blog</h2>
      <input
        type="text"
        //name="filter"
        onChange={handleChange}
        className="form-control my-3"
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="list-group-item"
            >
              {item.id} - {item.title}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Blog;
