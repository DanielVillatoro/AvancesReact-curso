import { getUser } from "../../base/05-funciones";



describe('Pruebas en 05-funcions',()=>{
    test('Debe retornar un objeto', () => {
        const userTest={
            uid: 'ABC123',
            username: 'El_Papi1502'
    };
        const user=getUser();

        // console.log(user);
        expect(user).toEqual(userTest); //Se usa toEqual ya que es un objeto.
    })
    
})