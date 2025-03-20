"use client"

import Back from '@/components/Back';
import ChoiceInput from '@/components/ChoiceInput';
import GridContainer from '@/components/GridContainer';
import PageLayout from '@/components/PageLayout';
import { specializationFields } from '@/constants/specializationFields';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

const Topic = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const field = decodeURIComponent(params.id)
  const currentSpecialization = specializationFields.find(el => el.fieldName === field)

  return (
    <PageLayout>
      <Back onClick={() => router.replace("/specializations")} />
      <h1 className="text-white text-2xl font-bold">Choose the topic of the test</h1>
      <p className="text-gray-200 mb-4">{field}</p>
      {currentSpecialization && (
        <GridContainer>
          {currentSpecialization.topics.map((el, index) => (
            <Link key={index} href={`/specializations/${field}/${el}`} className="bg-electricMagenta text-pureWhite px-4 py-2 rounded-lg">
              {el}
            </Link>
          ))}
        </GridContainer>
      )}
      <ChoiceInput
        title={`${currentSpecialization ? "Or " : ""}type a topic inside your field of specialization`}
        inputPlaceHolder='Type the topic here...'
        onChoice={(choice) => router.replace(`/specializations/${field}/${choice}`)}
      />
    </PageLayout>
  )
}

export default Topic