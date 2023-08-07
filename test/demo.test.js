describe('Pruebas en <DemoComponent />', () => {
    test("esta prueba no debe de fallar", () => {
    // 1: inalicialización 
    const menssaje1 = "hola mundo";
   // 2: estimulo
    const menssaje2 = menssaje1.trim();
   // 3: observar el comportamiento
    expect( menssaje1 ). toBe(menssaje2)
})
})

