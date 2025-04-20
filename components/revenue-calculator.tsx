'use client'

import { useState } from 'react'

export default function RevenueCalculator() {
  const [students, setStudents] = useState(20)
  const esaFunding = students * 10000
  const parentContribution = students * 5000
  const totalRevenue = esaFunding + parentContribution

  return (
    <div className="w-full max-w-3xl mx-auto bg-blue-50 rounded-xl p-8 shadow-sm">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-blue-600">
          STUDENTS: {students}
        </h3>
        <div className="text-4xl font-bold text-blue-600 mt-2">
          ${totalRevenue.toLocaleString()}
        </div>
        <div className="text-gray-600 mt-1">Annual Revenue</div>
      </div>

      <div className="w-full mb-8">
        <input
          type="range"
          min="15"
          max="25"
          value={students}
          onChange={(e) => setStudents(parseInt(e.target.value))}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>15 Students</span>
          <span>25 Students</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">ESA Funding</span>
          <span className="text-blue-600 font-semibold">${esaFunding.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Parent Contribution</span>
          <span className="text-blue-600 font-semibold">${parentContribution.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t">
          <span className="text-blue-600 font-bold">Total Annual Revenue</span>
          <span className="text-blue-600 font-bold">${totalRevenue.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
