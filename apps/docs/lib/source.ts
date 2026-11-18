import { docs, meta } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { i18n } from './i18n';

export const source = loader({
  baseUrl: '/docs',
  source: {
    files: [
      ...docs.map((doc) => ({
        type: 'page' as const,
        path: doc._file.path,
        absolutePath: doc._file.absolutePath,
        data: doc,
      })),
      ...meta.map((m) => ({
        type: 'meta' as const,
        path: m._file.path,
        absolutePath: m._file.absolutePath,
        data: m,
      })),
    ],
  },
  i18n,
});
