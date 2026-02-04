import React, { useState } from 'react'
import styles from '@/styles/PollCard.module.css'

interface PollCardProps {
  id?: string
  title: string
  description: string
  options: string[]
  onSubmit?: (selectedOption: string) => void
}

export default function PollCard({
  id = 'poll-1',
  title,
  description,
  options,
  onSubmit,
}: PollCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedOption) {
      setSubmitted(true)
      onSubmit?.(selectedOption)
      // Reset after 2 seconds
      setTimeout(() => {
        setSelectedOption(null)
        setSubmitted(false)
      }, 2000)
    }
  }

  return (
    <div className={styles.pollCard}>
      <div className={styles.cardHeader}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <label key={index} className={styles.optionLabel}>
            <input
              type="radio"
              name={id}
              value={option}
              checked={selectedOption === option}
              onChange={(e) => setSelectedOption(e.target.value)}
              className={styles.radioInput}
              disabled={submitted}
            />
            <span className={styles.optionText}>{option}</span>
            <span className={styles.customRadio} />
          </label>
        ))}
      </div>

      <div className={styles.cardFooter}>
        <button
          onClick={handleSubmit}
          disabled={!selectedOption || submitted}
          className={`${styles.submitButton} ${
            submitted ? styles.submitted : ''
          }`}
        >
          {submitted ? '✓ Submitted' : 'Submit'}
        </button>
      </div>
    </div>
  )
}
