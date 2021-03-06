import { container } from 'tsyringe';
import IStorageProvider from './models/IStorageProvider';

import DiskStorageProvider from './Implementations/DiskStorageProvider';

const providers = {
  disk: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.disk,
);
