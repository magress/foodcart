import mongoose from 'mongoose';
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});
//find if user exist in the database 
userSchema.statics.findByCredentials = async (email,password)=>{
  const user = await userModel.findOne({email});

  if(!user){
      throw new Error('Unable to login')
  }
  const isMatch = await bcrypt.compare(password,user.password)
  if(!isMatch){
      throw new Error('Unable to login')
  }

  return user

}

//to store password into hashing format
userSchema.pre('save',async function(next){
  const user = this
  if(user.isModified('password')){
      user.password= await bcrypt.hash(user.password,8)
  }
  next()
})

const userModel = mongoose.model('User', userSchema);

export default userModel;
