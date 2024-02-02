import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null

  return (
    <>
      <div
        className='justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-sm'>
          <div
            className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 border-b border-solid border-grey rounded-t'>
              <h3 className='text-2xl'>
                {title}
              </h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-grey float-right text-lg leading-none font-semibold outline-none focus:outline-none'
                onClick={onClose}
              >
                <span
                  className='bg-transparent h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  x
                </span>
              </button>
            </div>
            <div className='relative p-6 flex-auto'>
              <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-35 fixed inset-0 z-40 bg-dark'></div>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Modal
