module.exports = {
  apps: [
    {
      name: "monitor.actions",
      script: "./dist/actions/monitor.js",
      watch: false,
      autorestart: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "monitor.rows",
      script: "./dist/tables/monitor.js",
      watch: false,
      autorestart: false,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
