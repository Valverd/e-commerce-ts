import { FunctionComponent } from 'react'
import { CustomInputContainer } from './custom-input-styles'

interface CustomInputProps {
    hasError?: boolean
}

const CustomInput:FunctionComponent<CustomInputProps> = ({hasError}) => {
  return <CustomInputContainer hasError={hasError}></CustomInputContainer>
}

export default CustomInput