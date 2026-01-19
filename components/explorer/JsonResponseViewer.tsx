export default function JsonResponseViewer({ data }: { data: any }) {
if (!data) {
return (
<div className="text-sm text-gray-400">No response yet</div>
)
}


return (
<pre className="max-h-[400px] overflow-auto rounded-md bg-gray-900 p-4 text-xs text-green-200">
{JSON.stringify(data, null, 2)}
</pre>
)
}