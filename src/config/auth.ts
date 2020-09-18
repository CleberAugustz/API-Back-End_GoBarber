export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    // secret: '8097b747f31ab56566f88a880327ee6b',
    expiresIn: '1d',
  },
};
