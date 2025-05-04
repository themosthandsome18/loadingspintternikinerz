import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// The static users array
const staticUsers = [
  { id: 1, name: 'Amarillo, Ralph Richmond', email: 'asherr707@gmail.com' },
  { id: 2, name: 'Ancaja, John Louise', email: 'johnlouiseancaja20@gmail.com' },
  { id: 3, name: 'Aviles, Emmanuel', email: 'avilesemman1221@gmail.com' },
  { id: 4, name: 'Barlan, Elysalyn', email: 'nylase12@gmail.com' },
  { id: 5, name: 'Bontoc, Reniel', email: 'padilloreniel178@gnail.com' },
  { id: 6, name: 'Cablaida, Mery Rose Ann', email: 'rosecablaida@gmail.com' },
  { id: 7, name: 'Caliwan, Kyla', email: 'kylacaliwan7@gmail.com' },
  { id: 8, name: 'Carabido, Carl Kien', email: 'carabido.carlkien.dll@gmail.com' },
  { id: 9, name: 'Capuno, Marianne Mae', email: 'capuno.marianne.dll@gmail.com' },
  { id: 10, name: 'Dapatnapo, Katrina', email: 'katkatdapatnapo96@gmail.com' },
  { id: 11, name: 'De la Cruz, Coedy', email: 'coedy0123@gmail.com' },
  { id: 12, name: 'Diaz, Jovan Allyn', email: 'allynjovan@gmail.com' },
  { id: 13, name: 'Dinglasan, Junelle', email: 'junelledinglasan@gmail.com' },
  { id: 14, name: 'Felonia, Margarette Ann', email: 'feloniamargaretteann12@gmail.com' },
  { id: 15, name: 'Gamba, Ron Jerick', email: 'gambaron34@gmail.com' },
  { id: 16, name: 'Garay, Martin Ryan', email: 'martinryangaray08@gmail.com' },
  { id: 17, name: 'Garay, Mark Ernest ', email: 'markernest322@gmail.com ' },
  { id: 18, name: 'Huidem, Trish-Anne ', email: 'huidemt@gmail.com' },
  { id: 19, name: 'Israel, John Joseph', email: 'johnjosephisrael99@gmail.com' },
  { id: 20, name: 'Lalisan, Quert Russel', email: 'quertrussellalisan@gmail.com' },
  { id: 21, name: 'Lim , Elaiza', email: 'eiziefloreslim@gmail.com' },
  { id: 22, name: 'Lugatoc, Kim Andrei', email: 'kimandreilugatoc10@gmail.com' },
  { id: 23, name: 'Lusanta, Louie John', email: 'lusanta.louiejohn.dll@gmail.com' },
  { id: 24, name: 'Macaraig , Jay Cee', email: 'macaraig.jaycee.dll@gmail.com' },
  { id: 25, name: 'Magadia, Reuel', email: 'reuelmagadia18@gmail.com' },
  { id: 26, name: 'Mansilungan, Johnrey', email: 'mansilungan.johnrey.dll@gmail.com' },
  { id: 27, name: 'Maribojoc , Maricel', email: 'maricelmaribojoc10@gmail.com' },
  { id: 28, name: 'Mariscotes, Jercel', email: 'jercelmariscotes09@gmail.com' },
  { id: 29, name: 'Mecantina, Nerjie Angelo', email: 'nerjieangelo@gmail.com' },
  { id: 30, name: 'Merillo, Junnalyn', email: 'merillo.junnalyn.dll@gmail.com' },
  { id: 31, name: 'Mompero Jr, Jessie', email: 'momperojr.jessie.dll@gmail.com' },
  { id: 32, name: 'Mora, Jhun Alberto', email: 'albertmora98@gmail.com' },
  { id: 33, name: 'Moralina, Andrei Miguel', email: 'moralinaandrei@gmail.com' },
  { id: 34, name: 'Naynes, John Paul', email: 'johnnaynes2021@gmail.com' },
  { id: 35, name: 'Nieva, John Paul', email: 'johnpaulnieva89@gmail.com' },
  { id: 36, name: 'Oareza, Andrew Matthew', email: 'oarezaandrew@gmail.com' },
  { id: 37, name: 'Obcemea, Jerome', email: 'jobcemea1417@@gmail.com' },
  { id: 38, name: 'Perez, Jimuel', email: 'perez.jimuel.dll@gmail.com' },
  { id: 39, name: 'Quijano, Jerwin Nico', email: 'jerwinquijano19@gmail.com' },
  { id: 40, name: 'Ramilo, Mark Jayson', email: 'ramilomarkjayson149@gmail.com' },
  { id: 41, name: 'Ramirez, Kenneth Alfrinc', email: 'ramirezkenzhst@gmail.com' },
  { id: 42, name: 'Ramos, Louiezzy Jane', email: 'louiezzyramos1119@gmail.com' },
  { id: 43, name: 'Tabanao, Lee Ann', email: 'tabanaoleeann@gmail.com' },
  { id: 44, name: 'Tomeo , Jomel', email: 'jomel.tomeo.16@gmail.com' },
  { id: 45, name: 'Verastigue, Willmyr Kurt', email: 'willmyrkurtverastigue@gmail.com' },
  { id: 46, name: 'Villamor, Russel Jhay ', email: 'villamor.ruselljhay.dll@gmail.com' },
  { id: 47, name: 'Villanueva, Jeremy Bryan ', email: 'jeremybryanvillanueva@gmail.com' },
  { id: 48, name: 'Viñas, Edwin', email: 'evinas954@gmail.com' }
];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    // Modified to use the static users array instead of API call
    return await new Promise((resolve) => 
        setTimeout(() => resolve(staticUsers), 2000)
    );
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: staticUsers, // Initialize with static users array
        status: 'idle',
        error: null
    },
    reducers: {
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        addUser: (state, action) => {
            state.users.push(action.payload);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { deleteUser, addUser } = usersSlice.actions;
export default usersSlice.reducer;