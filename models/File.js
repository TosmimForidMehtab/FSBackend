import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fileSchema = new Schema(
    {
        filename: {
            type: String,
            required: true,
        },
        secure_url: {
            type: String,
            required: true,
        },
        format: {
            type: String,
            required: true,
        },
        sizeInBytes: {
            type: String,
            required: true,
        },
        sender: {
            type: String,
        },
        receiver: {
            type: String,
        },
    },
    { timestamps: true }
);

const File = mongoose.model("File", fileSchema);

export default File;
