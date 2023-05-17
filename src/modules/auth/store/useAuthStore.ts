import { create } from 'zustand'
import {zustandStorage} from '../../../store/zustandStorage';
import {createJSONStorage,persist} from 'zustand/middleware';
import { User } from '../types/user';

const fixedUsers: User[] = [{
    id:'1',
    email:'email',
    password:'password',
    profilePicture:'pfp',
    favoriteGenres:['horror','action','comedy'],
    favoriteMovies:[],
},
{
    id:'2',
    email:'user',
    password:'user',
    profilePicture:'pfp',
    favoriteGenres:['horror','action','comedy'],
    favoriteMovies:[],
    
},
{
    id:'3',
    email:'A',
    password:'A',
    profilePicture:'pfp',
    favoriteGenres:['horror','action','comedy'], 
    favoriteMovies:[],
}
]

export interface AuthState{
    users : User[];
    user  : User | null;
    setCurrentUser: (user : User | undefined | null) => void;
    getUser: (id:string) => void;
    updateUser: (user:User) => void;
}

const useAuthStore = create(
  persist<AuthState>(
    (set,get) => ({
  users:fixedUsers,
  user: null,
  setCurrentUser: (newUser : User | undefined | null) => set((state: AuthState) => ({ user: newUser })),
  getUser: (id:string) => {
    const user = get().users.find((item) => item.id === id)
    set((state:AuthState)=>
        ({...state,user:user}))
    },
  updateUser: (newUser:User) => {
    const index = get().users?.findIndex((item)=>item.id===newUser.id);
    const newUsers = get().users;
    newUsers[index] = newUser;
    set((state:AuthState)=>({users:newUsers,user:newUser}))
  },
})
,{
  name:'auth-storage',
  storage:createJSONStorage(()=> zustandStorage)
})
)

export default useAuthStore;

