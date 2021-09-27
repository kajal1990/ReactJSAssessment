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

      setProducts({
        postRes: response.data,
      });
    };

    abc();
  }, []);
  return (
    <div>
      <CardGroup>
        <Card className="my-3 p-3 rounded" bg="secondary" text="white">
          <Card.Body>
            <Card.Title style={{ color: "blue" }}>
              List of Posts without Meta Description
            </Card.Title>
            {products && products.postRes && products.postRes.posts ? (
              products.postRes.posts
                .filter((ele) => ele.meta_description == null)
                .map((fix) => (
                  <Card.Text>
                    {fix.title}
                    &nbsp;
                    <a style={{ color: "red" }} href={fix.url}>
                      {" "}
                      post
                    </a>
                  </Card.Text>
                ))
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded" bg="secondary" text="white">
          <Card.Body>
            <Card.Title style={{ color: "blue" }}>
              Too long Meta Description
            </Card.Title>
            {products && products.postRes && products.postRes.posts ? (
              products.postRes.posts
                .filter((ele) => ele.meta_description != null)
                .filter((meta) => meta.meta_description.length > 200)
                .map((fix) => (
                  <Card.Text>
                    {fix.title} &nbsp;
                    <a style={{ color: "red" }} href={fix.url}>
                      {" "}
                      post
                    </a>
                  </Card.Text>
                ))
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded" bg="secondary" text="white">
          <Card.Body>
            <Card.Title style={{ color: "blue" }}>
              Too long URL, more than 100 chars
            </Card.Title>
            {products && products.postRes && products.postRes.posts ? (
              products.postRes.posts
                .filter((ele) => ele.url != null)
                //.filter((meta) => meta.url.length > 100)
                .map((fix) => (
                  <Card.Text>
                    {fix.url} &nbsp;
                    <a style={{ color: "red" }} href={fix.url}>
                      {" "}
                      post
                    </a>
                  </Card.Text>
                ))
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="my-3 p-3 rounded" bg="secondary" text="white">
          <Card.Body>
            <Card.Title style={{ color: "blue" }}>
              List of Posts without Featured Image
            </Card.Title>
            {products && products.postRes && products.postRes.posts ? (
              products.postRes.posts
                .filter((ele) => ele.feature_image != null)
                .filter((ele) => ele.featured == false)
                .map((fix) => (
                  <Card.Text>
                    {fix.title}&nbsp;
                    <a style={{ color: "red" }} href={fix.url}>
                      {" "}
                      post
                    </a>
                  </Card.Text>
                ))
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded" bg="secondary" text="white">
          <Card.Body>
            <Card.Title style={{ color: "blue" }}>
              Too Short Posts, Below 250 words
            </Card.Title>
            {products && products.postRes && products.postRes.posts ? (
              products.postRes.posts
                .filter((ele) => ele.meta_description != null)
                .filter((meta) => meta.meta_description.length < 250)
                .map((fix) => (
                  <Card.Text>
                    {fix.title}&nbsp;
                    <a style={{ color: "red" }} href={fix.url}>
                      {" "}
                      post
                    </a>
                  </Card.Text>
                ))
            ) : (
              <Card.Text>no data</Card.Text>
            )}
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded" bg="secondary" text="white">
          <Card.Body>
            <Card.Title style={{ color: "blue" }}>
              Too Long Posts, More than 1500 words
            </Card.Title>
            {products && products.postRes && products.postRes.posts ? (
              products.postRes.posts
                .filter((ele) => ele.meta_description != null)
                .filter((meta) => meta.meta_description.length > 1500)
                .map((fix) => (
                  <Card.Text>
                    {fix.title}&nbsp;
                    <a style={{ color: "red" }} href={fix.url}>
                      {" "}
                      post
                    </a>
                  </Card.Text>
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
