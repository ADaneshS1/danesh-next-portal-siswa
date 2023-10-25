import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ppqita:santri@ppqitadb.dada60q.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectDB()

const Post = mongoose.model('blogs', new mongoose.Schema({
  title: String,
  content: String,
}));