import React from 'react'

type SelectOption = {
    label: string
    value: string
}

type SelectProps = {
    options: (value: SelectOption | undefined) => void
    value: SelectOption[]
    onChange: SelectOption
}

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <div>Select</div>
  )
}
