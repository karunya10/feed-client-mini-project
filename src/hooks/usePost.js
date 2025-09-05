import toast from "react-hot-toast";
import api from "../services/api";

export const fetchPosts = async () => {
  try {
    const response = await api.get("/post");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (postData) => {
  try {
    await api.post("/post", postData);
    toast.success("Post Created Successfully");
  } catch (error) {
    console.log(error);
  }
};

export const editPost = async (id, postData) => {
  try {
    await api.put(`/post/${id}`, postData);
    toast.success("Post Edited Successfully");
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = async (id) => {
  try {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      await api.delete(`/post/${id}`);
      toast.success("Post Deleted Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
