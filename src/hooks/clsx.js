export default function clsx(...className) {
    return className.filter(Boolean).join(" ");
}
