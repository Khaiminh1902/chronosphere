"use server"

import React from 'react'
import prisma from './lib/db'
import { requireUser } from './lib/hooks'
import {parseWithZod} from '@conform-to/zod'
import { onboardingSchema } from './lib/zodSchemas'

export async function OnboardingAction(formData: FormData) {
  const session = await requireUser();
  const submission = parseWithZod(formData, {
    schema: onboardingSchema,
  })
  //CONTINUE HERE (3:17:55)
  const data = await prisma.user.update({
    where: {
        id: session.user?.id,
    },
    data: {
        userName: "asdfasdf",
        name: "asdfasdf"
    }
  });
}
