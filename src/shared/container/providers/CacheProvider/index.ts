import { container } from 'tsyringe';
import ICacheProvider from './models/ICacheProvider';

import RedisCacheProvider from './implementations/RedisCacheProvider';

const providers = {
  disk: RedisCacheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.disk);
