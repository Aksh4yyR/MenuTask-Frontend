import Server_url from "./serverUrl";
import commonAPI from "./commonAPI";

export const addMenu=async(reqBody)=>
{
    return await commonAPI("POST",`${Server_url}/add-menu`,reqBody)

}
export const addMenuItems=async(reqBody,id)=>
{
    return await commonAPI('POST',`${Server_url}/add-item/${id}`,reqBody)
}
export const viewMenus=async(name)=>
{
    return await commonAPI('GET',`${Server_url}/view-menu?name=${name}`)
}

export const AllMenus=async()=>
{
    return await commonAPI('GET',`${Server_url}/all-menus`)
}
