import {useState} from 'react'

const useTabs = (list) => {
    const [tabs, setTabs] = useState(list)
    const onToggle = (activeIdx) => {
       const newTabs = tabs.map((item) => ({...item, active: false}))
       newTabs[activeIdx].active = true
       setTabs(newTabs)
    }
    return [tabs, setTabs, onToggle]
}

export default useTabs