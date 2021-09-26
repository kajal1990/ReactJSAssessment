import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";

const ApiCall = () => {
  const headers = {
    key: "8196190b08906dda0ebf6e6f5d",
  };
  const [products, setProducts] = useState([]);
  // const [pages, setPages] = useState([]);
  useEffect(() => {
    const abc = async () => {
      const response = await axios.get(
        "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d",

        { headers }
      );
      const response1 = await axios.get(
        "https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d",

        { headers }
      );
      const authResp = await axios.get(
        "https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d",
        { headers }
      );
      const tagsResp = await axios.get(
        "https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d",
        { headers }
      );
      setProducts({
        postRes: response.data,
        pageRes: response1.data,
        newAuth: authResp.data,
        newTags: tagsResp.data,
      });
    };

    abc();
  }, []);
  return (
    <div>
      <CardGroup>
        <Card
          className="my-3 p-3 rounded"
          bg="secondary"
          text="white"
          style={{ height: "15rem" }}
        >
          <Card.Body>
            <Card.Title>Total number of Posts</Card.Title>
            {products && products.postRes && products.postRes.posts ? (
              <Card.Text>{products.postRes.posts.length}</Card.Text>
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded" bg="secondary" text="white">
          <Card.Body>
            <Card.Title>Total number of Pages</Card.Title>
            {products && products.pageRes && products.pageRes.pages ? (
              <Card.Text>{products.pageRes.pages.length}</Card.Text>
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded" bg="secondary" text="white">
          <Card.Body>
            <Card.Title>Total number of Authors</Card.Title>
            {products && products.newAuth && products.newAuth.authors ? (
              <Card.Text>{products.newAuth.authors.length}</Card.Text>
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card
          className="my-3 p-3 rounded"
          bg="secondary"
          text="white"
          style={{ height: "15rem" }}
        >
          <Card.Body>
            <Card.Title>Total number of Tags</Card.Title>
            {products && products.newTags && products.newTags.tags ? (
              <Card.Text>{products.newTags.tags.length}</Card.Text>
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded" bg="secondary" text="white">
          <Card.Body>
            <Card.Title>Last 5 published post</Card.Title>
            {products && products.postRes && products.postRes.posts ? (
              products.postRes.posts
                .filter((ele, index) => index < 5)
                .map((fix, i) => (
                  <div>
                    <a style={{ color: "red" }} href={fix.url}>
                      Published posts url {i + 1}{" "}
                    </a>
                  </div>
                ))
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};
export default ApiCall;
