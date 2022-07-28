import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

export interface UserInput {
  email: string
  password: string
  name: string
}
export interface UserDocument extends mongoose.Document, UserInput {
  createdAt: Date
  updatedAt: Date
  verifyPassword(password: string): Promise<boolean>
}

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
})

userSchema.pre('save', async function (next) {
  let user = this as UserDocument
  if (!user.isModified('password')) {
    return next()
  }
  const hash = await bcrypt.hashSync(user.password, 10)
  user.password = hash
  return next()
})

userSchema.methods.verifyPassword = async function (
  password: string
): Promise<boolean> {
  const user = this as UserDocument
  return bcrypt.compare(password, this.password).catch((e) => false)
}

const User = mongoose.model<UserDocument>('User', userSchema)

export default User
