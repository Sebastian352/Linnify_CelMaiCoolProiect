export const getMovies = async(limit:number,page:number,genre:string) => {
    const  response = await fetch(`https://6453db49e9ac46cedf31a3e5.mockapi.io/movies?limit=${limit}&page=${page}&genre=${genre}`);
    const json = await response.json();
    console.log({json});
    return json
}