import User, { UserDocument, UserInput } from '../models/user.model'
import { omit } from 'lodash'
import { FilterQuery } from 'mongoose'

export const createUser = async (input: UserInput) => {}

export const validatePassword = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const user = await User.findOne({ email })
  if (!user) return false
  const isValid = await user.verifyPassword(password)
  if (!isValid) return false
  return omit(user.toJSON(), 'password')
}
