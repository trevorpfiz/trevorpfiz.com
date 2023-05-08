import Projects from '~/ui/Projects'

export default function ProjectsPage() {
  return (
    <>
      <div className="prose dark:prose-invert">
        <h1 className="font-sans text-5xl font-bold">{`Things I've made.`}</h1>
        <p>{`These are the projects I am most proud of.`}</p>
      </div>
      <div className="my-20">
        <Projects />
      </div>
    </>
  )
}
