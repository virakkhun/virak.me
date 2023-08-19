export async function updateBlogView(id: number, view: number) {
	const fd = new FormData();
	fd.append('view', `${view}`);
	const res = await fetch(`/api/blog-view-count-api?id=${id}`, {
		method: 'PATCH',
		body: fd
	});
	if (!res.ok) throw new Error(res.statusText);
	return Promise.resolve(await res.json());
}
