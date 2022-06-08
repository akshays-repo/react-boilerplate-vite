/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import styled from 'styled-components'

type Props = {
  type: 'primary' | 'secondary'
  title: string
}

const AppButton = (props: Props) => {
  const { type, title } = props

  return <button>{title}</button>
}
export default AppButton
