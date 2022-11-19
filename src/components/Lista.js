
const List = () => {

    const items = [
        {
            id:1,
            name: "Tiago",
        },
        {
            id:2,
            name: "Paulo",
        },
        {
            id:3,
            name: "Fabyola",
        },
    ]

    return(
        <div>
            {items.map((item) => (
                <p>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    )
}

export default List