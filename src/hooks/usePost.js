import React, { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";

import api from "../services/api";

export const usePost = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await api.get("/post");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (postData) => {
    try {
      await api.post("/post", postData);
      fetchPosts();
      toast.success("Post Created Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (id, postData) => {
    try {
      await api.put(`/post/${id}`, postData);
      fetchPosts();
      toast.success("Post Edited Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async (id) => {
    try {
      const confirmDelete = confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        await api.delete(`/post/${id}`);
        fetchPosts();
        toast.success("Post Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchPosts, createPost, editPost, deletePost, posts };
};
