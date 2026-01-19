export default function DocsPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>OpenHealth NG API</h1>

      <section>
        <h2>Base URL</h2>
        <pre>/api/v1</pre>
      </section>

      <section>
        <h2>Facilities</h2>

        <h3>GET /facilities</h3>
        <p>Returns a list of health facilities.</p>

        <h4>Response 200</h4>
        <pre>{`[
  {
    "id": "uuid",
    "name": "Main Campus Clinic",
    "type": "clinic",
    "address": "University Road",
    "created_at": "2026-01-18T12:00:00Z"
  }
]`}</pre>

        <h3>POST /facilities</h3>
        <p>Create a new facility.</p>

        <h4>Request Body</h4>
        <pre>{`{
  "name": "string",
  "type": "string",
  "address": "string"
}`}</pre>

        <h4>Response 201</h4>
        <pre>{`{
  "id": "uuid",
  "name": "Main Campus Clinic",
  "type": "clinic",
  "address": "University Road",
  "created_at": "2026-01-18T12:00:00Z"
}`}</pre>
      </section>
    </main>
  );
}
