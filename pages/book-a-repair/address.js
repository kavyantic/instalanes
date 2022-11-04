import React from 'react'
import BookRepairLayout from '../../components/Layout/BookRepairLayout'

export default function Address() {
  return (
    <div>address</div>
  )
}


Address.getLayout = function (page) {
    return (
        <BookRepairLayout>
            {page}
        </BookRepairLayout>
    )
}


