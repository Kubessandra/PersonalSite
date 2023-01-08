import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Kubessandra</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="Keychron K6 Pro keyboard">
              Just a very good feeling with this keyboard, will probably switch
              to a custom keyboard one day.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="NeoVim">
              Because you need to go full nerd and I love vim.
            </Tool>
            <Tool title="iTerm2">
              My terminal and I use fish + fig with it.
            </Tool>
            <Tool title="Arc, the browser company">
              A chromium based browser.
            </Tool>
            <Tool title="Prisma.io">
              Best typescript ORM ever created if you really believe in
              typesafety.
            </Tool>
            <Tool title="NextJS">
              My default framework to write a new application with React.
            </Tool>
            <Tool title="Fork">
              A git client with a very good UX, mostly using it for conflict
              resolving or reviewing my changes. Most of the time I&apos;m using
              the CLI.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Easy to use and really close to the programming concept.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              For all the mangement of my projects, business plan, roadmap and
              more.
            </Tool>
            <Tool title="JasperAI">Content writing and blogs articles.</Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
