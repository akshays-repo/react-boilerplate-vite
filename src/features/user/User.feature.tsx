import { useAppDispatch, useAppSelector } from '../../reduxToolKit/hook'
import { fetchUser, selectUser, selectUserFetchStatus } from './User.slice'

const UserFeature = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  const userFetchStatus = useAppSelector(selectUserFetchStatus)

  const handleClick = async () => {
    await dispatch(fetchUser())
  }

  return (
    <>
      {/* Display the current user name */}
      <div>{user}</div>
      {/* On button click, dispatch a thunk action to fetch a user */}
      <button
        onClick={() => {
          void handleClick()
        }}
      >
        Fetch user
      </button>
      {/* At any point if we're fetching a user, display that on the UI */}
      {userFetchStatus === 'loading' && <div>Fetching user...</div>}
    </>
  )
}
export default UserFeature
