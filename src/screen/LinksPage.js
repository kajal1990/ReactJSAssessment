import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";

const ApiCall = () => {
  const headers = {
    key: "8196190b08906dda0ebf6e6f5d",
  };
  const [products, setProducts] = useState([]);

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

  let count = [];
  return (
    <div>
      <Card
        style={{ backgroundColor: "grey" }}
        className="my-3 p-3 rounded"
        bg="secondary"
        text="white"
      >
        <Card.Body>
          <Card.Title>Number of Total Links in All Posts</Card.Title>
          {products && products.postRes && products.postRes.posts ? (
            products.postRes.posts
              .filter((ele) => ele.url.startsWith("https"))

              .filter((ele) => ele.feature_image.startsWith("https"))

              .map((i) => count.push(i))
              .reduce((i, count) => {
                return count * 2;
              })
          ) : (
            <Card.Text className="text-center">no data</Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
export default ApiCall;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card, CardGroup } from "react-bootstrap";

// const ApiCall = () => {
//   const headers = {
//     key: "8196190b08906dda0ebf6e6f5d",
//   };
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const abc = async () => {
//       const response = await axios.get(
//         "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d",

//         { headers }
//       );

//       setProducts({
//         postRes: response.data,
//       });
//     };

//     abc();
//   }, []);

//   let count = [];
//   return (
//     <div>
//       <CardGroup>
//         <Card>
//           <Card.Body>
//             <Card.Title>List of Posts without Meta Description</Card.Title>
//             {products && products.postRes && products.postRes.posts ? (
//               products.postRes.posts
//                 .filter((ele) => ele.url.startsWith("https"))

//                 .filter((ele) => ele.feature_image.startsWith("https"))

//                 .map((i) => count.push(i))
//                 .reduce((i, count) => {
//                   return count * 2;
//                 })
//             ) : (
//               <Card.Text>no data</Card.Text>
//             )}
//           </Card.Body>
//         </Card>
//       </CardGroup>
//     </div>
//   );
// };
// export default ApiCall;
