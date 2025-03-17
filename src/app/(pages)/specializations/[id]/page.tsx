"use client"

import { specializationFields } from '@/constants/specializationFields';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

const Topic = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const topic = decodeURIComponent(params.id)
  const currentSpecialization = specializationFields.filter(el => el.fieldName === topic)

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-full max-w-3xl p-6 rounded-lg">
        <button
          className="bg-crystalTeal text-white px-6 py-1 rounded-lg mb-4"
          onClick={() => { router.replace("/specializations") }}
        >
          Back
        </button>
        <h1 className="text-white text-2xl font-bold">
          Choose the topic of the test
        </h1>
        <p className="text-gray-200 mb-4">
          {topic}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-pureWhite rounded-lg">
          {currentSpecialization[0].topics.map((el, index) => (
            <Link
              href={`/specializations/${topic}/${el}`}
              key={index}
              className="bg-electricMagenta text-pureWhite px-4 py-2 rounded-lg"
            >
              {el}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            placeholder="OR type your field of specialization"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-teal-500 text-white px-6 py-2 rounded-lg">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topic