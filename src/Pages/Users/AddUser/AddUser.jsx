import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Form from './AddUserform'

const AddUser = () => {
  return (
    <div className='page-wrapper compact-wrapper' id='pageWrapper'>
    <div className='page-body-wrapper'>
    <div className='page-body'>
    <div className='container-fluid'>
        <Row>
            <Col sm={12}>
            <div className='m-auto col-sm-8'>
                <Card>
                    <CardBody>
                        <div className='title-header option-title'>
                            <h5>Add Users</h5>
                        </div>
                        <Form/>
                    </CardBody>
                </Card>
            </div>
    </Col>
    </Row>
  </div>
  </div>
  </div>
  </div>
  )
}
export default AddUser