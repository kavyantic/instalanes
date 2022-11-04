import React from 'react'
import BookRepairLayout from '../../components/Layout/BookRepairLayout'

export default function Review() {
  return (
    <div>Review</div>
  )
}


Review.getLayout = function (page) {
    return (
        <BookRepairLayout>
            {page}
        </BookRepairLayout>
    )
}


