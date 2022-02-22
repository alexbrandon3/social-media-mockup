import fox from "./components/homepage/assets/images/me_irl.jpg";
import dude from "./components/homepage/assets/images/picture.png";
import ad from "./components/homepage/assets/images/ad.png";

export const Users = [
  {
    id: 1,
    profilePicture: dude,
    username: "Alex Brandon",
  },
  {
    id: 2,
    profilePicture: dude,
    username: "Cody Ktestakis",
  },
  {
    id: 3,
    profilePicture: dude,
    username: "John Jackson",
  },
  {
    id: 4,
    profilePicture: dude,
    username: "Jack Johnson",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "It's the first post, feeling great!",
    photo: fox,
    date: "2/22/2022",
    userId: 1,
    like: 113,
    comment: 47,
  },
  {
    id: 2,
    desc: "And now a word from our sponsor...",
    photo: ad,
    date: "30 minutes ago",
    userId: 2,
    like: 999,
    comment: 1,
  },
  {
    id: 3,
    desc: "Felt cute, might delete later.",
    photo: dude,
    date: "30 seconds ago",
    userId: 3,
    like: 2,
    comment: 1,
  },
  {
    id: 4,
    desc: "How do I look?",
    photo: dude,
    date: "just now",
    userId: 4,
    like: 1,
    comment: 2,
  },
];
