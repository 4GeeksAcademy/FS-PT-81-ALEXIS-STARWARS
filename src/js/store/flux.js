const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url:'https://www.swapi.tech/api',
			people:[],
			character:[],
			favorites:[]
			
		},
		actions: {
			addRemoveFavorite:(fav)=>{
				const store= getstore();
				const isFavorite = store.favorites.some(el=> el.uid === fav.uid && el.type === fav.type)
				if (isFavorite) 
				{
					setStore({
						favorites: store.favorites.filter(el=>!(el.uid === fav.uid && el.type === fav.type))
					})
				} else {
				setStore({favorites: [...store.favorites, fav]})
			}
			},
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
			getOne: async(type, uid)=>{
				try{
					const resp = await fetch(`${getStore().url}/${type}/${uid}`);
					if(!resp.ok) throw new Error('Error fetching people');
					const data = await resp.json();
					setStore({detailed: data.result});
				} catch(error){
					console.log(error);
				}
			}
}
	}
	};


export default getState;
