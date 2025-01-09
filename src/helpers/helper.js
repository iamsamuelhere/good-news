export const isModerator = (user) => {
    // const moderators = ["iamsamuelhere@gmail.com", "premsab@gmail.com"]
    const moderators = JSON.parse(import.meta.env.VITE_MODERATORS);
    console.log("Parsed moderators", moderators)
    console.log("user.email", user?.email)
    if (moderators.includes(user?.email)) {
        console.log("user is moderator")
        return true;
    } else {
        console.log("user is not a moderator")
        return false
    }
}