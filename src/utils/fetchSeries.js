const {APP_API_KEY}=import.meta.env
export const fetchSeries=async(series)=>{
    const URL=`https://api.tvmaze.com/search/shows?q=${series}`
    const req= await window.fetch(URL)
    const res= await req.json()
    return res
}