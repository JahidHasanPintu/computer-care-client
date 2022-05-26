import { useEffect, useState } from "react"

const useInventory = id => {
    const [inventoryItem, setInventoryItem] = useState({})
    useEffect(() => {
        const url = `https://computer-care.herokuapp.com/part/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryItem(data))
    }, [id])
    return [inventoryItem]
}
export default useInventory