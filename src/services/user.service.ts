import User from '../models/user.model'

const login = async (email: number) => {
  const user = await User.findOne({ email })
  user.
}
