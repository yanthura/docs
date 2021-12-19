import React, { useEffect, useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Link } from "react-router-dom";

// import images
import img1 from "../../../assets/images/small/img-7.jpg";
import img2 from "../../../assets/images/small/img-4.jpg";
import img3 from "../../../assets/images/small/img-6.jpg";
import axios from "axios";

const MenuListBar = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:4467/api/content/categories`).then((response) => {
      setCategories(response.data.results)
    }).catch((error) => console.log(error))
  }, [])

  return (
    <React.Fragment>
      <Col xl={3} lg={4}>
        <Card>
          <CardBody className="p-4">
          <div>
              <p className="text-muted mb-1">Categories</p>

              <ul className="list-inline widget-tag">
                {categories.map(v => 
                  <li className="list-inline-item" key={v.id}>
                    <Link to="#" className="badge bg-light font-size-12 mt-2">
                      {v.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <hr className="my-4" />

            <div>
              <p className="text-muted mb-2">Related articles</p>

              <div className="list-group list-group-flush">
                <Link to="#" className="list-group-item text-muted py-3 px-2">
                  <div className="d-flex align-items-center">
                    {/* <div className="me-3">
                      <img
                        src={img1}
                        alt=""
                        className="avatar-md h-auto d-block rounded"
                      />
                    </div> */}
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="font-size-13 text-truncate">
                        Beautiful Day with Friends
                      </h5>
                      <p className="mb-0 text-truncate">10 Apr, 2020</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default MenuListBar
