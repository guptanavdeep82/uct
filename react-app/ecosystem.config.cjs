module.exports = {
  apps: [
    {
      name: "uct-frontend",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3001",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        API_URL: "https://api.uct.tl",
        NEXT_PUBLIC_API_URL: "https://api.uct.tl",
        NEXT_PUBLIC_SITE_URL: "https://www.uct.tl",
      },
    },
  ],
};
