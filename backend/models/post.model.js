import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: null
    }
});

const blogSchema = new mongoose.Schema({
    sections: {
      type: [SectionSchema],
      required: true,
      validate: [(val) => val.length > 0, 'At least one section is required']
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    
}, {timestamps: true});

const blogModel = mongoose.model("blogs", blogSchema);

export default blogModel;