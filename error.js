setTimeout(() => {
  throw new Error("oops");
}, 300);

process.on("uncaughtException", () => {});

process.on("unhandledRejection", () => {
  // handle asynchronous errors of which you don't know how they were caused,
  // maybe put in top of index file to register
});
