import axios from "axios";

export const getReposByUsername = async (req, res, next) => {
  //   const repos = await axios.get(
  //     `https://api.github.com/users/${req.params.username}/repos`
  //   );
  //   const promises = repos.data.map(async (repo) => {
  //     const selected_repo = await {
  //       name: repo.full_name,
  //       description: repo.description,
  //       watch_count: repo.watchers,
  //     };
  //     return selected_repo;
  //   });
  //   const all_repos = await Promise.all(promises);
  //   all_repos.sort((a, b) => {
  //     return b.watch_count - a.watch_count;
  //   });
  //   if (!all_repos || all_repos === []) {
  //     res.status(404).send({ success: false, message: "User not found 404" });
  //   }
  //   res.status(200).json({ success: true, repos: all_repos });

  await axios
    .get(`https://api.github.com/users/${req.params.username}/repos`)
    .then(async (repos) => {
      const promises = repos.data.map(async (repo) => {
        const selected_repo = await {
          name: repo.full_name,
          description: repo.description,
          watch_count: repo.watchers,
          avatar: repo.owner.avatar_url,
        };

        return selected_repo;
      });
      const all_repos = await Promise.all(promises);
      all_repos.sort((a, b) => {
        return b.watch_count - a.watch_count;
      });
      res.status(200).json({ success: true, repos: all_repos });
    })
    .catch((err) =>
      res.status(404).send({ success: false, message: err.message })
    );
};
