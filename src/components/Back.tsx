import React from 'react'

const Back = ({ onClick }: { onClick: () => void }) => (
  <button className="bg-crystalTeal text-white px-6 py-1 rounded-lg mb-4 cursor-pointer" onClick={onClick}>
    Back
  </button>
)

export default Back