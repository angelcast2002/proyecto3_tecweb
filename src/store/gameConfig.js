const gameConfig = (store) => {
  store.on("@init", () => ({
    gameConfig: {
      skin: "0",
      tema: "0",
    },
  }))
  store.on("gameConfig/set", (_, { skin, tema }) => ({
    gameConfig: {
      skin,
      tema,
    },
  }))
  store.on("gameConfig/reset", () => ({
    gameConfig: {
      skin: "0",
      tema: "0",
    },
  }))
}

export default gameConfig
