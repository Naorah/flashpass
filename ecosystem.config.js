module.exports = {
  apps: [
    {
      name: 'flashpass-front',
      script: 'npm run dev',
      cwd: './',
      env: {
        NODE_ENV: 'development',
      },
      watch: true,
    },
    {
      name: 'flashpass-signaling',
      script: 'node lib/signaling.js',
      cwd: './',
      env: {
        NODE_ENV: 'development',
      },
      watch: true,
    },
  ],
};