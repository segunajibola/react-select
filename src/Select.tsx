import React from 'react'

type SelectOption {
    label: string
    value: string
}

type SelectProps {
    value: SelectOption[]
    onChange: SelectOption
    options: (value: SelectOption | undefined) => void
}

export default Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div>Select</div>
  )
}
