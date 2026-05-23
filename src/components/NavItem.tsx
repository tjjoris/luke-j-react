export default function NavItem({ link, name }: { link: string, name: string }) {
    return (
        <li><a href={link}>{name}</a></li>
    )

}