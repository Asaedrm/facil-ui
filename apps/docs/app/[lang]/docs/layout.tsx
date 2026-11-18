import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default async function Layout(props: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await props.params;

  return (
    <DocsLayout
      tree={source.getPageTree(lang)}
      nav={{
        title: 'Fácil UI',
      }}
      links={[
        {
          text: 'React',
          url: `/${lang}/docs/react`,
          active: 'nested-url',
        },
        {
          text: 'Angular',
          url: `/${lang}/docs/angular`,
          active: 'nested-url',
        },
        {
          text: 'Storybook React',
          url: 'http://localhost:6006',
          external: true,
        },
        {
          text: 'Storybook Angular',
          url: 'http://localhost:6007',
          external: true,
        },
      ]}
      i18n
    >
      {props.children}
    </DocsLayout>
  );
}
