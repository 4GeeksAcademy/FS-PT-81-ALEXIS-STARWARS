const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url:'https://www.swapi.tech/api',
			people:[],
			character:[]
			
		},
		actions: {
			addRemoveFavorite:()=>{},
			getData: async (type) => {
				try{
					const resp = await fetch(`${getStore().url}/${type}`);
					if(!resp.ok) throw new Error('Error fetching people')
						const data= await resp.json()
					setStore({[type]: data.results});

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
