const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs');
const crypto=require('crypto');

const userSchema =new mongoose.Schema({
  name:{
    type:String,
    required:[true,'user must has a name'],
  },
  role:{
    type:String,
    enum:['user','guide','guide-lead','admin'],
    default:'user'
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    validate:[validator.isEmail,'Please provide a valid email']
  },
  photo:{
    type:String,
    default: 'default.jpg'
  },
  password:{
    type:String,
    required:[true,'Please provide a password'],
    minLength:8,
    select :false
  },
  active:{
   type:Boolean,
   default:true,
   select:false
  },
  passwordConfirm:{
    type:String,
    required:[true,'Please confirm tour password'],
    validate:{
      validator:function(vl){
        return vl===this.password;
      },
      message:'passwords are not the same'
    }
  },
  passwordChangedAt:{
   type: Date
  },
  passwordResetToken:String,
  passwordResetExpires:Date
})

userSchema.pre('save',async function(next){
  if(!this.isModified('password')) return next();


  this.password=await bcrypt.hash(this.password,12);
  this.passwordConfirm=undefined;
})


userSchema.pre('save',function(next) {
  if(!this.isModified('password') || this.isNew) return next();


  this.changedPasswordAt=Date.now()-1000;

  next();
})

userSchema.pre(/^find/,function(next){
  this.find({active:{$ne:false}});
  next();
})


userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
  
};

userSchema.methods.changedPasswordAfter=function(JWTTimeStamp){
  if(this.passwordChangedAt) 
  {
    const changedTimeStamp=parseInt(this.passwordChangedAt.getTime() / 1000 , 10)

    return JWTTimeStamp < changedTimeStamp;

  }
  return false;
}

userSchema.methods.createPasswordResetToken=function(){
  const resetToken=crypto.randomBytes(32).toString('hex');

  this.passwordResetToken= crypto.createHash('sha256').update(resetToken).digest('hex');

  this.passwordResetExpires=Date.now() + 10 * 60 *1000;


  return resetToken;
}

const User =mongoose.model('User',userSchema);

module.exports=User;