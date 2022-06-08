import styled from 'styled-components'

type Props = {
  type: 'primary' | 'secondary'
}
const AppButton = (props: Props) => {
  const { type } = props

  const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    background-color: ${type === 'primary' ? 'red' : 'blue'};
    padding: 0.25em 1em;
    border-radius: 3px;
  `

  return <Button>Click me</Button>
}
export default AppButton
