import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';
import { Link, useParams } from "react-router-dom"
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// import images
import img1 from "../../assets/images/small/img-2.jpg"
import avtar1 from "../../assets/images/users/avatar-2.jpg"
import MenuListBar from "./BlogList/menulistbar";
import axios from "axios";
import { isEmpty } from "lodash";

const BlogDetails = props => {
  const {articleID, articleTitle} = useParams()
  const [post, setPost] = useState({})
  
  useEffect(() => {
    axios.get(`http://localhost:4467/api/content/docs/${articleID}/watch`).then((response) => {
      setPost(response.data)
      console.log(response.data)
    }).catch((error) => console.log(error))
  }, [])
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>{post.title ? post.title : "Article not found"}</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Blog" breadcrumbItem={post.title ? post.title : "Article not found"} />
          <Row>
            <Col xl={9} lg={8}>
              <Card>
                <CardBody>
                  <div className="pt-3 ms-5">
                    <div className="row">
                      <div className="col-xl-12">
                        {!isEmpty(post) ?
                          <div>
                            <div className="text-end">
                              <h4>{post.title}</h4>
                              <p>{post.category.name}</p>
                            </div>
                            <hr />


                            <div className="mt-4">
                              <div className="font-size-14">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                              </div>

                              <hr />
                            </div>
                          </div>
                        :
                        null}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <MenuListBar />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default BlogDetails
