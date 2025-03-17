"use client"

import Back from '@/components/Back';
import ChoiceInput from '@/components/ChoiceInput';
import GridContainer from '@/components/GridContainer';
import PageLayout from '@/components/PageLayout';
import { specializationFields } from '@/constants/specializationFields'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Specializations = () => {
  const router = useRouter();

  return (
    <PageLayout>
      <Back onClick={() => router.replace("/")} />
      <h1 className="text-white text-2xl font-bold">Ready to put your knowledge into test?</h1>
      <p className="text-gray-200 mb-4">Select your field of specialization</p>
      <GridContainer>
        {specializationFields.map((field, index) => (
          <Link key={index} href={`/specializations/${field.fieldName}`} className="bg-electricMagenta text-pureWhite px-4 py-2 rounded-lg">
            {field.fieldName}
          </Link>
        ))}
      </GridContainer>
      <ChoiceInput
        title='Or type your field of specialization'
        inputPlaceHolder='Field name here...'
        onChoice={(choice) => router.replace(`/specializations/${choice}`)}
      />
    </PageLayout>
  )
}

export default Specializations