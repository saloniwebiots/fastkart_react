import React, { useState } from 'react'
import AddUserData from './AddUserData'
import { Col, Input, Label, Row } from 'reactstrap'
import AddFormButton from './AddFormButton';

const AddUserform = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };

  return (
    <form className='theme-form theme-form-2 mega-form'>
      <Row>
        {AddUserData.map((item,index)=>(
          <div className='input-error'>
            <div className='mb-4 align-items-center row'>
              <Col lg={2}>
                <Label className='col-form-label form-label-title form-label'>{item.label}</Label>
                  <span className='theme-color ms-2 required-dot'>*</span>
              </Col>
              <Col lg={10}>
                <Input name='name' required autoComplete='off' placeholder={item.placeholder} type='text' className=' form-control' aria-invalid='true'/>
                  <div className='invalid-feedback'>{item.invalidtext}</div>
                  
              </Col>
            </div>
          </div>))}
        <Col lg={2}>
          <Label className='col-form-label form-label-title form-label'>Status</Label>
            </Col>
              <Col className='col-md-9 col-lg-10'>
                <div className='ps-0 form-switch form-check form-check form-switch'>
                  <Label className='switch'>
                    <input name='status' type='checkbox' value='true' className = {isToggled? "active" : "null"}/>
                    <span onClick={handleToggle} className='switch-state' />
                  </Label>
                </div>
              </Col>
              <AddFormButton/>
    </Row>
</form>
  )
}
export default AddUserform