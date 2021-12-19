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
    axios.get("http://localhost:4467/api/content/docs").then((response) => {
      setPosts(response.data.results)
    }).catch((error) => console.log(error))
  }, [])

  return (
    <React.Fragment>
      <Col xl={9} lg={8}>
        <Card>
          <div className="p-5">
            {posts.map((v, idx) => 
              <div key={idx}>
              <div>
                <h5>
                  <Link to={`/article/${v.did}/${v.title}`} className="text-dark">
                    {v.title}
                  </Link>
                </h5>

                {/* <ReactMarkdown>{v.content}</ReactMarkdown> */}

                <div>
                  <Link to={`/article/${v.did}/${v.title}`} className="text-primary">
                    Read more <i className="mdi mdi-arrow-right"></i>
                  </Link>
                </div>

                <ul className="list-inline pt-2">
                  <li className="list-inline-item mr-3">
                    <Link to="#" className="text-muted">
                      <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>{" "}
                      {v.category.name}
                    </Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link to="#" className="text-muted">
                      <i className="bx bx-show-alt align-middle text-muted me-1"></i>{" "}
                      {v.visits} Visits
                    </Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link to="#" className="text-muted">
                      <i className="bx bx-star align-middle text-muted me-1"></i>{" "}
                      {v.rating} Rating
                    </Link>
                  </li>
                </ul>

              </div>
              <hr className="my-5" />
              </div>
            )}
          </div>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default BlogList;