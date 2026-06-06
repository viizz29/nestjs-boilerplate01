// backup original env values
const originalEnv = { ...process.env };

export * from './configs/base';
export * from './configs/common';
export * from './configs/socketio-server';

delete originalEnv.NODE_ENV;
process.env = { ...originalEnv }; // restore the config
