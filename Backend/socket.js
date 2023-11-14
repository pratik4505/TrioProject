let io; 
const User=require('./models/user');
const uuid = require('uuid');

export function init(httpServer) {
  io = require('socket.io')(httpServer);
  return io;
}


export function getIO() {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
}

export function runIO(io) {

  io.on('connection', socket => {
    console.log('client connected');

    const token = socket.request.headers.cookie.token;
    const userId=socket.request.headers.cookie.userId;
  

    socket.on("setup", (room) =>{
      socket.join(room);
      console.log(room,"joined")
    })

    socket.on('endorsement', async (data) => {
      try {
        const currentUser = await User.findById(userId).select('username');
        const userName = currentUser.username; 
    
        const user = await User.findById(data.to).select('notifications'); 
        const title = "An endorsement";
        const description = `${userName} endorsed your ${data.skill} skill with recommendation "${data.recommendation}"`;
    
        const myUuid = uuid.v4();
        
       
        user.notifications.set(myUuid, { title: title, description: description });
    
       
        await user.save();
    
        // Emit the notification to the specific user
        socket.to(data.to).emit("newNotification", { type: "endorsement", title, description });
      } catch (error) {
        console.error('Error processing endorsement:', error);
      }
    });
    



  });


}


