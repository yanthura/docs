import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Link } from "react-router-dom";

// import images
import img1 from "../../../assets/images/small/img-7.jpg";
import img2 from "../../../assets/images/small/img-4.jpg";
import img3 from "../../../assets/images/small/img-6.jpg";

const MenuListBar = () => {
  return (
    <React.Fragment>
      <Col xl={3} lg={4}>
        <Card>
          <CardBody className="p-4">
            <div>
              <p className="text-muted">Categories</p>

              <ul className="list-unstyled font-weight-medium">
                <li>
                  <Link to="#" className="text-muted py-2 d-block">
                    Design
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted py-2 d-block">
                    Development
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted py-2 d-block">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted py-2 d-block">
                    Project
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted py-2 d-block">
                    Travel
                  </Link>
                </li>
              </ul>
            </div>

            <hr className="my-4" />

            <div>
              <p className="text-muted mb-2">Related articles</p>

              <div className="list-group list-group-flush">
                <Link to="#" className="list-group-item text-muted py-3 px-2">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <img
                        src={img1}
                        alt=""
                        className="avatar-md h-auto d-block rounded"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="font-size-13 text-truncate">
                        Beautiful Day with Friends
                      </h5>
                      <p className="mb-0 text-truncate">10 Apr, 2020</p>
                    </div>
                  </div>
                </Link>

                <Link to="#" className="list-group-item text-muted py-3 px-2">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <img
                        src={img2}
                        alt=""
                        className="avatar-md h-auto d-block rounded"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="font-size-13 text-truncate">
                        Drawing a sketch
                      </h5>
                      <p className="mb-0 text-truncate">24 Mar, 2020</p>
                    </div>
                  </div>
                </Link>

                <Link to="#" className="list-group-item text-muted py-3 px-2">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <img
                        src={img3}
                        alt=""
                        className="avatar-md h-auto d-block rounded"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="font-size-13 text-truncate">
                        Project discussion with team
                      </h5>
                      <p className="mb-0 text-truncate">11 Mar, 2020</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <hr className="my-4" />

            <div>
              <p className="text-muted mb-1">Tags</p>

              <ul className="list-inline widget-tag">
                <li className="list-inline-item">
                  <Link to="#" className="badge bg-light font-size-12 mt-2">
                    Design
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="badge bg-light font-size-12 mt-2">
                    Development
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="badge bg-light font-size-12 mt-2">
                    Business
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="badge bg-light font-size-12 mt-2">
                    Project
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="badge bg-light font-size-12 mt-2">
                    Travel
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="badge badge-light font-size-12 mt-2">
                    Lifestyle
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="badge badge-light font-size-12 mt-2">
                    Photography
                  </Link>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default MenuListBar
