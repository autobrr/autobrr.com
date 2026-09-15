import Head from "@docusaurus/Head";

// Renders a schema.org JSON-LD block into the page head.
// Pass a single object or an array of objects; arrays are wrapped in @graph.
export default function JsonLd({ data }) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(payload)}</script>
    </Head>
  );
}
