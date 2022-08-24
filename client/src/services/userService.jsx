const inspectUserUrl = "http://localhost:3000/api/user/";
const duelUsersUrl = "http://localhost:3000/api/users?";


const calcDuelWinner = (user1, user2) => {
  let user1Counter = 0
  let user2Counter = 0
  if (user1.titles.length > user2.titles.length) {
    user1Counter = user1Counter + 1
    user1.titlesWinner = true
  } else if (user1.titles.length < user2.titles.length) {
    user2Counter = user2Counter + 1
    user2.titlesWinner = true
  }
  if (user1["total-stars"] > user2["total-stars"]) {
    user1Counter = user1Counter + 1
    user1.totalStarsWinner = true
  } else if (user1["total-stars"] < user2["total-stars"]) {
    user2Counter = user2Counter + 1
    user2.totalStarsWinner = true
  }
  if (user1["highest-starred"] > user2["highest-starred"]) {
    user1Counter = user1Counter + 1
    user1.highStarsWinner = true
  } else if (user1["highest-starred"] < user2["highest-starred"]) {
    user2Counter = user2Counter + 1
    user2.highStarsWinner = true
  }
  if (user1["public-repos"] > user2["public-repos"]) {
    user1Counter = user1Counter + 1
    user1.publicReposWinner = true
  } else if (user1["public-repos"] < user2["public-repos"]) {
    user2Counter = user2Counter + 1
    user2.publicReposWinner = true
  }
  if (user1["perfect-repos"] > user2["perfect-repos"]) {
    user1Counter = user1Counter + 1
    user1.perfectReposWinner = true
  } else if (user1["perfect-repos"] < user2["perfect-repos"]) {
    user2Counter = user2Counter + 1
    user2.perfectReposWinner = true
  }
  if (user1.followers > user2.followers) {
    user1Counter = user1Counter + 1
    user1.followerWinner = true
  } else if (user1.followers < user2.followers) {
    user2Counter = user2Counter + 1
    user2.followerWinner = true
  }
  if (user1.following > user2.following) {
    user1Counter = user1Counter + 1
    user1.followingWinner = true
  } else if (user1.following < user2.following) {
    user2Counter = user2Counter + 1
    user2.followingWinner = true
  }
  if (user1Counter > user2Counter) {
    user1.winner = true
  } else if (user1Counter < user2Counter) {
    user2.winner = true
  }
}

export const inspectUser = async (username = "andrew") => {
  // await response of fetch call
  let response = await fetch(inspectUserUrl + username);
  let data = await response.json();
  return data;
};

export const duelUsers = async (user1 = "fabpot", user2 = "andrew") => {
  // await response of fetch call
  let response = await fetch(duelUsersUrl + `username=${user1}&username=${user2}`);
  let data = await response.json();
  calcDuelWinner(data[0], data[1])
  return data;
};
