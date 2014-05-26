var options = {};

if (ENV.adapterHost) {
  options = { host: ENV.adapterHost };
}

export default DS.ActiveModelAdapter.extend(options);
