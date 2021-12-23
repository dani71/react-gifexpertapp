import { useFetchGifs } from "../../hooks/useFetchGifs"
import '@testing-library/react-hooks'
import { renderHook } from "@testing-library/react-hooks";



describe('Prebas sobre el hook useFechGifs', () => {

    test('debe de retornar el estado inicial ', async() => {

        // const {result} = renderHook(() =>  useFetchGifs( 'One Punch' ) );
        const {result, waitForNextUpdate} = renderHook(() =>  useFetchGifs( 'One Punch' ) );
        const {data, loading} = result.current;
        // const { data, loading } = useFetchGifs( 'One Punch' );
        // console.log(data, loading)

        await waitForNextUpdate(); //esto tiene que ver con el test siguiente, no con este, para que no deje el componente desmontado

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe retornar un array de imágenes y el loading en false', async () => {

        const {result, waitForNextUpdate } = renderHook(() =>  useFetchGifs( 'One Punch' ) );

        await waitForNextUpdate();

        const {data, loading} = result.current;        

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
        
    });
    
});
