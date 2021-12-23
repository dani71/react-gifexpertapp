import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs y Tecth ', () => {

    test('debe traer 10 elementos ', async () => {

        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);

    })

    test('cadena vacía ', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    })



})