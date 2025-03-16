import { specializationFields } from '@/constants/specializationFields'
import Link from 'next/link'

const Specializations = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-full max-w-3xl p-6 rounded-lg">
        <button className="bg-crystalTeal text-white px-6 py-1 rounded-lg mb-4">
          Back
        </button>
        <h1 className="text-white text-2xl font-bold">
          Ready to put your knowledge into test?
        </h1>
        <p className="text-gray-200 mb-4">
          Select your field of specialization
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-pureWhite rounded-lg">
          {specializationFields.map((field, index) => (
            <Link
              href={`/specializations/${field.fieldName}`}
              key={index}
              className="bg-electricMagenta text-pureWhite px-4 py-2 rounded-lg"
            >
              {field.fieldName}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            placeholder="OR type your field of specialization"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default Specializations