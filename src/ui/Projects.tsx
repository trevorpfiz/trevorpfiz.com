import Image from 'next/image'

import type { JSX, SVGProps } from 'react'
import { Card } from '~/components/Card'
import generationLogo from '~/images/generation-32x32.png'
import mithridLogo from '~/images/mithrid-favicon.png'
import thinkhiveLogo from '~/images/ThinkHive-comb-white.png'

const projects = [
  {
    name: 'Generation Allergy Free',
    description:
      'Free research-focused courses to make allergy freedom a reality for the generations to come.',
    link: { href: 'https://www.generationallergyfree.com/', label: 'generationallergyfree.com' },
    logo: generationLogo,
    alt: 'Generation Allergy Free Logo',
  },
  {
    name: 'ThinkHive',
    description:
      'A platform to create healthcare assistants that empower people with actionable health wisdom.',
    link: { href: 'https://www.thinkhive.ai/', label: 'thinkhive.ai' },
    logo: thinkhiveLogo,
    alt: 'ThinkHive Logo',
  },
  {
    name: 'Mithrid Health',
    description:
      'A business with the goal of treating allergies through a data-driven approach to Oral Immunotherapy.',
    link: { href: 'https://mithridhealth.vercel.app/', label: 'mithridhealth.vercel.app' },
    logo: mithridLogo,
    alt: 'Mithrid Health Logo',
  },
]

function LinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card as="li" key={project.name}>
          <Image
            src={project.logo}
            alt={project.alt}
            className="h-8 w-8 relative z-10 rounded-md"
            width={32}
            height={32}
          />
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <Card.Link href={project.link.href} target="_blank" rel="noreferrer noopener">
              {project.name}
            </Card.Link>
          </h2>
          <Card.Description>{project.description}</Card.Description>
          <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <LinkIcon className="h-6 w-6 flex-none" />
            <span className="ml-2">{project.link.label}</span>
          </p>
        </Card>
      ))}
    </ul>
  )
}
