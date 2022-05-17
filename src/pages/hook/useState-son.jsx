import {useState} from "react"
export default function Counter(props) {
    const [ count, setCount ] = useState(() => {
        return props.num
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>根据传入的作为初始值</button>
            {count}
        </div>
    )
}