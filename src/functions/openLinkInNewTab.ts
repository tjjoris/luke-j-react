
const openLinkInNewTab = (url: string) => {
    if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
    }
}

export { openLinkInNewTab };