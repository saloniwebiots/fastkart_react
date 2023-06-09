import React from 'react'

const AddFormButton = () => {
  return (
    <div className='ms-auto justify-content-end dflex-wgap mt-4 save-back-button'>
        <button type='button' title='back' className='me-2 btn-outline btn-lg btn btn-secondary ' style={{marginLeft:'40rem'}}>
            <div className='position-relative'>Back</div>
        </button>
        <button type='submit' title='save' className='btn-primary btn-lg btn btn-secondary' style={{marginLeft:'50rem', marginTop:'-3rem'}}>
            <div className='position-relative'>Save</div>
        </button>
    </div> 
  )
}

export default AddFormButton