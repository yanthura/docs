import React from "react"
import MetaTags from 'react-meta-tags';
import { Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import BlogList from "./BlogList"
import MenuListBar from "./menulistbar"

const Index = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Yanthura</title>
        </MetaTags>
        <Container fluid>
          <h4></h4>
          {/* <Breadcrumbs title="Blog" breadcrumbItem="Blog List" /> */}
          <Row>
            <BlogList />
            <MenuListBar />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Index
