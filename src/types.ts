export type Autor = {
  id: number;
  nombre: string;
};

export type Libro = {
  id: number;
  titulo: string;
  autor_id: number;
};
