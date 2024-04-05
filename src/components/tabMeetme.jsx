export default function TabMeetMe({children, onSelect}) {
    console.log('Test din tabMeetme',children)
    return (<li>
        <button onClick={onSelect}>{children}</button>
    </li>)
}