import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  Col,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap"

import classnames from "classnames"

//import images
import small from "../../../assets/images/small/img-2.jpg"
import small2 from "../../../assets/images/small/img-6.jpg"

const BlogList = () => {
  const [activeTab, toggleTab] = useState("1");

  return (
    <React.Fragment>
      <Col xl={9} lg={8}>
        <Card>
          <div className="p-5">
            <div>
              <h5>
                <Link to="blog-details" className="text-dark">
                  Beautiful Day with Friends
                </Link>
              </h5>

              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis
              </p>

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

            <div>
              <h5>
                <Link to="/blog-details" className="text-dark">
                  Project discussion with team
                </Link>
              </h5>

              <p>
                At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores similique sunt in culpa
                qui officia deserunt mollitia animi est
              </p>

              <div>
                <Link to="#" className="text-primary">
                  Read more <i className="mdi mdi-arrow-right"></i>
                </Link>
              </div>

              <ul className="list-inline pt-2">
                <li className="list-inline-item mr-3">
                  <Link to="#" className="text-muted">
                    <i className="bx bx-purchase-tag-alt align-middle text-muted ms-1"></i>{" "}
                    Development
                  </Link>
                </li>
                <li className="list-inline-item mr-3">
                  <Link to="#" className="text-muted">
                    <i className="bx bx-comment-dots align-middle text-muted ms-1"></i>{" "}
                    08 Comments
                  </Link>
                </li>
              </ul>
            </div>

            <hr className="my-5" />

          </div>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default BlogList;