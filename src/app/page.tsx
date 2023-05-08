import { GitHubIcon, LinkedInIcon, TwitterIcon } from '~/ui/SocialIcons'

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <h1 className="font-sans text-5xl font-bold">Learning.</h1>
      <p>{`Hey, I'm Trevor!`}</p>
      <div className="mt-6 flex gap-6">
        <a href="https://twitter.com/trevorpfiz" target="_blank" rel="noreferrer noopener">
          <TwitterIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a href="https://github.com/trevorpfiz" target="_blank" rel="noreferrer noopener">
          <GitHubIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="https://www.linkedin.com/in/trevor-pfizenmaier"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
      </div>
    </div>
  )
}
