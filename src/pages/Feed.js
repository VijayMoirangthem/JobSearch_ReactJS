import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Container,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (query.length > 2) {
        const response = await axios.get(
          `https://joblisting-latest.onrender.com/posts/${query}`
        );
        setPosts(response.data);
      }
    };

    const fetchInitialPosts = async () => {
      const response = await axios.get(
        `https://joblisting-latest.onrender.com/allPosts`
      );
      setPosts(response.data);
    };

    if (query.length === 0) fetchInitialPosts();
    else fetchPosts();
  }, [query]);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(
        `https://joblisting-latest.onrender.com/post/${postId}`
      );
      // Filter out the deleted post from the state
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: "1%" }}>
      <Box sx={{ marginBottom: "2%" }}>
        <Button
          variant="outlined"
          component={Link}
          to="/"
          sx={{ marginRight: "1rem", marginTop: "2%" }}
        >
          Back
        </Button>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
          sx={{ width: "75%", padding: "2% 0" }}
          fullWidth
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={4}>
            <Card sx={{ padding: "2rem", height: "100%" }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                {post.profile}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                Description: {post.desc}
              </Typography>
              <Typography variant="body1">
                Years of Experience: {post.exp} years
              </Typography>
              <Typography variant="body1">Location: {post.location}</Typography>
              <Typography variant="body1">
                Skills: {post.techs.join(", ")}
              </Typography>
              <Button onClick={() => handleDelete(post.id)} color="error">
                Delete
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Feed;
