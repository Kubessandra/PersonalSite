import { GITHUB, LINKEDIN, TWITTER } from '@/lib/constants'
import Link from 'next/link'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './SocialIcons'

interface SocialLink {
  href: string
  icon: (props: any) => JSX.Element
}

function SocialLink({ icon: Icon, ...props }: SocialLink) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export const SocialRow = () => {
  return (
    <div className="mt-6 flex gap-6">
      <SocialLink
        href={TWITTER}
        aria-label="Follow on Twitter"
        icon={TwitterIcon}
      />
      {/* <SocialLink */}
      {/*   href="https://instagram.com" */}
      {/*   aria-label="Follow on Instagram" */}
      {/*   icon={InstagramIcon} */}
      {/* /> */}
      <SocialLink
        href={GITHUB}
        aria-label="Follow on GitHub"
        icon={GitHubIcon}
      />
      <SocialLink
        href={LINKEDIN}
        aria-label="Follow on LinkedIn"
        icon={LinkedInIcon}
      />
    </div>
  )
}
