import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/store'
import { setUser } from '@/store/slices/userSlice'
const UserProfile = () => {
  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)
  const updateUser = () => {
    dispatch(setUser({ name: 'Miftah Adem', email: 'miftahaadem@gmail.com' }))
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-semibold">User Profile</h1>
        <p className="mt-4 text-lg">Name: {user.name}</p>
        <p className="mb-4 text-lg">Email: {user.email}</p>
        <button
          onClick={updateUser}
          className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600"
        >
          Update User
        </button>
      </div>
    </div>
  )
}
export default UserProfile
