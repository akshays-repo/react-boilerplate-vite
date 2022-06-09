type Props = {
  type: 'primary' | 'secondary'
  title: string
}

const AppButton = (props: Props) => {
  const { title } = props

  return <button>{title}</button>
}
export default AppButton
