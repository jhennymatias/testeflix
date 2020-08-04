import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/Video';
import categoriasRepository from '../../../repositories/categorias';


function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const [result, setResult] = useState('Teste de Unidade');
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });
  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        alert('Video Cadastrado com Sucesso!');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo ===  result;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
      <div>
        <select 
        style={
          {
          width: '100%',
          background: '#53585D',
          color: '#F5F5F5',
          display: 'block',
          height: '57px',
          fontsize: '18px',
          outline: 0,
          border: 0,
          borderTop: '4px solid transparent',
          borderBottom: '4px solid #53585D',
          padding: '16px 16px',
          marginBottom: '40px',
          resize: 'none',
          borderRadius: '4px',
          transition: 'border-color .3s',
        }
        } value={result} onChange={e => setResult(e.target.value)}> 
        {categorias.map((categoria) => (
          <option 
          key={`${categoria.titulo}`}
         value={categoria.titulo}
         selected
         > 
            {categoria.titulo}
          
          </option>
          ))}
        </select>
      </div>
      
      
        <button className="btn" type="submit">
          Cadastrar
        </button>
        <Link style={{marginLeft:"12px"}}className="btn" to="/cadastro/categoria">
        Cadastrar Categoria
        </Link>
      </form>

      <br />
      <br />

     
    </PageDefault>
  );
}

export default CadastroVideo;