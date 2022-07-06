import { ApplicationInitializerService } from './application-initializer.service';

export function applicationInitializerFactory(
  applicationInitializerService: ApplicationInitializerService
): () => Promise<boolean | object | void> {
  return (): Promise<boolean | object | void> => applicationInitializerService.init();
}
