export type bookmark = {
    title: string,
    url:   string,
    description: string,
    tags: string[],
    themeColor: string,
    status: "private" | "public",
}

export type msg = {
    mail: string,
    message: string,
}