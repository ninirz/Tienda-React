// items.js
export const productos = [
    {
      producto: 'Blusa Floral',
      precio: 1299.99,
      talla: 'M',
      id: 1,
      categoria: 'Mujeres',
      stock: 2,
      descripcion: 'Una hermosa blusa floral perfecta para cualquier ocasión.',
    },
    {
      producto: 'Falda Midi',
      precio: 899.50,
      talla: 'S',
      id: 2,
      categoria: 'Mujeres',
      stock: 2,
      descripcion: 'Una elegante falda midi que realzará tu estilo.',
    },
    {
      producto: 'Vestido de Verano',
      precio: 1499.00,
      talla: 'L',
      id: 3,
      categoria: 'Mujeres',
      stock: 3,
      descripcion: 'Un vestido ligero y fresco perfecto para los días soleados.',
    },
    {
      producto: 'Camisa de Cuadros',
      precio: 1199.99,
      talla: 'M',
      id: 4,
      categoria: 'Hombres',
      stock: 20,
      descripcion: 'Una clásica camisa de cuadros para un look casual.',
    },
    {
      producto: 'Pantalones Chinos',
      precio: 999.50,
      talla: 'L',
      id: 5,
      categoria: 'Hombres',
      stock: 10,
      descripcion: 'Pantalones chinos cómodos y versátiles para cualquier ocasión.',
    },
    {
      producto: 'Chaqueta de Cuero',
      precio: 2999.00,
      talla: 'XL',
      id: 6,
      categoria: 'Hombres',
      stock: 24,
      descripcion: 'Una chaqueta de cuero resistente y con estilo para el invierno.',
    },
  ];  

export function getItemById(id){
    return productos.find((item) => item.id == id)
}
