export default function ApiInfoTab() {
  return (
    <div className="space-y-6 text-sm">
      <div>
        <h2 className="font-semibold">Base URL</h2>
        <code className="block bg-gray-100 p-2 rounded">
          https://openhealth-ng.vercel.app/api/v1
        </code>
      </div>

      <div>
        <h2 className="font-semibold">Versioning</h2>
        <p>All endpoints are versioned under <code>/v1</code>.</p>
      </div>

      <div>
        <h2 className="font-semibold">Usage</h2>
        <p>
          This API is public and unauthenticated. Designed for discovery,
          emergency access, and civic tooling.
        </p>
      </div>

      <div>
        <h2 className="font-semibold">Example</h2>
        <pre className="bg-gray-100 p-3 rounded overflow-x-auto">
{`curl https://openhealth-ng.vercel.app/api/v1/facilities?state=Oyo`}
        </pre>
      </div>
    </div>
  );
}
