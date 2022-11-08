const toJson = async (res: any) => {

    const json = res.json()

    if (res.ok) {
        return json
    } else {
        throw new Error(json.message);
    }
}

export const getPostList = async () => {

    const res = await fetch("http://127.0.0.1:8000/posts/", {
        method: 'GET',
    })

    return toJson(res)
}

export const getPostDetail = async (id: string) => {

    const res = await fetch(`http://127.0.0.1:8000/posts/${id}/`, {
        method: 'GET',
    })

    return toJson(res)
}