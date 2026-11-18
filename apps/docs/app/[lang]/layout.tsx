import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

export default async function LangLayout(props: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await props.params;

  return (
    <RootProvider
      search={{
        options: {
          api: '/api/search',
          defaultTag: lang,
        },
      }}
      i18n={{
        locales: [
          { name: 'Español', locale: 'es' },
          { name: 'English', locale: 'en' },
        ],
        locale: lang,
      }}
    >
      {props.children}
    </RootProvider>
  );
}
