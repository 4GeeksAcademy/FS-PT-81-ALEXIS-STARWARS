const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url:'https://www.swapi.tech/api/',
			people:[],
			character:[]
			
		},
		actions: {
			getPeople:async() =>{
				try{
					const resp= await fetch(getStore().url+'/people');
					if(!resp.ok) throw new Error('Error fetching people')
						const data= await resp.json()
					console.log('data----->', data)
					console.log('data.results------->', data.results)
					setStore({people:data.results})

				} catch (error){
					console.log(error);

				}
			
			},
			getOne: async(uid)=>{
				try{
					const resp = await fetch(getStore().url+'/people/'+uid);
					if(!resp.ok) throw new Error('Error fetching people');
					const data = await resp.json();
					setStore({character: data.result});
				} catch(error){
					console.log(error);
				}
			}
}
	}
	};


export default getState;
