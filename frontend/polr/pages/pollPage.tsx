import Head from 'next/head'
import { useState } from 'react'
import DrawerComp from '@/components/DrawerComp'
import { ThemeToggle } from '@/components/ThemeToggle'
import PollCard from '@/components/pollCard'
import styles from '@/styles/PollPage.module.css'

interface Poll {
  id: string
  title: string
  description: string
  options: string[]
}

const samplePolls: Poll[] = [
  {
    id: 'poll-1',
    title: 'What is your favorite programming language?',
    description: 'Choose the language you enjoy working with the most',
    options: ['JavaScript', 'Python', 'TypeScript', 'Go'],
  },
  {
    id: 'poll-2',
    title: 'Which framework do you prefer?',
    description: 'Pick your favorite web framework',
    options: ['React', 'Vue', 'Angular', 'Svelte'],
  },
  {
    id: 'poll-3',
    title: 'What is your preferred work environment?',
    description: 'Choose where you like to code',
    options: ['Remote', 'Office', 'Hybrid', 'Coffee Shop'],
  },
  {
    id: 'poll-4',
    title: 'Best time to drink coffee?',
    description: 'When do you usually have your coffee?',
    options: ['Morning', 'Afternoon', 'Evening', 'All day'],
  },
  {
    id: 'poll-5',
    title: 'Favorite text editor?',
    description: 'What text editor do you prefer?',
    options: ['VS Code', 'Vim', 'IntelliJ', 'Sublime'],
  },
  {
    id: 'poll-6',
    title: 'Tabs or spaces?',
    description: 'The eternal debate - indentation preference',
    options: ['Tabs', 'Spaces'],
  },
  {
    id: 'poll-7',
    title: 'Best debugging method?',
    description: 'How do you debug your code?',
    options: ['Console.log', 'Debugger', 'Rubber duck', 'Stack Overflow'],
  },
  {
    id: 'poll-8',
    title: 'Preferred time for meetings?',
    description: 'When do you prefer to have meetings?',
    options: ['Morning', 'Midday', 'Afternoon', 'Never'],
  },
]

export default function PollPage() {
  const [cardsPerView, setCardsPerView] = useState(1)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition((e.target as HTMLDivElement).scrollLeft)
  }

  const handlePollSubmit = (pollId: string, selectedOption: string) => {
    console.log(`Poll ${pollId}: ${selectedOption}`)
  }

  return (
    <>
      <Head>
        <title>Polls - POLR</title>
        <meta name="description" content="Browse and vote on polls" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DrawerComp />
      <ThemeToggle />

      <main className={styles.container}>
        <div className={styles.header}>
          <h1>POLR Polls</h1>
          <p>Scroll through and vote on polls that interest you</p>
        </div>

        <div className={styles.deckContainer}>
          <div
            className={styles.pollDeck}
            style={{
              gridTemplateColumns: `repeat(${cardsPerView}, minmax(300px, 1fr))`,
            }}
          >
            {samplePolls.map((poll) => (
              <div key={poll.id} className={styles.pollCardWrapper}>
                <PollCard
                  id={poll.id}
                  title={poll.title}
                  description={poll.description}
                  options={poll.options}
                  onSubmit={(option) => handlePollSubmit(poll.id, option)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.controlsSection}>
            
           
          </div>
        </div>
      </main>
    </>
  )
}
