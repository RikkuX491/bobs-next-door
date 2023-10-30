import React from "react"

function NewStoreForm({addStore, updateFormData}) {

    // console.log(addStore)
    // console.log(updateFormData)

    return(
        <form onSubmit={addStore}>
            <input onChange={updateFormData} type="text" id="name" placeholder="Store Name"/>
            <input onChange={updateFormData} type="text" id="image" placeholder="Image URL" />
            <input onChange={updateFormData} type="number" id="season" placeholder="Season" step="1"/>
            <input onChange={updateFormData} type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;