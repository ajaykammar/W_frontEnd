module.exports = {
  apps: [
    {
      name: "ecom-frontend",
      script: "npm",
      args: "run dev -- --host",
      env: {
        NODE_ENV: "development"
      }
    }
  ]
};
