/**
 * JsonLd — render a JSON-LD structured-data block from a Server Component.
 * Data must be static, factual, and never user-supplied (BUILD-SPEC §7:
 * JSON-LD lives in Server Components; no invented facts, dates, or numbers).
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE_URL = 'https://driveexotiq.com';

/** BreadcrumbList for a simple Home → page trail. */
export function breadcrumbs(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
