import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  Col,
} from "reactstrap"

import axios from "axios"

const BlogList = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response)
    }).catch((error) => console.log(error))
  }, [])

  return (
    <React.Fragment>
      <Col xl={9} lg={8}>
        <Card>
          <div className="p-5">
            {posts.map((v, idx) => 
              <>
              <div key={idx}>
                <h5>
                  <Link to="blog-details" className="text-dark">
                    {v.title}
                  </Link>
                </h5>

                <p>{v.body}</p>

                <div>
                  <Link to="#" className="text-primary">
                    Read more <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>

                <ul className="list-inline pt-2">
                  <li className="list-inline-item mr-3">
                    <Link to="#" className="text-muted">
                      <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>{" "}
                      Project
                    </Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link to="#" className="text-muted">
                      <i className="bx bx-comment-dots align-middle text-muted me-1"></i>{" "}
                      12 Comments
                    </Link>
                  </li>
                </ul>

              </div>
              <hr className="my-5" />
              </>
            )}
          </div>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default BlogList;