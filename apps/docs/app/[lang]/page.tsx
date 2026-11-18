import Link from 'next/link';

export default async function HomePage(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;

  const isEs = lang === 'es';

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-fd-foreground">
          Fácil UI
        </h1>
        <p className="text-lg text-fd-muted-foreground sm:text-xl">
          {isEs
            ? 'Portal unificado de componentes y diseño para React y Angular.'
            : 'Unified component and design portal for React and Angular.'}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href={`/${lang}/docs/react`}
            className="rounded-lg bg-fd-primary px-6 py-3 font-semibold text-fd-primary-foreground shadow transition hover:opacity-90"
          >
            {isEs ? 'Documentación React' : 'React Documentation'}
          </Link>
          <Link
            href={`/${lang}/docs/angular`}
            className="rounded-lg border border-fd-border bg-fd-card px-6 py-3 font-semibold text-fd-card-foreground shadow transition hover:bg-fd-accent"
          >
            {isEs ? 'Documentación Angular' : 'Angular Documentation'}
          </Link>
        </div>

        <div className="pt-8 border-t border-fd-border mt-8 flex flex-wrap justify-center gap-6 text-sm text-fd-muted-foreground">
          <a
            href="http://localhost:6006"
            target="_blank"
            rel="noreferrer"
            className="hover:underline flex items-center gap-1 font-medium text-fd-foreground"
          >
            Storybook React (Port 6006) ↗
          </a>
          <a
            href="http://localhost:6007"
            target="_blank"
            rel="noreferrer"
            className="hover:underline flex items-center gap-1 font-medium text-fd-foreground"
          >
            Storybook Angular (Port 6007) ↗
          </a>
        </div>
      </div>
    </main>
  );
}
