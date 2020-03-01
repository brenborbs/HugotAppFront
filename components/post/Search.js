import Link from "next/link";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/post";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: ""
  });

  const { search, results, searched, message } = values;

  const searchSubmit = e => {
    e.preventDefault();
    listSearch({ search }).then(data => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} hugot lines found!`
      });
    });
  };

  const handleChange = e => {
    // console.log(e.target.value);
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: []
    });
  };

  const searchedPosts = (results = []) => {
    return (
      <div className="search-message">
        {message && <p className="search-text">{message}</p>}

        {results.map((post, i) => {
          return (
            <div key={i}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.about}</a>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <div className="search-group">
        <input
          type="search"
          className="search-input"
          placeholder="Keywords..."
          onChange={handleChange}
        />
        <span className="search-btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
      </div>
    </form>
  );

  return (
    <section className="right_card">
      <h2>Search</h2>
      <p>Check latest lines</p>
      {searchForm()}
      {searched && <div>{searchedPosts(results)}</div>}
    </section>
  );
};

export default Search;
