const router = require("express").Router();

const passport = require("passport");
const jwt = require("jsonwebtoken");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../../models/user");
const HttpError = require("../../models/http-error");

let userData;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/callback",
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      const profileJson = profile._json;
       userData = {
        email: profileJson.email,
        firstname: profileJson.given_name,
        lastname: profileJson.family_name,
      };
      
      //console.log(profile.emails[0].value);
      //console.log(profileJson.email);//both correct
      return done(null, profile);
    }
  )
);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
  })
);

router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  async function (req, res) {
    // Successful authentication, redirect home.

    //check existence of user
    
    let user;
    try {
      user = await User.findOne({ email:userData.email }).select("_id");

      if (!user) {
        
        const newUser = new User({userName: userData.firstname+" "+userData.lastname,email:userData.email});
        user=await newUser.save();
      } 
    } catch (error) {
      const err = new HttpError("Server error", 505);
      throw err;
    }

    const token = jwt.sign(
      { email: userData.email, userId: user._id },
      process.env.SECRET_KEY
    ); 

    res.json({ token });

    res.redirect("/home");

    // https://stackoverflow.com/questions/47007811/how-can-i-make-passportjs-google-login-oauth-work-with-jwt-instead-of-creating-s
  }
);

module.exports =router;
