import React from "react"
import MetaTags from 'react-meta-tags';
import { Container, Row } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import BlogGrid from "./BlogGrid"
import MenuListBar from "../BlogList/menulistbar"

const Index = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Blog Grid</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Blog" breadcrumbItem="Blog Grid" />
          <Row>
            <BlogGrid />
            <MenuListBar />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Index
