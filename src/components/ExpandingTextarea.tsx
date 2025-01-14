import React from 'react'

const MIN_TEXTAREA_HEIGHT = 32

type ExpandingTextareaProps = {
  value: string
  setValue: (value: string) => void
  className?: string
  placeholder?: string
}

export default function ExpandingTextarea({
  value,
  setValue,
  className,
  placeholder,
}: ExpandingTextareaProps) {
  const textareaRef = React.useRef<null | HTMLTextAreaElement>(null)
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value)

  React.useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'inherit'
      // Set height
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`
    }
    // Reset height - important to shrink on delete
  }, [value])

  return (
    <textarea
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      ref={textareaRef}
      style={{
        minHeight: MIN_TEXTAREA_HEIGHT,
        resize: 'none',
      }}
      value={value}
    />
  )
}
