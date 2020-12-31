const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "nforenojrwei2",
  mongoUri:" mongodb+srv://treek:pokemon1@cluster0.raqky.mongodb.net/classrooms?retryWrites=true&w=majority"
}

export default config
