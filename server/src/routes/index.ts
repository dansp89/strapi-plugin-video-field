export default [
  {
    method: 'GET',
    path: '/',
    // name of the controller file & the method.
    handler: 'controller.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/config/bunny-stream',
    handler: 'controller.getBunnyConfig',
    config: {
      policies: [],
      auth: false,
    },
  },
];
