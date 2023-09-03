let userPosts = [];
let lastUserActivityTime = null;

// Function to simulate creating a post
function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      userPosts.push(post);
      resolve(post);
    }, 1000);
  });
}

// Function to update the user's last activity time
function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastUserActivityTime = new Date();
      resolve(lastUserActivityTime);
    }, 1000);
  });
}

// Function to delete the last post
function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userPosts.length > 0) {
        const deletedPost = userPosts.pop();
        resolve(deletedPost);
      } else {
        reject("No posts to delete.");
      }
    }, 1000);
  });
}

// Function to log user's posts
function logUserPosts() {
  console.log("User's Posts:", userPosts);
}

// Example usage:
async function main() {
  try {
    const post = await createPost("New post content");
    console.log("Post Created:", post);

    const lastActivityTime = await updateLastUserActivityTime();
    console.log("Last Activity Time:", lastActivityTime);

    await deleteLastPost();
    console.log("Last Post Deleted");

    logUserPosts();
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
