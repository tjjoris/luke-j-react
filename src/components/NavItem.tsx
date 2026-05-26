export default function NavItem({ link, name, setSelectedCategory }: { link: string, name: string, setSelectedCategory: (name: string) => void }) {
    return (
        <li><a href={link} onClick={() => setSelectedCategory(name)}>{name}</a></li>
    )

}