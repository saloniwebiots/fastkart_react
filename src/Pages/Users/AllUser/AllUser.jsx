import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import {AiOutlinePlus} from 'react-icons/ai'

const AllUser = () => {
  return (
    <div className='page-wrapper compact-wrapper' id='pageWrapper'>
    <div className='page-body-wrapper'>
    <div className='page-body'>
    <div className='container-fluid'>
        <Row>
            <Col sm={12}>
            <div className='m-auto col-sm-8'>
                <Card className='custom-role card-body'>
                    <CardBody>
                        <div className='title-header option-title'>
                            <h5>Users</h5>
                            <Button type='button' title='adduser' className='align-items-center btn-theme add-button btn btn-secondary'>
                                <div className='position-relative'><AiOutlinePlus/>Add User</div>
                            </Button>
                        </div>
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

export default AllUser