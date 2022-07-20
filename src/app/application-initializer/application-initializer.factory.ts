import { ApplicationInitializerService } from './application-initializer.service';

export function applicationInitializerFactory(
  applicationInitializerService: ApplicationInitializerService
): () => Promise<void> {
  return (): Promise<void> => applicationInitializerService.init();
}
