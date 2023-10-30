import React from "react"
import Store from "./Store"

function StoreList({stores}) {

    const storeComponents = stores.map(store => {
        // console.log(store)
        return <Store key={store.id} store={store}/>
    })

    // console.log(storeComponents)

    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                </tr>
                {storeComponents}
            </tbody>
        
        </table>
    );
}

export default StoreList;