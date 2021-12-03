const github = async () => {
  return await fetch("https://api.github.com/users/mwelwankuta").then((res) =>
    res.json()
  );
};

export default github;
